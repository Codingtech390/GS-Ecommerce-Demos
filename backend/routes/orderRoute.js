import express from "express";
import {
  placeOrder,
  placeOrderStripe,
  placeOrderRazorpay,
  getAllOrders,
  userOrders,
  updateOrderStatus,
} from "../controllers/orderController.js";

import adminAuth from "../middleware/adminAuth.js";
import authenticateUser from "../middleware/auth.js";

const orderRouter = express.Router();

// Admin Features
orderRouter.post("/list", adminAuth, getAllOrders);
orderRouter.post("/status", adminAuth, updateOrderStatus);

// Payment Features
orderRouter.post("/place", authenticateUser, placeOrder);
orderRouter.post("/stripe", authenticateUser, placeOrderStripe);
orderRouter.post("/razorpay", authenticateUser, placeOrderRazorpay);

// User Features
orderRouter.post("/userOrders", authenticateUser, userOrders);

export default orderRouter;
