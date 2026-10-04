import {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../models/productModel.js";

export const getProducts = async (req, res) => {
  try {
    const products = await getAllProducts();
    res.status(200).json(products);
  } catch (error) {
    console.error("Error getting products", error);
    res.status(500).json({
      error: "Faild to get products",
    });
  }
};

export const getProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await getProductById(id);

    if (!product) {
      return res.status(404).json({
        error: "Product not found",
      });
    }

    res.status(200).json(product);
  } catch (error) {
    console.error("Error getting product:", error);

    res.status(500).json({
      error: "Failed to get product",
    });
  }
};

export const createProductController = async (req, res) => {
  try {
    const { name, description, price, stock, category_id } = req.body;

    if (!name || price === undefined || !category_id) {
      return res.status(400).json({
        error: "name, price, and category_id are required",
      });
    }

    const product = await createProduct({
      name,
      description,
      price,
      stock: stock ?? 0,
      category_id,
    });

    res.status(201).json(product);
  } catch (error) {
    console.error("Error creating product:", error);

    res.status(500).json({
      error: "Failed to create product",
    });
  }
};

export const updateProductController = async (req, res) => {
  try {
    const { id } = req.params;

    const {
      name,
      description,
      price,
      stock,
      category_id,
    } = req.body;

    if (
      !name ||
      price === undefined ||
      stock === undefined ||
      !category_id
    ) {
      return res.status(400).json({
        error: "name, price, stock, and category_id are required",
      });
    }

    const product = await updateProduct(id, {
      name,
      description,
      price,
      stock,
      category_id,
    });

    if (!product) {
      return res.status(404).json({
        error: "Product not found",
      });
    }

    res.status(200).json(product);
  } catch (error) {
    console.error("Error updating product:", error);

    res.status(500).json({
      error: "Failed to update product",
    });
  }
};

export const deleteProductController = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await deleteProduct(id);

    if (!product) {
      return res.status(404).json({
        error: "Product not found",
      });
    }

    res.status(200).json({
      message: "Product deleted successfully",
      product,
    });
  } catch (error) {
    console.error("Error deleting product:", error);

    res.status(500).json({
      error: "Failed to delete product",
    });
  }
};