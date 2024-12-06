import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

// Placing orders using COD Method
const placeOrder = async (req, res) => {
  try {
    const { userId, items, amount, address } = req.body;

    const orderData = {
      userId,
      items,
      amount,
      address,
      paymentMethod: "COD", // COD
      payment: false,
      date: Date.now(),
    };

    const newOrder = new orderModel(orderData);
    await newOrder.save();

    await userModel.findByIdAndUpdate(userId, { cartData: {} });

    res.json({ success: true, message: "Order placed successfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Placing orders using STRIPE Method
const placeOrderStripe = async (req, res) => {};

// Placing orders using RAZORPAY Method
const placeOrderRazorpay = async (req, res) => {};

// All orders data for Admin Panel

const getAllOrders = async (req, res) => {};

// Order details for Frontend
// This is will display the order details for single user
const userOrders = async (req, res) => {};

// Update order Status for Admin Panel

const updateOrderStatus = async (req, res) => {};

export {
  placeOrder,
  placeOrderStripe,
  placeOrderRazorpay,
  getAllOrders,
  userOrders,
  updateOrderStatus,
};
