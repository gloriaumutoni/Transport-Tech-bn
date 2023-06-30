import mongoose from "mongoose";

const routesModel = new mongoose.Schema({
  origin: {
    type: String,
    required: "Please provide where from",
  },
  destination: {
    type: String,
    required: "Please provide where to",
  },
});

export default mongoose.model("routes", routesModel);
