import express from "express";

import {
  getProductImages,
  getProductImage,
  createProductImageController,
  updateProductImageController,
  deleteProductImageController,
} from "../controllers/productImageController.js";
import { requireAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/product/:productId", getProductImages);
router.get("/:id", getProductImage);

router.post("/product/:productId", requireAdmin, createProductImageController);
router.put("/:id", requireAdmin, updateProductImageController);
router.delete("/:id", requireAdmin, deleteProductImageController);

export default router;
