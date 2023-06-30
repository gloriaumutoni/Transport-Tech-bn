import mongoose, { Schema } from "mongoose";

const addressModel = new mongoose.Schema({
  Result: {
    type: Array,
    required: true,
    default: [],
  },
  // Address_Line_1: {
  //   type: String,
  //   required: true,
  // },
  // Address_Line_2: {
  //   type: String,
  //   required: true,
  // },
  // Country: {
  //   type: String,
  //   default: "Rwanda",
  // },

  // country_Code: {
  //   type: String,
  //   required: false,
  // },
  // Place_Name: {
  //   type: String,
  //   required: false,
  // },
  // District: {
  //   type: String,
  //   required: false,
  // },
  // Street: {
  //   type: String,
  //   required: false,
  // },
  // Time_Zone: {
  //   type: String,
  //   required: false,
  // },
  // Category: {
  //   type: String,
  //   required: false,
  // },
  // Place_Id: {
  //   type: String,
  //   required: false,
  // },
  // Longitude: {
  //   type: String,
  //   required: false,
  // },
  // Latitude: {
  //   type: String,
  //   required: false,
  // },
});

export default mongoose.model("Address", addressModel);
