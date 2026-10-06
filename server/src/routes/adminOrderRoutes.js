import express from "express";

import {
  getAllOrdersController,
  getAdminOrder,
  updateAdminOrderStatus,
} from "../controllers/adminOrderController.js";

import { requireAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", requireAdmin, getAllOrdersController);

router.get("/:id", requireAdmin, getAdminOrder);

router.put("/:id/status", requireAdmin, updateAdminOrderStatus);

export default router;
