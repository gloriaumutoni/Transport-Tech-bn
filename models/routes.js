import mongoose from "mongoose";

const routesModel = new mongoose.Schema({
  From: {
    type: String,
    required: true,
  },
  To: {
    type: String,
    required: true,
  }
});

export default mongoose.model("routes", routesModel);