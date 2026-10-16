import express from "express";

import {
  getProductsController,
  getProduct,
  createProductController,
  updateProductController,
  deleteProductController,
  getFeaturedProducts,
} from "../controllers/productController.js";
import { requireAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/top", getFeaturedProducts);
router.get("/", getProductsController);
router.get("/:id", getProduct);

router.post("/", requireAdmin, createProductController);
router.put("/:id", requireAdmin, updateProductController);
router.delete("/:id", requireAdmin, deleteProductController);

export default router;
