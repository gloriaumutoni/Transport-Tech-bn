import SignUp from '../models/usermodel.js';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

console.log("welcome");

const signInController = async (req, res) => {
  try {
    const data = req.body;
    const check = await SignUp.findOne({ email: data.email });
    const pass = data.password;
    let token;

    if (check) {
      const isPasswordValid = await bcrypt.compare(pass, check.password);

      if (isPasswordValid) {
        token = jwt.sign({ id: check._id }, "yourSecretKey");
        res.send(token);
      } else {
        res.send("Your password is wrong");
        return;
      }
    } else {
      const hashedPassword = await bcrypt.hash(pass, 10);
      const signInstance = new SignUp({
        email: data.email,
        password: hashedPassword,
      });

      token = jwt.sign({ id: signInstance._id }, "yourSecretKey");
      signInstance.token = token;
      signInstance.password = undefined;
      const options = {
        expire: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly: true,
      };

      await signInstance.save();

      res.status(200).cookie("token", token, options).json({
        message: true,
        token,
        user: signInstance,
      });
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
