const mongoose = require('mongoose');

const diningHallSchema = new mongoose.Schema({
  name: { type: String, required: true },
  menu: { type: Array, default: [] },
  openHours: { type: String },
});

module.exports = mongoose.model('DiningHall', diningHallSchema);
