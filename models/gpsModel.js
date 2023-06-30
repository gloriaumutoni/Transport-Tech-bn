import mongoose from "mongoose"


const GpsSchema = new mongoose.Schema({
    longitude: {
        type: String,
        required: "please enter your username "
    },
    latitude: {
        type: String,
        required: "Please enter your email"
    }
})

export default mongoose.model("Location", GpsSchema);

