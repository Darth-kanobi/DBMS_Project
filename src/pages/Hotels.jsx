import React, { useState } from 'react';

function Hotels() {
  const [location, setLocation] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');

  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split('T')[0];

  const handleSearch = () => {
    console.log(`Searching hotels in ${location} from ${checkIn} to ${checkOut}`);
  };

  return (
    <div className="container mt-5">
      <h2>Book a Hotel</h2>
      <div className="mb-3">
        <label>Location:</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter city"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label>Check-In Date:</label>
        <input
          type="date"
          className="form-control"
          value={checkIn}
          min={today} // Prevents selecting past dates
          onChange={(e) => setCheckIn(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label>Check-Out Date:</label>
        <input
          type="date"
          className="form-control"
          value={checkOut}
          min={checkIn || today} // Prevents selecting check-out date before check-in
          onChange={(e) => setCheckOut(e.target.value)}
        />
      </div>
      <button className="btn btn-primary" onClick={handleSearch}>
        Search Hotels
      </button>
    </div>
  );
}

export default Hotels;
