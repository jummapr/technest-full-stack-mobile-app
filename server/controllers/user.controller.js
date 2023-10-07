const JWT = require("jsonwebtoken");
const catchAsyncError = require("../middleware/catchAsycnErrors");
const userModel = require("../models/user.model");

const registerController = catchAsyncError(async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    // Validation
    if (!name || !email || !password) {
      res.status(400).json({
        success: false,
        message: "Please enter all the fields",
      });
    }

    // check user if user exist
    const userExist = await userModel.findOne({ email });

    if (userExist) {
      res.status(400).json({
        success: false,
        message: "User already register with this email",
      });
    }

    // create user
    const user = await userModel.create({
      name,
      email,
      password,
    });

    return res.status(201).json({
      success: true,
      message: "User created successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

const loginController = catchAsyncError(async (req, res, next) => {
  try {
    const { email, password } = req.body;
    // Validation
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please enter all the fields",
      });
    }

    // find user

    const user = await userModel.findOne({ email }).select("+password");

    if (!user) {
      return (
        res,
        status(400).json({
          success: false,
          message: "User does not exist",
        })
      );
    }

    // Match Password

    const isPasswordMatch = await user.comparePassword(password);
    console.log(`Match ${isPasswordMatch}`.bgRed.white);

    if (!isPasswordMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid email and password",
      });
    }

    //    TOken JWT
    const token = JWT.sign(
      {
        id: user._id,
      },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.status(200).json({
      success: true,
      message: "Login success",
      token,
      user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

module.exports = { registerController, loginController };
