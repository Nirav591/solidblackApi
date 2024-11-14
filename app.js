const express = require('express');
const app = express();

// Set the port
const PORT = 3001;

// Define a route for the "Hello World" response
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
