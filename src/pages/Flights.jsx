import React, { useState } from "react";

const Flights = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");

  const handleSearch = () => {
    console.log(`Searching flights from ${from} to ${to} on ${date}`);
  };

  return (
    <div className="container">
      <h2>Book a Flight</h2>
      <div className="form-group">
        <label>From:</label>
        <input type="text" value={from} onChange={(e) => setFrom(e.target.value)} />
      </div>
      <div className="form-group">
        <label>To:</label>
        <input type="text" value={to} onChange={(e) => setTo(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Date of Travel:</label>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </div>
      <button onClick={handleSearch}>Search Flights</button>
    </div>
  );
};

export default Flights;
