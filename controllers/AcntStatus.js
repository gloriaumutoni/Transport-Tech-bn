
import userModel from "../models/usermodel.js";
import nodemailer from 'nodemailer'


//create route
const activateAccount = async (req, res) => {
    try {
        // let userEmail = req.query.email;
        let userEmail = req.body.email;
        let status = req.body;
        let user = await userModel.find({ email: userEmail });

        if (!user) {
            return res.status(404).json({
                message: "user not found"
            });

        }

        let updatedUser = await userModel.findOneAndUpdate(
            { email: userEmail },
            { $set: status },
            { new: true } // To get the updated user in the response
        );
        console.log(status);

        res.status(200).json({


            message: "Status added successfully",
            data: updatedUser,
            error: null,
            userEmail,
            status
        });


        const confirmation = nodemailer.createTransport({
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

            to: userEmail,

            subject: ' Account Status ',
            text: 'Hey there, it’s our first message sent with Nodemailer 😉 ',
            html: '<b>Hey there! </b><br> hope this email finds you well. I am writing to inform you that your account is disabled because you distraction our rules and privacyn.',
        };

        confirmation.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
            } else {
                console.log('Message sent: %s', info.messageId);
            }
        });

      


    } catch (error) {
        console.log("Error occurred: ", error);
        res.status(500).json({
            message: "Failed to load data. Error occurred.",
            error: error,
            data: null,
        });
    }
};

export default activateAccount
