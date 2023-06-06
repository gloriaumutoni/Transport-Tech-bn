
import userModel from "../models/usermodel.js";

//create route
const activateAccount = async (req, res) => {
    try {
        let userEmail = req.query.email;
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

        res.status(200).json({
            message: "Status added successfully",
            data: updatedUser,
            error: null,
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
