

import mongoose, { Schema } from "mongoose";

const UserSchema = new mongoose.Schema({
  userName: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  role: {
    type: String,
    default:"user"
    
  },
  status: {
    type: String,
    default: "Active",
  }
});

export default mongoose.model("User", UserSchema);


