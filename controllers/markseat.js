

import Seats from '../models/markseat.js';

// Controller to handle booking a seat
export async function bookSeat(req, res) {
  const { seatNumber, passengerName, bookingTime, from, destination } = req.body;

  try {
    // Check if the seat number is already booked
    const existingSeat = await Seats.findOne({ seatNumber });
    if (existingSeat) {
      return res.status(400).json({ Driver: 'seat already served' });
    }

    // Create a new seat booking
    const seat = new Seats({
      passengerName,
      from,
      destination,
      seatNumber,
      bookingTime

    });
    await seat.save();

    return res.json({ data: seat });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal ,, server error' });
  }
}

// Controller to mark a seat as served
export async function markSeatAsServed(req, res) {
  const { seatNumber } = req.params;

  try {
    // Find the seat served by seat number
    const seat = await Seats.findOne({ seatNumber });
    if (!seat) {
      return res.status(404).json({ error: 'seat not found' });
    }

    // Mark the seat as served
    seat.seatServed = true;
    await seat.save();

    return res.json({ message: ' seat marked as served' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}