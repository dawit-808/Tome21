# Tome21 API

Base URL:
http://localhost:5000/api

## Products

### Get all products

GET /products

Response:

[
{
"id": 1,
"name": "Nike Air Max",
"description": "Comfortable running shoes",
"price": "4500.00",
"stock": 10,
"category_id": 1,
"category_name": "Shoes"
}
]

### Create product

POST /products

Body:

{
"name": "Nike Air Max",
"description": "Comfortable running shoes",
"price": 4500,
"stock": 10,
"category_id": 1
}

Response: { id + itself }

### Get product by ID

GET /products/1 (:id)

Response:

{
"id": 1,
"name": "Nike Air Max",
"description": "Comfortable running shoes",
"price": "4500.00",
"stock": 10,
"category_id": 1,
"category_name": "Shoes"
}

### Update product

PUT /products/1 (:id)

Body:

{
"name": "Nike Air Max Updated",
"description": "Updated running shoes",
"price": 5000,
"stock": 15,
"category_id": 1
}

Response: { id + itself }

### Delete product

DELETE /products/1

response:

{
"message": "Product deleted successfully",
"product": {
itself
}
}

## catagories

### Create product

POST /catagories

body:
{
"name": "Electronics"
}

### Get all catagories

GET /categories

response:

[
{
"id": "2",
"name": "Electronics",
"created_at": "2026-10-04T13:16:31.427Z"
}
]

### Get catagory by id

GET /categories/1 (:id)

response:

{
"id": "2",
"name": "Electronics",
"created_at": "2026-10-04T13:16:31.427Z"
}

### Update Catagory

PUT /categories/1 (:id)

Body:
{
"name": "Running Shoes"

}

Response: {id + itself}

### Delete catagory

DELETE /categories/1 (:id)

Response:

{
"message": "Category deleted successfully",
"catagory": {itself}
}

## product Images

### create Product img

POST /product-images/product/1

Body:
{
"image_url": "https://example.com/nike-front.jpg",
"sort_order": 0
}

Response:

{
"id": "1",
"product_id": "1",
"image_url": "https://example.com/nike-front.jpg",
"sort_order": 0
}

### Get all img for a product

Get /product-images/product/1

res:
[
{
"id": "1",
"product_id": "1",
"image_url": "https://example.com/nike-front.jpg",
"sort_order": 0
}
]

### Get single img

GET /product-images/1

res :
{
"id": "1",
"product_id": "1",
"image_url": "https://example.com/nike-side.jpg",
"sort_order": 3
}

### Update product_img

PUT /product-images/1

Body: 
{
  "image_url": "https://example.com/nike-new.jpg",
  "sort_order": 0
}

res: 

{
"id": "1",
"product_id": "1",
"image_url": "https://example.com/nike-side.jpg",
"sort_order": 3
}

### Delete Prod_img

DELETE /product-images/2

res:
{
    "message": "Product image deleted successfully",
    "image": {
        "id": "2",
        "product_id": "1",
        "image_url": "https://example.com/nike-side.jpg",
        "sort_order": 1
    }
}