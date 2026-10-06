import {
  getAllOrders,
  getOrderByIdForAdmin,
  updateOrderStatus,
} from "../models/orderModel.js";

export const getAllOrdersController = async (req, res) => {
  try {
    const orders = await getAllOrders();

    res.status(200).json(orders);
  } catch (error) {
    console.error("Error getting all orders:", error);

    res.status(500).json({
      error: "Failed to get orders",
    });
  }
};

export const getAdminOrder = async (req, res) => {
  try {
    const { id } = req.params;

    const order = await getOrderByIdForAdmin(id);

    if (!order) {
      return res.status(404).json({
        error: "Order not found",
      });
    }

    res.status(200).json(order);
  } catch (error) {
    console.error("Error getting admin order:", error);

    res.status(500).json({
      error: "Failed to get order",
    });
  }
};

export const updateAdminOrderStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const allowedStatuses = [
      "pending",
      "confirmed",
      "shipped",
      "delivered",
      "cancelled",
    ];

    if (!status || !allowedStatuses.includes(status)) {
      return res.status(400).json({
        error: "Invalid order status",
      });
    }

    const order = await updateOrderStatus(id, status);

    if (!order) {
      return res.status(404).json({
        error: "Order not found",
      });
    }

    res.status(200).json(order);
  } catch (error) {
    console.error("Error updating order status:", error);

    res.status(500).json({
      error: "Failed to update order status",
    });
  }
};
