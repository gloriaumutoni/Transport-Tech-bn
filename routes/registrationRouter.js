import { Router } from 'express';
const router = Router();
import createRegistration from '../controllers/registrationController.js';

router.post('/', createRegistration);

export default router;
