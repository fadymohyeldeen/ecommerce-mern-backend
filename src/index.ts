import express from "express";
import mongoose from "mongoose";
import userRoute from "./routes/userRoute";
import { seedInitialProducts } from "./services/productService";
import producRoute from "./routes/productRoute";
import cartRoute from "./routes/cartRoute";
import "./types/express";

const app = express();
const port = 3001;

app.use(express.json());
mongoose
  .connect("mongodb://127.0.0.1/ecom")
  .then(() => {
    console.log("MongoDB connected successfuly.");
  })
  .catch((err) => {
    console.log("Failed to connect to MongoDB." + err);
  });

app.use("/user", userRoute);
app.use("/products", producRoute);
app.use("/cart", cartRoute);

seedInitialProducts();
app.listen(port, () => {
  console.log("Server is running on port: " + port);
});
