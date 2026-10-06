import express from "express";

import {
  checkout,
  getOrders,
  getOrder,
} from "../controllers/orderController.js";
import { requireAuth } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", requireAuth, checkout);
router.get("/", requireAuth, getOrders);
router.get("/:id", requireAuth, getOrder);

export default router;
