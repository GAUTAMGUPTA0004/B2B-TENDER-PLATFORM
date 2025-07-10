const express = require('express');
const { authenticateToken } = require('../Middleware/AuthMiddleware');
const { createTender, getTenders } = require('../Controllers/tenderController');

const router = express.Router();

router.post('/', authenticateToken, createTender);
router.get('/', getTenders);

module.exports = router;