
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
  
seatServed: {
    type: Boolean,
    default: true,
    
  },
});

const Seat = mongoose.model('Seat', seatSchema);

export default Seat;
