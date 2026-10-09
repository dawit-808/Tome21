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

export const createCategory = async (name, image_url) => {
  const result = await query(
    ` INSERT INTO categories (name, image_url) VALUES ($1, $2) RETURNING * `,
    [name, image_url],
  );
  return result.rows[0];
};

export const updateCategory = async (id, name, image_url) => {
  const result = await query(
    ` UPDATE categories SET name = $1, image_url = $2 WHERE id = $3 RETURNING * `,
    [name, image_url, id],
  );
  return result.rows[0] ?? null;
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
