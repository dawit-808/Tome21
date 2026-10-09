import express from "express";
import dotenv from "dotenv";
dotenv.config();
import { query } from "./config/db.js";
const app = express();
import cors from "cors"
const port = process.env.PORT || 5000;

import productRoutes from "./routes/productRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import productImageRoutes from "./routes/productImageRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";

// auth

import session from "express-session";
import passport from "./config/passport.js";
import authRoutes from "./routes/authRoutes.js";

// admin
import adminOrderRoutes from "./routes/adminOrderRoutes.js";

app.use(express.json());
app.use(cors());

app.get("/api", async (req, res) => {
  try {
    const result = await query("SELECT NOW()");
    res.json({
      message: "api running and Database connected",
      time: result.rows[0].now,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Database connection Faild" });
  }
});

//auth

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  }),
);

app.use(passport.initialize());
app.use(passport.session());
app.use("/api/auth", authRoutes);
// initial schema creator

// import { readFile } from "node:fs/promises";

// app.get("/create-tables", async (req, res) => {
//   try {
//     const schemaPath = new URL("../sql/schema.sql", import.meta.url);

//     const schemaSql = await readFile(schemaPath, "utf8");

//     await query(schemaSql);

//     res.status(200).json({ message: "Tables created successfully!" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "tables creation failure" });
//   }
// });

app.use("/api/products", productRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/product-images", productImageRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/admin/orders", adminOrderRoutes);

app.listen(port, () => {
  console.log(`server running on http://localhost:${port}/api`);
});
