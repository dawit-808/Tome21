import {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
} from "../models/catagoryModel.js";

export const getCategories = async (req, res) => {
  try {
    const categories = await getAllCategories();

    res.status(200).json(categories);
  } catch (error) {
    console.error("Error getting categories:", error);

    res.status(500).json({
      error: "Failed to get categories",
    });
  }
};

export const getCategory = async (req, res) => {
  try {
    const { id } = req.params;

    const category = await getCategoryById(id);

    if (!category) {
      return res.status(404).json({
        error: "Category not found",
      });
    }

    res.status(200).json(category);
  } catch (error) {
    console.error("Error getting category:", error);

    res.status(500).json({
      error: "Failed to get category",
    });
  }
};

export const createCategoryController = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({
        error: "Category name is required",
      });
    }

    const category = await createCategory(name);

    res.status(201).json(category);
  } catch (error) {
    console.error("Error creating category:", error);

    res.status(500).json({
      error: "Failed to create category",
    });
  }
};

export const updateCategoryController = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({
        error: "Category name is required",
      });
    }

    const category = await updateCategory(id, name);

    if (!category) {
      return res.status(404).json({
        error: "Category not found",
      });
    }

    res.status(200).json(category);
  } catch (error) {
    console.error("Error updating category:", error);

    res.status(500).json({
      error: "Failed to update category",
    });
  }
};

export const deleteCategoryController = async (req, res) => {
  try {
    const { id } = req.params;

    const category = await deleteCategory(id);

    if (!category) {
      return res.status(404).json({
        error: "Category not found",
      });
    }

    res.status(200).json({
      message: "Category deleted successfully",
      category,
    });
  } catch (error) {
    console.error("Error deleting category:", error);

    res.status(500).json({
      error: "Failed to delete category",
    });
  }
};