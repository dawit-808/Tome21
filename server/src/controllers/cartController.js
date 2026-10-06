import {
  getCartByUserId,
  addCartItem,
  updateCartItem,
  removeCartItem,
  clearCart,
} from "../models/cartModel.js";

export const getCart = async (req, res) => {
  try {
    const userId = req.user.id;

    const cart = await getCartByUserId(userId);

    res.status(200).json(cart);
  } catch (error) {
    console.error("Error getting cart:", error);

    res.status(500).json({
      error: "Failed to get cart",
    });
  }
};

export const addToCart = async (req, res) => {
  try {
    const userId = req.user.id;
    const { product_id, quantity } = req.body;

    if (!product_id || quantity === undefined) {
      return res.status(400).json({
        error: "product_id and quantity are required",
      });
    }

    if (!Number.isInteger(quantity) || quantity <= 0) {
      return res.status(400).json({
        error: "quantity must be a positive integer",
      });
    }

    const item = await addCartItem(
      userId,
      product_id,
      quantity
    );

    res.status(201).json(item);
  } catch (error) {
    console.error("Error adding to cart:", error);

    res.status(500).json({
      error: "Failed to add item to cart",
    });
  }
};

export const updateCart = async (req, res) => {
  try {
    const userId = req.user.id;
    const { productId } = req.params;
    const { quantity } = req.body;

    if (quantity === undefined) {
      return res.status(400).json({
        error: "quantity is required",
      });
    }

    if (!Number.isInteger(quantity) || quantity <= 0) {
      return res.status(400).json({
        error: "quantity must be a positive integer",
      });
    }

    const item = await updateCartItem(
      userId,
      productId,
      quantity
    );

    if (!item) {
      return res.status(404).json({
        error: "Cart item not found",
      });
    }

    res.status(200).json(item);
  } catch (error) {
    console.error("Error updating cart:", error);

    res.status(500).json({
      error: "Failed to update cart",
    });
  }
};

export const removeFromCart = async (req, res) => {
  try {
    const userId = req.user.id;
    const { productId } = req.params;

    const item = await removeCartItem(
      userId,
      productId
    );

    if (!item) {
      return res.status(404).json({
        error: "Cart item not found",
      });
    }

    res.status(200).json({
      message: "Item removed from cart",
      item,
    });
  } catch (error) {
    console.error("Error removing cart item:", error);

    res.status(500).json({
      error: "Failed to remove cart item",
    });
  }
};

export const clearUserCart = async (req, res) => {
  try {
    const userId = req.user.id;

    await clearCart(userId);

    res.status(200).json({
      message: "Cart cleared successfully",
    });
  } catch (error) {
    console.error("Error clearing cart:", error);

    res.status(500).json({
      error: "Failed to clear cart",
    });
  }
};