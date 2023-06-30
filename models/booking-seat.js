import mongoose, { Schema } from "mongoose";

const bookingSeatModel = new mongoose.Schema({
  seat: {
    type: String,
    required: "please provite vehicle seat ",
  },
  booking_id: {
    type: String,
    // type: Schema.Types.ObjectId,
    ref: "booking",
  },
  user_id: {
    type: String,
    // type: Schema.Types.ObjectId,
    ref: "user",
  },
  date: {
    type: Date,
    default: Date.now,
  },
  time: {
    type: String,
    required: "please provite vehicle seat ",
  },
  status: {
    type: String,
    default: "pending",
  },
  destination: {
    type: String,
    default: "pending",
  },
  vehicleId: {
    type: String,
    // type: Schema.Types.ObjectId,
    ref: "vehicle",
  },
  model:{
    type: String
  },
  userName:{
    type:String
  }
});

export default mongoose.model("Booking seat", bookingSeatModel);
