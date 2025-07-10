const express = require('express');
const { uploadLogo } = require('../Controllers/uploadController');

const router = express.Router();

router.post('/logo', uploadLogo);

module.exports = router;