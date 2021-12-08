import express from "express";
import fetch from "node-fetch";
import mongoose from "mongoose";
import Products from "./models/products.js";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const { DB_USER, DB_PASS, DB_HOST, DB_NAME } = process.env;

// mongoose connection
mongoose.connect(
  `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`
);

//Creating a DB
const db = mongoose.connection;
db.on("error", (err) => console.log("Connection error:", err));
db.once("open", () => console.log("Connected to DB"));

// Creating Express App
const app = express();
app.use(express.json());
app.use(cors());

// Getting Initial Products
async function initProducts() {
  const productsDb = await Products.find();
  if (!productsDb.length) {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    const mapped = data.map((p) => ({ ...p }));
    await Products.insertMany(mapped, () => {
      console.log("successfully Populated Products DB");
    });
  } else {
    db.dropCollection("products");
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    const mapped = data.map((p) => ({ ...p }));
    await Products.insertMany(mapped, () => {
      console.log("successfully Populated Products DB");
    });
  }
}

app.get("/api/", (req, res) => {
  res.send("Hello");
});

app.get("/api/products", async (req, res) => {
  try {
    const products = await Products.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

app.get("/api/products/:id", async (req, res) => {
  const { id } = req.params;
  const product = await Products.findById(id);
  res.status(200).send(product);
});

app.post("/api/products", async (req, res) => {
  const body = req.body;
  const product = await Products.create({ ...body });
  res.status(200).send(product);
});

app.delete("/api/products/:id", async (req, res) => {
  const { id } = req.params;
  const product = await Products.findByIdAndRemove(id);
  res.status(200).send(product);
});

app.put("/api/products/:id", async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const product = await Products.findByIdAndUpdate(id, { ...body });
  const updatedProduct = await Products.findById(id);
  res.status(200).send(updatedProduct);
});

app.listen(process.env.PORT || 8080, () =>
  console.log("Server up and running")
);

initProducts();
