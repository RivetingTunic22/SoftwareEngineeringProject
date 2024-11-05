const DiningHall = require('../models/DiningHall');
const axios = require('axios');

// Fetch dining data from external API
exports.fetchDiningData = async (req, res) => {
  try {
    const response = await axios.get('https://api.freshideasdining.com/v1/location/65b6be9ff3c61202b10b76c1/periods?platform=0&date=2024-10-22');
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ message: 'Failed to fetch data' });
  }
};
