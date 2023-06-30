import signup from "../models/usermodel.js";
import bcrypt from "bcrypt";
import emailSender from "./Emailsender.js";
import nodemailer from 'nodemailer';


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
      role: data.role,
      email: data.email,
      password: data.password,
    });


   

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: 'transportcode2023@gmail.com  ',
        pass: ' hcycpozjyailjeiu',
      },
    });

    var mailOptions = {
      from: 'DERIV RWANDA ',
      to: data.email,
      subject: '  WELLCOME TO TRANSPORT-TECK SOLLUTION ',
      text: 'Hey there,  you have successfull signup  Please login ',
    };

    let result = await registerInstance.save();
    const defaultMessage = "<b>Hey there! </b><br> This email is to let you know that your account has been created."
    emailSender(data.email, defaultMessage);
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
