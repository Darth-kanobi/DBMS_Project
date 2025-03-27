import React, { useState } from 'react';

function Flights() {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');

  // ✅ Define 'today' properly
  const today = new Date().toISOString().split('T')[0];

  const handleSearch = () => {
    console.log(`Searching flights from ${from} to ${to} on ${date}`);
  };

  return (
    <div className="container mt-5">
      <h2>Book Your Flight</h2>
      <div className="mb-3">
        <label>From:</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter departure city"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label>To:</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter destination city"
          value={to}
          onChange={(e) => setTo(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label>Date:</label>
        <input
          type="date"
          className="form-control"
          value={date}
          min={today} // ✅ Now 'today' is properly defined
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <button className="btn btn-primary" onClick={handleSearch}>
        Search Flights
      </button>
    </div>
  );
}

export default Flights;
