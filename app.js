const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));

// Temporary in-memory storage for submissions
let submissions = [];

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html"); // Serve the HTML form
});

app.post("/submit", (req, res) => {
  const { username, email, password } = req.body;

  // Basic server-side validation
  if (!username || !email || !password) {
    return res.send("All fields are required."); // Simple error response
  }

  // Add to submissions array
  submissions.push({ username, email, password });
  res.send("Form submitted and validated successfully on server-side!");
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
