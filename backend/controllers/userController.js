import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

// Route for user login
const loginUser = async (req, res) => {};

// Route for user registration

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // check for existing users
    const existingUsers = await userModel.findOne({ email });
    if (existingUsers) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists" });
    }

    // validate email for format and strong password
    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "Please enter a valid email",
      });
    }
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Please enter a strong password",
      });
    }

    // hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // create the user
    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
    });

    // save the user
    const user = await newUser.save();
    //generate the token
    const token = createToken(user._id);
    res.json({ success: true, token: token });
  } catch (error) {
    console.log(error.message);
  }
};

// Route for admin login
const adminLogin = async (req, res) => {};

export { loginUser, registerUser, adminLogin };
