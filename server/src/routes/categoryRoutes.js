import express from "express";
import { requireAdmin } from "../middleware/authMiddleware.js";

import {
  getCategories,
  getCategory,
  createCategoryController,
  updateCategoryController,
  deleteCategoryController,
} from "../controllers/categoryController.js";

const router = express.Router();

router.get("/", getCategories);
router.get("/:id", getCategory);

router.post("/", requireAdmin, createCategoryController);
router.put("/:id", requireAdmin, updateCategoryController);
router.delete("/:id", requireAdmin, deleteCategoryController);

export default router;
