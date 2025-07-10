const express = require('express');
const { applyTender, getApplicationsByTender } = require('../Controllers/applicationController');

const router = express.Router();

router.post('/', applyTender);
router.get('/:id', getApplicationsByTender);

module.exports = router;
