import express from "express";
import { getAllProducts } from "../services/productService";

const router = express.Router();
export default router;

router.get("/", async (req, res) => {
  const products = await getAllProducts();
  res.status(200).send(products);
});
