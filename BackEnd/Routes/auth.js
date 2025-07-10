// Routes/auth.js
const { Router } = require('express');
const { register, login } = require('../Controllers/authcontroller');

const router = Router();

// @route   POST /api/auth/register
router.post('/register', register);

// @route   POST /api/auth/login
router.post('/login', login);

module.exports = router;