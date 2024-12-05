import express from "express";

import {
  addToCart,
  getUserCartData,
  updateUserCartData,
} from "../controllers/cartController.js";

const cartRouter = express.Router();

cartRouter.post("/get", getUserCartData);
cartRouter.post("/add", addToCart);
cartRouter.post("/update", updateUserCartData);

export default cartRouter;
