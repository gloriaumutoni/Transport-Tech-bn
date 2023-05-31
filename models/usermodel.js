import mongoose from "mongoose";

const routesModel = new mongoose.Schema({
  email: {
    type: String,
    required: "Email required"
  }

});

export default mongoose.model("Oneuser", routesModel);