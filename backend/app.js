require('dotenv').config(); // Load environment variables

const mongoose = require('mongoose');
const express = require('express');
const app = express();

// Log the URI to verify it is loaded correctly
console.log('MongoDB URI:', process.env.MONGO_URI);

// Use the MONGO_URI environment variable for the MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

const PORT = process.env.PORT || 5000; // Use the PORT environment variable or default to 5000

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
