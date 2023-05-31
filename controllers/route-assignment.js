import express from "express";
// import userModel from "../models/user.js";

//create route
const assignRoute = async (req, res) => {
  const data = req.body;
  let id = req.query.id;
  try {
    const savedRoute = await accountSchema.findOne({ _id: data.id });

    const response = new routesModel({
      routes: data.push.route,
    });
    const route = await response.save();
    res.json({
      message: "Added route successfully",
      data: route,
      error: null,
    });
  } catch (error) {
    console.log("Error occured  ", error);
    res.status(500).json({
      message: "Error occured, failed to load data",
      error: error,
      data: null,
    });
  }
};

export { assignRoute };
