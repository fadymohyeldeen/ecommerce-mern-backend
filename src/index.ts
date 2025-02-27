import express from "express";
import mongoose from "mongoose";
import userRoute from "./routes/userRoute";

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

app.listen(port, () => {
  console.log("Server is running on port: " + port);
});
