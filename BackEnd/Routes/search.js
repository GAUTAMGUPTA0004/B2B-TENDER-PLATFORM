const express = require('express');
const { searchCompanies } = require('../Controllers/searchController');

const router = express.Router();

router.get('/', searchCompanies);

module.exports = router;
