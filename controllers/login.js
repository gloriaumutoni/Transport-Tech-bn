import SignUp from "../models/usermodel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

console.log("welcome");

const signInController = async (req, res) => {
  try {
    const data = req.body;
    const { email, password } = data;
    let token;

    const user = await SignUp.findOne({ email });

    if (user) {
      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (isPasswordValid) {
        token = jwt.sign({ id: user._id }, "yourSecretKey");
        res.send(token);
      } else {
        res.send("Your password is wrong");
        return;
      }
    } else {
      res.status(401).json({
        message: "Email not registered. Please sign up.",
      });
      return;
    }
  } catch (err) {
    console.log("Error caught:", err);
    res.status(500).json({
      message: "Failed to process the data",
      error: "Failed",
    });
  }
};

export default signInController;
