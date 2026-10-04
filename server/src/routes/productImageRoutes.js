import express from "express";

import {
  getProductImages,
  getProductImage,
  createProductImageController,
  updateProductImageController,
  deleteProductImageController,
} from "../controllers/productImageController.js";

const router = express.Router();

router.get("/product/:productId", getProductImages);
router.get("/:id", getProductImage);

router.post("/product/:productId", createProductImageController);

router.put("/:id", updateProductImageController);

router.delete("/:id", deleteProductImageController);

export default router;