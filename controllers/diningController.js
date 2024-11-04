const DiningHall = require('../models/DiningHall');

exports.getDiningHalls = async (req, res) => {
  try {
    const halls = await DiningHall.find();
    res.status(200).json(halls);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch dining halls" });
  }
};

exports.addDiningHall = async (req, res) => {
  const { name, menu, openHours } = req.body;
  try {
    const newHall = new DiningHall({ name, menu, openHours });
    await newHall.save();
    res.status(201).json(newHall);
  } catch (error) {
    res.status(500).json({ error: "Failed to add dining hall" });
  }
};