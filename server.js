const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(express.json());  // Ensures JSON data is processed correctly
app.use(express.static(path.join(__dirname, "public"))); // Serve static files

// Serve Login Page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "main.html"));
});

// Handle Login
app.post("/login", (req, res) => {
    const { username, password } = req.body;

    console.log("Received Login Request:", req.body); // Debugging

    if (username === "santosh" && password === "1234") {
        res.json({ success: true, message: "✅ Login Successful!" }); // Send JSON instead of plain text
    } else {
        res.json({ success: false, message: "❌ Invalid Username or Password" });
    }
});


// Start Server
app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});
app.get("/dashboard.html", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "dashboard.html"));
});

