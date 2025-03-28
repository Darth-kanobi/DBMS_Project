import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css"; // Import the CSS file for styling

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="overlay">
        <h1 className="title">INDIA'S CANVAS</h1>
        <p className="subtitle">Explore, Book, and Travel with Ease</p>
        <div className="buttons">
          <button className="btn btn-primary" onClick={() => navigate("/hotels")}>
            Book a Hotel
          </button>
          <button className="btn btn-secondary" onClick={() => navigate("/flights")}>
            Book a Flight
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
