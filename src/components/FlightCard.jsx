import React from 'react';
import './FlightCard.css';

const FlightCard = ({ flight }) => {
  return (
    <div className="flight-card">
      <div className="flight-header">
        <div className="airline">{flight.airline}</div>
        <div className="route">
          {flight.departure} → {flight.arrival}
        </div>
      </div>
      <div className="flight-details">
        <div className="time">{flight.time}</div>
        <div className="price gold-text">{flight.price}</div>
      </div>
      <button className="book-button">Book Now</button>
    </div>
  );
};

export default FlightCard;