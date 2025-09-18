//This is a test app.

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello, world from express! The web server is working");
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}/`);
});
