import express from "express";
import { authenticate, authorized } from "../middlewares/auth.js";
import {
  getGenres,
  createGenre,
  deleteGenre,
  getGenre,
  updateGenre,
} from "../controllers/genres.js";

const router = express.Router();

router.route("/").get(getGenres).post(authenticate, authorized, createGenre);
router
  .route("/genre/:id")
  .get(getGenre)
  .put(authenticate, authorized, updateGenre)
  .delete(authenticate, authorized, deleteGenre);

export default router;
