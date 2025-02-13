const express = require('express');
const app = express();
const port = 8081;

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).send('Healthy');
});

// Sample route
app.get('/', (req, res) => {
  res.send('Hello, World! This is a demo application running on Elastic Beanstalk!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
