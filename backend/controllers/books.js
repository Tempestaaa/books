import expressAsyncHandler from "express-async-handler";
import Books from "../models/books.js";

export const createBook = expressAsyncHandler(async (req, res) => {
  let {
    title,
    desc,
    author,
    genres,
    coverImage,
    pages,
    rating,
    format,
    language,
  } = req.body;
  if (!title || !desc || !author || !genres || !pages || !rating) {
    res.status(400);
    throw new Error("Some fields are missing!");
  }

  const bookExists = await Books.findOne({ title });
  if (bookExists) {
    res.status(400);
    throw new Error("Book already exists");
  }

  const book = await Books.create({
    title,
    desc,
    author,
    genres,
    coverImage,
    pages,
    rating,
    format,
    language,
  });

  if (book) {
    res.status(201).json(book);
  } else {
    res.status(400);
    throw new Error("Invalid book data");
  }
});

export const getBooks = expressAsyncHandler(async (req, res) => {
  const books = await Books.find({}).populate("genres");
  res.status(200).json(books);
});

export const getBook = expressAsyncHandler(async (req, res) => {
  const book = await Books.findById(req.params.id).populate("genres");
  if (!book) {
    res.status(404);
    throw new Error("Book not found");
  }

  res.status(200).json(book);
});

export const updateBook = expressAsyncHandler(async (req, res) => {
  let {
    title,
    desc,
    author,
    genres,
    coverImage,
    pages,
    rating,
    format,
    language,
  } = req.body;

  const book = await Books.findByIdAndUpdate(req.params.id, {
    title,
    desc,
    author,
    genres,
    coverImage,
    pages,
    rating,
    format,
    language,
  });
  if (!book) {
    res.status(404);
    throw new Error("Book not found");
  }

  await book.save();

  res.status(201).json({ message: "Book updated successfully" });
});

export const deleteBook = expressAsyncHandler(async (req, res) => {
  const book = await Books.findByIdAndDelete(req.params.id);
  if (!book) {
    res.status(404);
    throw new Error("Book not found");
  }

  res.status(201).json({ message: "Book deleted successfully" });
});

export const createReview = expressAsyncHandler(async (req, res) => {
  const { comment, rating } = req.body;

  const book = await Books.findById(req.params.id);
  if (!book) {
    res.status(404);
    throw new Error("Book not found");
  }

  const alreadyReviewed = await book.reviews.find(
    (r) => r.userId.toString() === req.user._id.toString()
  );
  if (alreadyReviewed) {
    res.status(400);
    throw new Error("Movie already reviewed");
  }

  const review = {
    userId: req.user._id,
    userName: req.user.username,
    userImage: req.user.image,
    comment,
    rating: Number(rating) || 0,
  };

  book.reviews.push(review);
  book.numberOfReviews = book.reviews.length;
  book.rating =
    book.reviews.reduce((acc, item) => acc + item.rating, 0) /
    book.reviews.length;

  await book.save();
  res.status(201).json({ message: "Review added successfully" });
});

export const deleteReview = expressAsyncHandler(async (req, res) => {
  const { bookId, reviewId } = req.body;
  const book = await Books.findById(bookId);
  if (!book) {
    res.status(404);
    throw new Error("Book not found");
  }

  const reviewIndex = book.reviews.findIndex(
    (r) => r._id.toString() === reviewId
  );
  if (reviewIndex === -1) {
    res.status(404);
    throw new Error("Comment not found");
  }

  book.reviews.splice(reviewIndex, 1);
  book.numberOfReviews = book.reviews.length;
  book.rating =
    book.reviews.length > 0
      ? book.reviews.reduce((acc, item) => item.rating + acc, 0) /
        book.reviews.length
      : 0;

  await book.save();
  res.status(201).json({ message: "Comment deleted successfully" });
});
