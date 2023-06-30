import mongoose, { Schema } from "mongoose";

const vehicleModel = new mongoose.Schema({
  model: {
    type: String,
    required: "please provite vehicle model ",
  },
  plate: {
    type: String,
    required: "Please enter vehicle plate",
  },
  drivers: {
    type: Array,
    default: [],
  },

  routeId: {
    type: String,
    required: true,
  },
  seats: {
    type: Number,
    required: true,
    default: 30,
  },
});

export default mongoose.model("Vehicles", vehicleModel);
