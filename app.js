// app.js

// Import necessary modules
const express = require('express');
const mongodb = require('mongodb');

// Create an Express application
const app = express();

// Set up MongoDB connection
const MongoClient = mongodb.MongoClient;
const mongoURI = 'mongodb://localhost:27017/fitness-forge'; // Update with your MongoDB connection URI
const client = new MongoClient(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
let db;

client.connect(err => {
  if (err) {
    console.error('Failed to connect to MongoDB:', err);
    return;
  }
  console.log('Connected to MongoDB');
  db = client.db();
});

// Define routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
