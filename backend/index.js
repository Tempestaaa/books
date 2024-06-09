import "dotenv/config";
import express from "express";
import cookieParser from "cookie-parser";
import connectDB from "./configs/db.js";
import { notFound, errorHandler } from "./middlewares/errorHandler.js";
import uploadRouter from "./routers/upload.js";
import usersRouter from "./routers/users.js";
import genresRouter from "./routers/genres.js";
import booksRouter from "./routers/books.js";

connectDB();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
const port = process.env.PORT || 3000;

app.use("/api/users", usersRouter);
app.use("/api/genres", genresRouter);
app.use("/api/books", booksRouter);
app.use("/api/upload", uploadRouter);

app.use(notFound);
app.use(errorHandler);
app.listen(port, () => console.log(`Server is running on port ${port}`));
