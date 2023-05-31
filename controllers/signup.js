import signup from "../models/usermodel.js";
import bcrypt from "bcrypt";
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
      from: 'transportcode2023@gmail.com ',
      
      to:'ishgatetechristian@gmail.com',
    
      subject: ' Acceptance of Software Developer Position at DERIV ',
      text: 'Hey there, it’s our first message sent with Nodemailer 😉 ',
      html: '<b>Hey there! </b><br> hope this email finds you well. I am writing to accept the offer for the Software Developer position at DERIV. I am honored and excited to join the dynamic team at Deriv and contribute to its innovative software development projects.',
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log('Message sent: %s', info.messageId);
      }
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
