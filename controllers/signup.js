import signup from "../models/usermodel.js";
import bcrypt from "bcrypt";

const register = async (req, res) => {
  try {
    const data = req.body;
    const salt = await bcrypt.genSalt(7);

    let existingUser = await signup.findOne({ email: data.email });
    if (existingUser) {
      return res.status(409).json({
        message: "Email is already registered",
      });
    }

    const hashedPassword = await bcrypt.hash(data.password, salt);
    data.password = hashedPassword;

    let registerInstance = new signup({
      userName: data.userName,
      email: data.email,
      password: data.password,
    });

    let result = await registerInstance.save();

    res.status(200).json({
      message: "Data saved successfully",
      error: null,
      data: result,
    });
  } catch (err) {
    console.log("Error caught:", err);
    res.status(500).json({
      message: "Failed to save the data",
      error: "Failed",
    });
  }
};

export default register;
