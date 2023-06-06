
import mongoose from 'mongoose';

const { Schema } = mongoose;

const seatSchema = new Schema({
  passengerName: {
    type: String,
    required: true,
  },
  seatNumber: {
    type: String,
    required: true,
    unique: true,
  },
  bookingDate: {
    type: Date,
    required: true,
  },
  
  isServed: {
    type: Boolean,
    default: false,
  },
});

const Seat = mongoose.model('Seat', seatSchema);

export default Seat;
