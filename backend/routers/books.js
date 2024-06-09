import express from "express";
import { authenticate, authorized } from "../middlewares/auth.js";
import {
  createBook,
  createReview,
  deleteBook,
  deleteReview,
  getBook,
  getBooks,
  updateBook,
} from "../controllers/books.js";

const router = express.Router();

// ========== PUBLIC ==========
router.get("/", getBooks);
router.get("/book/:id", getBook);

// ========== PRIVATE ==========
router.route("/book/:id/reviews").post(authenticate, createReview);

// ========== ADMIN ==========
router.post("/admin/book", authenticate, authorized, createBook);
router
  .route("/admin/book/:id")
  .put(authenticate, authorized, updateBook)
  .delete(authenticate, authorized, deleteBook);
router.delete("/admin/reviews", authenticate, authorized, deleteReview);

export default router;
