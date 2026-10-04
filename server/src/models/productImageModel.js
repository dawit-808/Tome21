import { query } from "../config/db.js";

export const getImagesByProductId = async (productId) => {
  const result = await query(
    `
      SELECT *
      FROM product_images
      WHERE product_id = $1
      ORDER BY sort_order ASC, id ASC
    `,
    [productId]
  );

  return result.rows;
};

export const getImageById = async (id) => {
  const result = await query(
    `
      SELECT *
      FROM product_images
      WHERE id = $1
    `,
    [id]
  );

  return result.rows[0];
};

export const createProductImage = async (
  productId,
  imageUrl,
  sortOrder = 0
) => {
  const result = await query(
    `
      INSERT INTO product_images (
        product_id,
        image_url,
        sort_order
      )
      VALUES ($1, $2, $3)
      RETURNING *
    `,
    [productId, imageUrl, sortOrder]
  );

  return result.rows[0];
};

export const updateProductImage = async (
  id,
  imageUrl,
  sortOrder
) => {
  const result = await query(
    `
      UPDATE product_images
      SET
        image_url = $1,
        sort_order = $2
      WHERE id = $3
      RETURNING *
    `,
    [imageUrl, sortOrder, id]
  );

  return result.rows[0];
};

export const deleteProductImage = async (id) => {
  const result = await query(
    `
      DELETE FROM product_images
      WHERE id = $1
      RETURNING *
    `,
    [id]
  );

  return result.rows[0];
};