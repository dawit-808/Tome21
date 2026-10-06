import { query } from "../config/db.js";

export const getAllCategories = async () => {
  const result = await query(`
    SELECT *
    FROM categories
    ORDER BY created_at DESC
  `);

  return result.rows;
};

export const getCategoryById = async (id) => {
  const result = await query(
    `
      SELECT *
      FROM categories
      WHERE id = $1
    `,
    [id],
  );

  return result.rows[0];
};

export const createCategory = async (name) => {
  const result = await query(
    `
      INSERT INTO categories (name)
      VALUES ($1)
      RETURNING *
    `,
    [name],
  );

  return result.rows[0];
};

export const updateCategory = async (id, name) => {
  const result = await query(
    `
      UPDATE categories
      SET name = $1
      WHERE id = $2
      RETURNING *
    `,
    [name, id],
  );

  return result.rows[0];
};

export const deleteCategory = async (id) => {
  const result = await query(
    `
      DELETE FROM categories
      WHERE id = $1
      RETURNING *
    `,
    [id],
  );

  return result.rows[0];
};
