const express = require('express');
const { fetchDiningData } = require('../controllers/diningController');
const router = express.Router();

router.get('/', fetchDiningData);

module.exports = router;
