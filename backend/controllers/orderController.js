// Placing orders using COD Method
const placeOrder = async (req, res) => {};

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
