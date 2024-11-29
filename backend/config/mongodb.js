import mongoose from "mongoose";

// Connect to MongoDB
const connectDB = async () => {
  mongoose.connection.on("connected", () => {
    console.log("DB Connected!");
  });
  await mongoose.connect(`${process.env.MONGO_DB_URI}/demos-ecommerce`);
};

export default connectDB;
