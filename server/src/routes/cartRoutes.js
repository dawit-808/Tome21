import express from "express";
import { requireAuth } from "../middleware/authMiddleware.js";

import {
  getCart,
  addToCart,
  updateCart,
  removeFromCart,
  clearUserCart,
} from "../controllers/cartController.js";

const router = express.Router();

router.get("/", requireAuth, getCart);
router.post("/", requireAuth, addToCart);
router.put("/:productId", requireAuth, updateCart);
router.delete("/:productId", requireAuth, removeFromCart);
router.delete("/", requireAuth, clearUserCart);

export default router;
