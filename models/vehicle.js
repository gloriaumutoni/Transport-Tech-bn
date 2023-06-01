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
});

export default mongoose.model("Vehicles", vehicleModel);
