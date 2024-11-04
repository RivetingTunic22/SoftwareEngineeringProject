const express = require('express');
const { getDiningHalls, addDiningHall } = require('../controllers/diningController');
const router = express.Router();

router.get('/', getDiningHalls);
router.post('/add', addDiningHall);

module.exports = router;
