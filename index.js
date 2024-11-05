require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const diningRoutes = require('./routes/diningRoutes');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/dining', diningRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Dining Hall Tracker');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
