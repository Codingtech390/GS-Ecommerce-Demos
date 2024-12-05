import express from "express";

import {
  addToCart,
  getUserCartData,
  updateUserCartData,
} from "../controllers/cartController.js";

import authenticateUser from "../middleware/auth.js";

const cartRouter = express.Router();

cartRouter.post("/get", authenticateUser, getUserCartData);
cartRouter.post("/add", authenticateUser, addToCart);
cartRouter.post("/update", authenticateUser, updateUserCartData);

export default cartRouter;
