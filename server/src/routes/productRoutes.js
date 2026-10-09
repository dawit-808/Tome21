import express from "express";

import {
  getProducts,
  getProduct,
  createProductController,
  updateProductController,
  deleteProductController,
  getFeaturedProducts,
} from "../controllers/productController.js";
import { requireAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getProducts);
router.get("/featured", getFeaturedProducts);
router.get("/:id", getProduct);

router.post("/", requireAdmin, createProductController);
router.put("/:id", requireAdmin, updateProductController);
router.delete("/:id", requireAdmin, deleteProductController);

export default router;
