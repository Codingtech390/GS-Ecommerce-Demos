import express from "express";
import upload from "../middleware/multer.js";
import {
  listAllProductsInfo,
  addNewProductInfo,
  removeSingleProductInfo,
  showSingleProductInfo,
} from "../controllers/productController.js";

const productRouter = express.Router();

productRouter.post(
  "/add",
  upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 },
    { name: "image4", maxCount: 1 },
  ]),
  addNewProductInfo
);
productRouter.post("/remove", removeSingleProductInfo);
productRouter.post("/single", showSingleProductInfo);
productRouter.get("/list", listAllProductsInfo);

export default productRouter;
