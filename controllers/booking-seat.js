import bookingSeatModel from "../models/booking-seat.js";

//book a seat
const createBooking = async (req, res) => {
  try {
    const data = req.body;

    const newBooking = new bookingSeatModel({
      seat: data.seat,
      booking_id: data.booking_id,
      user_id: data.user_id,
      date: data.date,
      time: data.time,
      status: data.status,
      vehicleId: data.vehicleId,
      destination: data.destination,
      model: data.destination,
    });

    const response = await newBooking.save();

    return res.status(200).json({
      message: "Seat book created successfully",
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

//delete Booking
const deleteBooking = async (req, res) => {
  try {
    let bookingId = req.query.id;

    let booking = await bookingSeatModel.find({ _id: bookingId });
    if (booking.length == 0) {
      res.status(404).json({
        message: "Booking not found",
        data: null,
        error: null,
      });
    } else {
      let deletionResult = await bookingSeatModel.deleteOne({ _id: bookingId });

      res.status(200).json({
        message: "Vehicle deleted successfully",
        data: deletionResult,
        error: null,
      });
    }
  } catch (error) {
    console.log("Error occurred while deleting: ", error);
    res.status(500).json({
      message: "Failed to delete booking. Error occurred.",
      error: error,
      data: null,
    });
  }
};

// //update Booking
const changeBooking = async (req, res) => {
  try {
    let bookingId = req.query.id;
    let data = req.body;
    let booking = await bookingSeatModel.findById(bookingId);

    if (!booking) {
      return res.sendStatus(404);
    }

    let updatedBooking = await bookingSeatModel.findOneAndUpdate(
      { _id: bookingId },
      { $set: data },
      { new: true } // To get the updated vehicle in the response
    );

    res.status(200).json({
      message: "Book updated successfully",
      data: updatedBooking,
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
export { createBooking, changeBooking, deleteBooking };
