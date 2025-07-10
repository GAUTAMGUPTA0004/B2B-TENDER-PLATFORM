const express = require('express');
const authenticateToken = require('../Middleware/AuthMiddleware'); // Fixed import - removed destructuring
const { createCompany, getCompanies } = require('../Controllers/companyController');

const router = express.Router();

// Apply authentication middleware to company creation
router.post('/', authenticateToken, createCompany);

// Add the missing GET route for fetching companies
router.get('/', getCompanies);

module.exports = router;