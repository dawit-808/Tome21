import { query } from "../config/db.js";

export const getAllProducts = async () => {
  const result = await query(`
    SELECT
      p.id,
      p.name,
      p.description,
      p.price,
      p.stock,
      p.category_id,
      c.name AS category_name,
      p.created_at,
      p.updated_at
    FROM products p
    JOIN categories c
      ON p.category_id = c.id
    ORDER BY p.created_at DESC
  `);

  return result.rows;
};

export const getProductById = async (id) => {
  const result = await query(
    `
      SELECT
        p.id,
        p.name,
        p.description,
        p.price,
        p.stock,
        p.category_id,
        c.name AS category_name,
        p.created_at,
        p.updated_at
      FROM products p
      JOIN categories c
        ON p.category_id = c.id
      WHERE p.id = $1
    `,
    [id]
  );

  return result.rows[0];
};

export const createProduct = async ({
  name,
  description,
  price,
  stock,
  category_id,
}) => {
  const result = await query(
    `
      INSERT INTO products (
        name,
        description,
        price,
        stock,
        category_id
      )
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *
    `,
    [name, description, price, stock, category_id],
  );

  return result.rows[0];
};

export const updateProduct = async (
  id,
  { name, description, price, stock, category_id }
) => {
  const result = await query(
    `
      UPDATE products
      SET
        name = $1,
        description = $2,
        price = $3,
        stock = $4,
        category_id = $5,
        updated_at = NOW()
      WHERE id = $6
      RETURNING *
    `,
    [name, description, price, stock, category_id, id]
  );

  return result.rows[0];
};

export const deleteProduct = async (id) => {
  const result = await query(
    `
      DELETE FROM products
      WHERE id = $1
      RETURNING *
    `,
    [id]
  );

  return result.rows[0];
};