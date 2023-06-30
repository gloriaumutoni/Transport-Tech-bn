import addressModel from "../models/address.js";
import gpsModel from "../models/gpsModel.js";

// // Reverse Geocoding API Endpoint

// let lat = -1.9305915;
// let long = 30.0746009;
// let requestOptions = {
//   method: "GET",
// };

// fetch(
//   `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${long}&format=json&apiKey=1231f80672f240379c814fcfe6b423d9`,
//   requestOptions
// )
//   .then((response) => response.json())
//   .then((result) => console.log(result))
//   .catch((error) => console.log("error", error));

// Getting GPS coordeinates from Database
let lat, long;
let addressResult;

const getRecentGps = async (req, res) => {
  try {
    const response = await gpsModel.find({}).sort({ _id: -1 }).limit(1);

    if (response.length == 0) {
      res.status(404).json({
        message: "No data found",
        data: response,
        error: "No data found",
      });
    } else {
      res.status(200).json({
        message: "Retrieved successfully",
        data: response,
        error: null,
      });
      lat = response[0].latitude;
      long = response[0].longitude;
      console.log(lat, long);
    }
  } catch (err) {
    console.log("Error caught:", err);
    res.status(500).json({
      message: "Failed to save the data",
      error: "Failed",
    });
  }
};

const createAddress = async (req, res) => {
  try {
    let requestOptions = {
      method: "GET",
    };

    const result = await fetch(
      `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${long}&format=json&apiKey=1231f80672f240379c814fcfe6b423d9`,
      requestOptions
    );
    const data = await result.json();
    addressResult = data.results;

    const Result = addressResult;

    const newAddress = new addressModel({ Result: addressResult });
    const response = await newAddress.save();
    // console.log(addressResult);
    return res.status(200).json({
      message: "Address data added successfully",
      data: response,
      error: null,
    });
  } catch (error) {
    console.log("Error occurred: ", error);
    res.status(500).json({
      message: "Failed to save data. Error occurred.",
      error: error,
      data: null,
    });
  }
};

// Call getRecentGps first to retrieve lat and long values
// getRecentGps()
//   .then(() => {
//     console.log(lat, long); // Access lat and long variables here
//     // Call createAddress after getting lat and long
//     createAddress(req, res)
//       .then(() => {
//         console.log(addressResult);
//       })
//       .catch((error) => console.log("Error in createAddress:", error));
//   })
//   .catch((error) => console.log("Error in getRecentGps:", error));

//Getting all addresses

const getAllAddress = async (req, res) => {};
export { createAddress, getAllAddress, getRecentGps };
