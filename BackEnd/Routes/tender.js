const express = require('express');
const authenticateToken = require('../Middleware/AuthMiddleware'); // Fixed import - removed destructuring
const { createTender, getTenders } = require('../Controllers/tenderController');

const router = express.Router();

router.post('/', authenticateToken, createTender);
router.get('/', getTenders);

module.exports = router;