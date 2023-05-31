import mongoose from "mongoose";

const routesModel = new mongoose.Schema({
  origin: {
    type: String,
    required: "Please provide from",
  },
  destination: {
    type: String,
    required: "Please provide to",
  },
});

export default mongoose.model("routes", routesModel);
