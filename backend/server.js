import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";

// App configuration
const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();

// Middleware
app.use(cors());
app.use(express.json());

// API Endpoints
app.get("/", (req, res) => {
  res.send("Api working");
});

app.use("/api/user", userRouter);
app.use("/api/product", productRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
