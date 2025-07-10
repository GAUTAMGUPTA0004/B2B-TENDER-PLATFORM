const express = require('express');
const { authenticateToken } = require('../Middleware/AuthMiddleware');
const { createCompany, getCompanies } = require('../Controllers/companyController');

const router = express.Router();

// Apply authentication middleware to company creation
router.post('/', authenticateToken, createCompany);
router.get('/', getCompanies);

module.exports = router;