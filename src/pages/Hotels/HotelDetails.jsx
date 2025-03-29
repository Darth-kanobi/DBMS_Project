import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function HotelDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const hotel = location.state?.hotel; // Get hotel details from navigation state

  if (!hotel) {
    return <h2 className="text-center mt-5">No hotel details available.</h2>;
  }

  return (
    <div className="container mt-5">
      <div className="card mx-auto" style={{ maxWidth: "800px" }}>
        <img
          src={hotel.image}
          className="card-img-top"
          alt={hotel.name}
          style={{ height: "300px", objectFit: "cover" }}
        />
        <div className="card-body">
          <h3 className="card-title">{hotel.name}</h3>
          <p className="card-text">
            <strong>City:</strong> {hotel.city}
          </p>
          <p className="card-text">
            <strong>Rating:</strong> ⭐ {hotel.rating} / 5
          </p>
          <p className="card-text">
            <strong>Amenities:</strong> {hotel.amenities.join(", ")}
          </p>
          <button
            className="btn btn-primary w-100"
            onClick={() => navigate("/hotel-booking", { state: { hotel } })}
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default HotelDetails;
