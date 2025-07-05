import { Router } from 'express';
import { register, login } from '../Controllers/authcontroller';

const router = Router();

// @route   POST /api/auth/register
router.post('/register', register);

// @route   POST /api/auth/login
router.post('/login', login);

export default router;