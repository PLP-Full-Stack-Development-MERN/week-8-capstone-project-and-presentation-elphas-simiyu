
import { Router } from 'express';
import * as authController from '../controllers/authController';
import auth from '../middleware/auth';

const router = Router();

// Use proper typing for Express route handlers
router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.get('/me', auth, authController.getMe);

export default router;
