import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function HotelBooking() {
  const location = useLocation();
  const navigate = useNavigate();
  const hotel = location.state?.hotel;

  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);
  const pricePerNight = 15000; // Example price per night

  if (!hotel) {
    return <h2 className="text-center mt-5">No hotel selected.</h2>;
  }

  // Calculate total cost
  const calculateTotal = () => {
    if (!checkIn || !checkOut) return 0;
    const startDate = new Date(checkIn);
    const endDate = new Date(checkOut);
    const nights = Math.max(1, (endDate - startDate) / (1000 * 60 * 60 * 24));
    return nights * pricePerNight;
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Book {hotel.name}</h2>
      <div className="card p-4 mx-auto" style={{ maxWidth: "600px" }}>
        <div className="mb-3">
          <label className="form-label">Check-In Date:</label>
          <input
            type="date"
            className="form-control"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Check-Out Date:</label>
          <input
            type="date"
            className="form-control"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Guests:</label>
          <input
            type="number"
            className="form-control"
            min="1"
            value={guests}
            onChange={(e) => setGuests(parseInt(e.target.value))}
          />
        </div>
        <p><strong>Total Cost:</strong> ₹{calculateTotal()}</p>
        <button
          className="btn btn-success w-100"
          onClick={() => navigate("/confirm-payment", { state: { total: calculateTotal() } })}
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  );
}

export default HotelBooking;
