import mongoose from "mongoose";

const routesModel = new mongoose.Schema({
  Origin: {
    type: String,
    required: "Please provide from",
  },
  Destination: {
    type: String,
    required: "Please provide to",
  },
});

export default mongoose.model("routes", routesModel);
