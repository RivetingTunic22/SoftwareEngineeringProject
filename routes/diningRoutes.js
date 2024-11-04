const express = require('express');
const { fetchDiningData, addDiningHall } = require('../controllers/diningController');
const router = express.Router();

// Define routes and their callbacks
router.get('/fetch-dining-data', fetchDiningData);
router.post('/add', addDiningHall);

module.exports = router;