import express from "express";
import { authenticate, authorized } from "../middlewares/auth.js";
import {
  addFavourite,
  deleteFavourite,
  deleteFavourites,
  deleteUser,
  deleteUserById,
  getFavourites,
  getUser,
  getUsers,
  login,
  logout,
  register,
  updateUser,
} from "../controllers/users.js";

const router = express.Router();

// ========== PUBLIC ==========
router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);

// ========== PRIVATE ==========
router
  .route("/user")
  .get(authenticate, getUser)
  .put(authenticate, updateUser)
  .delete(authenticate, deleteUser);
router
  .route("/user/favourites")
  .post(authenticate, addFavourite)
  .get(authenticate, getFavourites)
  .delete(authenticate, deleteFavourite);
router.delete("/user/favourites/all", authenticate, deleteFavourites);

// ========== ADMIN ==========
router.get("/admin", authenticate, authorized, getUsers);
router.delete("/admin/user/:id", authenticate, authorized, deleteUserById);

export default router;
