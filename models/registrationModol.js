import { Schema, model } from 'mongoose';

const registrationSchema = new Schema({
  name: String,
  phone_number: Number,
  arrivalTime: { type: String },
  arrivalDate: { type: String },

  /*arrivalTime: {
    type: Date,
    default: Date.now
  }*/
  /*arrivalDate: {
    type: Time,
    default : Time.now
  }*/
});

const Registration = model('Registration', registrationSchema);

export default Registration;
