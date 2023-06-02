// routes/messageRoutes.js

import { Router } from 'express';
const router = Router();
import messageController from '../controllers/messageController.js'

router.post('/', messageController.createMessage);

export default router;
