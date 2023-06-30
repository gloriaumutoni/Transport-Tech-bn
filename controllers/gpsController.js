import gpsModel from "../models/gpsModel.js";

const createGps = async (req, res) => {
    try {
        const data = req.body

        let gpsInstance = new gpsModel({
            longitude: data.longitude,
            latitude: data.latitude
        });

        let result = await gpsInstance.save();

        res.status(200).json({
            message: "Data saved successfully",
            error: null,
            data: result
        });
    } catch (err) {
        console.log("Error caught:", err);
        res.status(500).json({
            message: "Failed to save the data",
            error: "Failed",
        });
    }
};

export default createGps ;