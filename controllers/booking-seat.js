import bookingSeatModel from "../models/booking-seat.js";
import emailSender from './Emailsender.js';
const createBooking = async (req, res) => {
  try {
    const data = req.body;
    const { email } = req.user;
    
  
    const newBooking = new bookingSeatModel({
      seat: data.seat,
      booking_id: data.booking_id,
      user_id: data.user_id,
      date: data.date,
      time: data.time,
      status: data.status,
      vehicleId: data.vehicleId,
      destination: data.destination,
      model: data.model,
      userName:data.userName
    });

    const response = await newBooking.save();
    // Send email to the user
    const emailContent = `Dear user, your seat booking details are as follows:
      Seat: ${data.seat}
      Booking ID: ${data.booking_id}
      User ID: ${data.user_id}
      Date: ${data.date}
      Time: ${data.time}
      Status: ${data.status}
      Vehicle ID: ${data.vehicleId}
      Destination: ${data.destination}
      model:${data.model}`;
const task="Booking seat Confirmation";
    emailSender(email, emailContent,task);

    res.status(200).json({
      message: "Seat booking created successfully",
      data: response,
      error: null,
    });

  } catch (error) {
    console.log("Error occurred:", error);
    res.status(500).json({
      message: "Failed to save data. Error occurred.",
      error,
      data: null,
    });
  }
};

export default createBooking;

//delete Booking
const deleteBooking = async (req, res) => {
  try {
    let bookingId = req.params.id;
    const { email } = req.user;

    let booking = await bookingSeatModel.find({ _id: bookingId });
    if (booking.length == 0) {
      return res.status(404).json({
        message: "Booking not found",
        data: null,
        error: null,
      });
    } else {
      let deletionResult = await bookingSeatModel.deleteOne({ _id: bookingId });
      const task="Delete Booked Seat Confirmation";
      emailSender(email, deletionResult,task);
      return res.status(200).json({
        message: "Vehicle deleted successfully",
        data: deletionResult,
        error: null,
      });
    }
  } catch (error) {
    console.log("Error occurred while deleting: ", error);
    return res.status(500).json({
      message: "Failed to delete booking. Error occurred.",
      error: error,
      data: null,
    });
  }
};

// //update Booking
const changeBooking = async (req, res) => {
  try {
    let bookingId = req.params.id;
    const { email } = req.user;
    let data = req.body;
    let booking = await bookingSeatModel.find({_id:bookingId});

    if (booking.length==0) {
      return res.status(404).json({
        message:"Booked seat trying to update not found",
        error:"Booked seat not found"
      });
    }
  else{
    let updatedBooking = await bookingSeatModel.findOneAndUpdate(
      { _id: bookingId },
      { $set: data },
     // To get the updated vehicle in the response
    );
    const task="Changing Booked seat Confirmation";
    emailSender(email, updatedBooking,task);
    return res.status(200).json({
      message: "Booked seat updated successfully",
      data: updatedBooking,
      error: null,
    });
  }
  } catch (error) {
    console.log("Error occurred: ", error);
    return res.status(500).json({
      message: "Failed to update vehicle. Error occurred.",
      error: error,
      data: null,
    });
  }
};
const showAllBooked=async (req,res)=>{
  try{
    let booking = await bookingSeatModel.find({});
    if(booking.length == 0){
      res.status(404).json({
        message:"No data found",
        data:booking,
        error:"No data found "
      })
    }
    else{
      res.status(200).json({
        message:"data retrieved successfully",
        data: booking,
        error:null,
      })
    }
  }
  catch(error){
    console.log("Error occured in readAllMessages:",error)
  res.status(500).json({
    message:"Error",
    error:error,
    data:null
  })
  }
}

export { createBooking, changeBooking, deleteBooking,showAllBooked };
