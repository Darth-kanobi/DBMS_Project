const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root", // Add your MySQL password here
  database: "travel_booking",
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
    return;
  }
  console.log("Connected to MySQL database");
});

// Import routes
const authRoutes = require("./routes/authRoutes");
const flightRoutes = require("./routes/flightRoutes");

// Use routes
app.use("/api/auth", authRoutes);
app.use("/api/flights", flightRoutes);
app.use("/api", flightRoutes); 

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
