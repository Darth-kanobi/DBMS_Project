import React from 'react';
import FlightCard from '../../components/FlightCard.jsx';
import './Flights.css';

const Flights = () => {
  // Sample flight data
  const flights = [
    {
      id: 1,
      airline: 'Air India',
      departure: 'DEL',
      arrival: 'BOM',
      time: '08:00 - 10:30',
      price: '₹8,499'
    },
    // Add more flights
  ];

  return (
    <div className="flights-page">
      <div className="page-header">
        <h1><span className="gold-text">Flight</span> Bookings</h1>
        <p>Find the best flights across India</p>
      </div>

      <div className="search-container">
        {/* Search form would go here */}
      </div>

      <div className="flights-list">
        {flights.map(flight => (
          <FlightCard key={flight.id} flight={flight} />
        ))}
      </div>
    </div>
  );
};

export default Flights;