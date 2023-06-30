

import express from 'express';
import { bookSeat, markSeatAsServed } from '../controllers/markseat.js';

const router = express.Router();

router.post('/seats',bookSeat);
router.patch('/mark-served/:seatNumber', markSeatAsServed);

export default router;

