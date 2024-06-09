import expressAsyncHandler from "express-async-handler";
import Genres from "../models/genres.js";

// ********** PUBLIC **********

export const getGenres = expressAsyncHandler(async (req, res) => {
  const genres = await Genres.find({});
  res.status(200).json(genres);
});

export const getGenre = expressAsyncHandler(async (req, res) => {
  const genre = await Genres.findOne({ _id: req.params.id });
  if (!genre) {
    res.status(404);
    throw new Error("Genre not found");
  }

  res.status(200).json(genre);
});

// ********** ADMIN **********

export const createGenre = expressAsyncHandler(async (req, res) => {
  let { name } = req.body;

  if (!name) {
    res.status(400);
    throw new Error("Name is required");
  }

  name = name.toLowerCase().trim();

  const genresExists = await Genres.findOne({ name });
  if (genresExists) {
    res.status(400);
    throw new Error("Genre already exists");
  }

  const genre = await new Genres({ name }).save();
  res.status(201).json(genre);
});

export const updateGenre = expressAsyncHandler(async (req, res) => {
  let { name } = req.body;
  if (!name) {
    res.status(400);
    throw new Error("Name is required");
  }
  name = name.toLowerCase();

  const genre = await Genres.findById(req.params.id);
  if (!genre) {
    res.status(404);
    throw new Error("Genre not found");
  }
  const genreExists = await Genres.findOne({ name });
  if (genreExists) {
    res.status(400);
    throw new Error("Genre already exists");
  }

  genre.name = name;
  const updatedGenre = await genre.save();
  res.status(201).json(updatedGenre);
});

export const deleteGenre = expressAsyncHandler(async (req, res) => {
  const genre = await Genres.findById(req.params.id);
  if (!genre) {
    res.status(404);
    throw new Error("Genre not found");
  }

  await genre.deleteOne({});
  res.status(200).json({ message: "Genre deleted" });
});
