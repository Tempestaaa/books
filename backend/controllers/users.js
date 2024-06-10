import expressAsyncHandler from "express-async-handler";
import Users from "../models/users.js";
import createToken from "../utils/createToken.js";

// ========== PUBLIC ==========

export const register = expressAsyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  const userExists = await Users.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await Users.create({ username, email, password });
  if (user) {
    createToken(res, user._id);
    res.status(201).json({
      _id: user._id,
      username: user.username,
      email: user.email,
      image: user.image,
      isAdmin: user.isAdmin,
      favourites: user.favourites,
    });
  } else {
    res.status(400);
    throw new Error("Invalid email or password");
  }
});

export const login = expressAsyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await Users.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    createToken(res, user._id),
      res.status(201).json({
        _id: user._id,
        username: user.username,
        email: user.email,
        image: user.image,
        isAdmin: user.isAdmin,
        favourites: user.favourites,
      });
  } else {
    res.status(400);
    throw new Error("Invalid email or password");
  }
});

export const logout = expressAsyncHandler(async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });

  res.status(200).json({ message: "User logged out" });
});

// ========== PRIVATE ==========
export const getUser = expressAsyncHandler(async (req, res) => {
  const user = {
    _id: req.user._id,
    username: req.user.username,
    email: req.user.email,
    image: req.user.image,
    isAdmin: req.user.isAdmin,
    favourites: req.user.favourites,
  };

  res.status(200).json(user);
});

export const updateUser = expressAsyncHandler(async (req, res) => {
  const user = await Users.findById(req.user._id);

  if (user) {
    user.username = req.body.username || user.username;
    user.email = req.body.email || user.email;
    user.image = req.body.image || user.image;

    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();
    res.status(200).json({
      _id: updatedUser._id,
      username: updatedUser.username,
      email: updatedUser.email,
      image: updatedUser.image,
      isAdmin: updatedUser.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

export const deleteUser = expressAsyncHandler(async (req, res) => {
  const user = await Users.findById(req.user._id);
  if (user) {
    if (user.isAdmin) {
      res.status(400);
      throw new Error("Admin user can't be deleted");
    } else {
      await user.deleteOne();
      res.cookie("jwt", "", {
        httpOnly: true,
        expires: new Date(0),
      });
      res.status(200).json({ message: "User deleted" });
    }
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

export const addFavourite = expressAsyncHandler(async (req, res) => {
  const { bookId } = req.body;
  if (!bookId) {
    res.status(404);
    throw new Error("Book not found");
  }
  const user = await Users.findById(req.user._id);
  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }
  const isAlreadyAdded = user.favourites.find(
    (m) => m._id.toString() === bookId
  );
  if (isAlreadyAdded) {
    res.status(400);
    throw new Error("Book is already added to favourites");
  }
  user.favourites.push(bookId);
  await user.save();
  res.status(201).json({ message: "Book added to favourites successfully" });
});

export const getFavourites = expressAsyncHandler(async (req, res) => {
  const user = await Users.findById(req.user._id).populate("favourites");
  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  res.status(200).json(user.favourites);
});

export const deleteFavourite = expressAsyncHandler(async (req, res) => {
  const { bookId } = req.body;
  if (!bookId) {
    res.status(404);
    throw new Error("Book not found");
  }

  const user = await Users.findById(req.user._id);
  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  const bookIndex = user.favourites.findIndex(
    (m) => m._id.toString() === bookId
  );
  if (bookIndex === -1) {
    res.status(404);
    throw new Error("Book not found");
  }

  user.favourites.splice(bookIndex, 1);

  await user.save();
  res
    .status(201)
    .json({ message: "Book removed from favourites successfully" });
});

export const deleteFavourites = expressAsyncHandler(async (req, res) => {
  const user = await Users.findById(req.user._id);
  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  user.favourites = [];
  await user.save();
  res.status(201).json({ message: "All books removed from favourites" });
});
// ========== ADMIN ==========
export const getUsers = expressAsyncHandler(async (req, res) => {
  const page = Number(req.query.pageNumber) || 1;
  const limit = 6;
  const skip = (page - 1) * limit;

  const users = await Users.find({});
  // .sort({ createdAt: 1 })
  // .skip(skip)
  // .limit(limit);

  const count = await Users.countDocuments();

  res.status(200).json(users);
});

export const deleteUserById = expressAsyncHandler(async (req, res) => {
  const user = await Users.findById(req.params.id);

  if (user) {
    try {
      await user.deleteOne({});
      res.status(200).json({ message: "User deleted" });
    } catch (error) {
      res.status(404);
      throw new Error("User not found");
    }
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});
