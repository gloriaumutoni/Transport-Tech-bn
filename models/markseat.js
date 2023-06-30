
import mongoose from 'mongoose';

const { Schema } = mongoose;

const seatSchema = new Schema({
  passengerName: {
    type: String,
    required: true,
  },
  from: {
    type: String,
    required: true,
  },
  destination: {
    type: String,
    required: true,
  },
  seatNumber: {
    type: String,
    required: true,
    unique: true,
  },
  bookingTime: {
    type: Date,
    required: true,
  },

  seatServed: {
    type: Boolean,
    default: true,

  },
});

const Seats = mongoose.model('Seat', seatSchema);

export default Seats;
