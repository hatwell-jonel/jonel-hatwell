const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

// initialize express app
const app = express();
const port = process.env.PORT || 3000;

// connect to mongodb
const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('MongoDB connected successfully');
    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
    }
};
 
// start server
app.listen(port, () => {    
    console.log(`Server is running on port ${port}`);
    dbConnection();
});
