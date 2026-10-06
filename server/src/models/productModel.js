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

      (
        SELECT pi.image_url
        FROM product_images pi
        WHERE pi.product_id = p.id
        ORDER BY pi.sort_order ASC, pi.id ASC
        LIMIT 1
      ) AS image_url,

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
  const productResult = await query(
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

  if (productResult.rows.length === 0) {
    return null;
  }

  const imageResult = await query(
    `
      SELECT
        id,
        image_url,
        sort_order
      FROM product_images
      WHERE product_id = $1
      ORDER BY sort_order ASC, id ASC
    `,
    [id]
  );

  return {
    ...productResult.rows[0],
    images: imageResult.rows,
  };
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