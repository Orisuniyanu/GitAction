const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Route handler
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

// Export app for testing
module.exports = app;

