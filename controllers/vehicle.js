import vehicleModel from "../models/vehicle.js";

//create Vehicle
const createVehicle = async (req, res) => {
  try {
    const data = req.body;

    const savedVehicle = await vehicleModel.find({
      plate: data.plate,
    });

    if (savedVehicle.length > 0) {
      return res.status(409).json({
        message: "Vehicle Already registered",
      });
    }

    const newVehicle = new vehicleModel({
      model: data.model,
      plate: data.plate,
      drivers: data.drivers,
      routeId: data.routeId,
    });

    const response = await newVehicle.save();

    return res.status(200).json({
      message: "Vehicle data added successfully",
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

//delete vehicle
const deleteVehicle = async (req, res) => {
  try {
    let vehicleId = req.query.id;

    let vehicle = await vehicleModel.find({ _id: vehicleId });
    if (vehicle.length == 0) {
      res.status(404).json({
        message: "Vehicle not found",
        data: null,
        error: null,
      });
    } else {
      let deletionResult = await vehicleModel.deleteOne({ _id: vehicleId });

      res.status(200).json({
        message: "Vehicle deleted successfully",
        data: deletionResult,
        error: null,
      });
    }
  } catch (error) {
    console.log("Error occurred while deleting: ", error);
    res.status(500).json({
      message: "Failed to delete vehicle. Error occurred.",
      error: error,
      data: null,
    });
  }
};

// //update Vehicle
const changeVehicle = async (req, res) => {
  try {
    let vehicleId = req.query.id;
    let data = req.body;
    let vehicle = await vehicleModel.findById(vehicleId);

    if (!vehicle) {
      return res.sendStatus(404);
    }

    let updatedVehicle = await vehicleModel.findOneAndUpdate(
      { _id: vehicleId },
      { $set: data },
      { new: true } // To get the updated vehicle in the response
    );

    res.status(200).json({
      message: "Vehicle updated successfully",
      data: updatedVehicle,
      error: null,
    });
  } catch (error) {
    console.log("Error occurred: ", error);
    res.status(500).json({
      message: "Failed to update vehicle. Error occurred.",
      error: error,
      data: null,
    });
  }
};
export { createVehicle, deleteVehicle, changeVehicle };
