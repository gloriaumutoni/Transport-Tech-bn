import routesModel from "../models/routes.js";

//create route
const createRoute = async (req, res) => {
  try {
    const data = req.body;

    const savedRoute = await routesModel.find({
      origin: data.origin,
      Destination: data.Destination,
    });

    if (savedRoute.length > 0) {
      return res.status(409).json({
        message: "Route already exists",
      });
    }

    const newRoute = new routesModel(data);

    const response = await newRoute.save();

    return res.status(200).json({
      message: "Route created successfully",
      data: response,
      error: null,
    });
  } catch (error) {
    console.log("Error occurred: ", error);
    res.status(500).json({
      message: "Failed to create route. Error occurred.",
      error: error,
      data: null,
    });
  }
};

//delete route
const deleteRoute = async (req, res) => {
  try {
    let routeId = req.query.id;

    let response = await routesModel.find({ _id: routeId });
    if (response.length == 0) {
      res.status(404).json({
        message: "Route not found",
        data: null,
        error: null,
      });
    } else {
      let response = await routesModel.deleteOne({ _id: routeId });

      res.status(200).json({
        message: "Route Updated successfully",
        data: response,
        error: null,
      });
    }
  } catch (error) {
    console.log("Error occured while deleting ", error);
    res.status(500).json({
      message: "Error occured, failed to load data",
      error: error,
      data: null,
    });
  }
};

// //update route
const changeRoute = async (req, res) => {
  try {
    let routeId = req.query.id;
    let data = req.body;
    let route = await routesModel.findById(routeId);

    if (!route) {
      return res.sendStatus(404);
    }

    let updatedRoute = await routesModel.findOneAndUpdate(
      { _id: routeId },
      { $set: data },
      { new: true } // To get the updated user in the response
    );

    res.status(200).json({
      message: "Role added successfully",
      data: updatedRoute,
      error: null,
    });
  } catch (error) {
    console.log("Error occurred: ", error);
    res.status(500).json({
      message: "Failed to load data. Error occurred.",
      error: error,
      data: null,
    });
  }
};
export { createRoute, deleteRoute, changeRoute };
