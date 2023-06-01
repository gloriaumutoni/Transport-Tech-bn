import usermodel from "../models/usermodel";

const createUser = async (req, res) => {

    try {
        //const data = req.body;
        //console.log("data", data)
        let userInstance = new usermodel({
            email: "marquise@gmail.com",

        });

        console.log("data")
        userInstance.save()
            .then((data) => {
                res.status(200).json({
                    message: "data saved successfully",
                    error: null,
                    data: "data"
                })
            })

    }
    catch (err) {
        console.log("error catched", err)
        res.status(500).json({
            message: "failed to save the data",
            error: "failed"
        })

    }
}
export default createUser
