const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const faqRoutes = require('./routes/faqRoutes');


require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());
app.use('/faqs', faqRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));


// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
