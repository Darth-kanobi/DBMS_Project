import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Welcome to the Flight & Hotel Booking App</h1>
      <p>Select an option below:</p>
      <Link to="/flights" className="btn btn-primary m-2">Book a Flight</Link>
      <Link to="/hotels" className="btn btn-success m-2">Book a Hotel</Link>
    </div>
  );
}

export default Home;
