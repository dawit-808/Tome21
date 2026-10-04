import {
  getImagesByProductId,
  getImageById,
  createProductImage,
  updateProductImage,
  deleteProductImage,
} from "../models/productImageModel.js";

export const getProductImages = async (req, res) => {
  try {
    const { productId } = req.params;

    const images = await getImagesByProductId(productId);

    res.status(200).json(images);
  } catch (error) {
    console.error("Error getting product images:", error);

    res.status(500).json({
      error: "Failed to get product images",
    });
  }
};

export const getProductImage = async (req, res) => {
  try {
    const { id } = req.params;

    const image = await getImageById(id);

    if (!image) {
      return res.status(404).json({
        error: "Product image not found",
      });
    }

    res.status(200).json(image);
  } catch (error) {
    console.error("Error getting product image:", error);

    res.status(500).json({
      error: "Failed to get product image",
    });
  }
};

export const createProductImageController = async (req, res) => {
  try {
    const { productId } = req.params;
    const { image_url, sort_order } = req.body;

    if (!image_url) {
      return res.status(400).json({
        error: "image_url is required",
      });
    }

    const image = await createProductImage(
      productId,
      image_url,
      sort_order ?? 0
    );

    res.status(201).json(image);
  } catch (error) {
    console.error("Error creating product image:", error);

    res.status(500).json({
      error: "Failed to create product image",
    });
  }
};

export const updateProductImageController = async (req, res) => {
  try {
    const { id } = req.params;
    const { image_url, sort_order } = req.body;

    if (!image_url || sort_order === undefined) {
      return res.status(400).json({
        error: "image_url and sort_order are required",
      });
    }

    const image = await updateProductImage(
      id,
      image_url,
      sort_order
    );

    if (!image) {
      return res.status(404).json({
        error: "Product image not found",
      });
    }

    res.status(200).json(image);
  } catch (error) {
    console.error("Error updating product image:", error);

    res.status(500).json({
      error: "Failed to update product image",
    });
  }
};

export const deleteProductImageController = async (req, res) => {
  try {
    const { id } = req.params;

    const image = await deleteProductImage(id);

    if (!image) {
      return res.status(404).json({
        error: "Product image not found",
      });
    }

    res.status(200).json({
      message: "Product image deleted successfully",
      image,
    });
  } catch (error) {
    console.error("Error deleting product image:", error);

    res.status(500).json({
      error: "Failed to delete product image",
    });
  }
};