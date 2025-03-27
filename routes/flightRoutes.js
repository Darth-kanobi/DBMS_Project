const express = require("express");
const router = express.Router();
const db = require("../db");

// Fetch available flights
router.get("/", (req, res) => {
  db.query("SELECT * FROM flights", (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

// Book a flight
router.post("/book", (req, res) => {
  const { user_id, flight_id } = req.body;
  const query = "INSERT INTO bookings (user_id, flight_id) VALUES (?, ?)";
  db.query(query, [user_id, flight_id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Flight booked successfully!" });
  });
});

module.exports = router;
