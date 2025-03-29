import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const hotelsData = {
  Mumbai: [
    {
      name: "The Taj Mahal Palace",
      rating: 5,
      amenities: ["Free WiFi", "Swimming Pool", "Spa", "Gym", "Restaurant"],
      price: 12000,
      image: "https://source.unsplash.com/600x400/?hotel,mumbai",
    },
    {
      name: "Trident Nariman Point",
      rating: 5,
      amenities: ["Sea View", "Bar", "Airport Shuttle", "Gym", "Spa"],
      price: 9000,
      image: "https://source.unsplash.com/600x400/?luxury-hotel,mumbai",
    },
  ],
  Delhi: [
    {
      name: "The Leela Palace",
      rating: 5,
      amenities: ["Fine Dining", "Luxury Spa", "Airport Pickup", "Gym"],
      price: 15000,
      image: "https://source.unsplash.com/600x400/?hotel,delhi",
    },
    {
      name: "ITC Maurya",
      rating: 5,
      amenities: ["Business Center", "Fine Dining", "Swimming Pool", "Gym"],
      price: 11000,
      image: "https://source.unsplash.com/600x400/?luxury-hotel,delhi",
    },
  ],
  Bengaluru: [
    {
      name: "The Oberoi Bengaluru",
      rating: 5,
      amenities: ["Garden View", "Spa", "Free Parking", "Restaurant"],
      price: 13000,
      image: "https://source.unsplash.com/600x400/?hotel,bangalore",
    },
    {
      name: "Taj West End",
      rating: 5,
      amenities: ["Outdoor Pool", "Bar", "Spa", "Fitness Center"],
      price: 12500,
      image: "https://source.unsplash.com/600x400/?luxury-hotel,bangalore",
    },
  ],
};

function Hotels() {
  const [selectedCity, setSelectedCity] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const navigate = useNavigate();

  const handleSelectHotel = (hotel) => {
    navigate("/hotel-details", { state: { hotel } });
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Find Your Perfect Hotel</h2>

      <div className="row mt-3">
        <div className="col-md-4">
          <label className="form-label">Select City:</label>
          <select
            className="form-control"
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
          >
            <option value="">-- Choose a City --</option>
            {Object.keys(hotelsData).map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-3">
          <label className="form-label">Check-in Date:</label>
          <input
            type="date"
            className="form-control"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
          />
        </div>
        <div className="col-md-3">
          <label className="form-label">Check-out Date:</label>
          <input
            type="date"
            className="form-control"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
          />
        </div>
      </div>

      <div className="row mt-4">
        {selectedCity &&
          hotelsData[selectedCity]?.map((hotel, index) => (
            <div key={index} className="col-md-6">
              <div className="card mb-4">
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="card-img-top"
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{hotel.name}</h5>
                  <p className="card-text">⭐ {hotel.rating} Stars</p>
                  <p className="card-text">
                    <strong>Amenities:</strong> {hotel.amenities.join(", ")}
                  </p>
                  <p className="card-text">
                    <strong>Price per Night:</strong> ₹{hotel.price}
                  </p>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleSelectHotel(hotel)}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Hotels;

