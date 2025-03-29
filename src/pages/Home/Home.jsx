import React from 'react';
import { FaSearch, FaPlane, FaHotel, FaUser, FaSignInAlt } from 'react-icons/fa';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo">TravelEase</div>
        <div className="nav-links">
          <a href="#flights">Flights</a>
          <a href="#hotels">Hotels</a>
          <a href="#login" className="auth-link">
            <FaUser /> Login/Signup
          </a>
        </div>
      </nav>

      {/* Hero Section with Gradient */}
      <div className="hero-section">
        <div className="hero-content">
          <h1>Your Journey Begins Here</h1>
          <p>Discover the best deals on flights and hotels across India</p>
          
          {/* Tabbed Search Component */}
          <div className="search-tabs-container">
            <div className="search-tabs">
              <button className="active">
                <FaPlane /> Flights
              </button>
              <button>
                <FaHotel /> Hotels
              </button>
            </div>
            
            {/* Flight Search Form */}
            <div className="search-form flight-form">
              <div className="form-row">
                <div className="form-group">
                  <label>From</label>
                  <input type="text" placeholder="Delhi (DEL)" />
                </div>
                <div className="form-group">
                  <label>To</label>
                  <input type="text" placeholder="Mumbai (BOM)" />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label>Departure</label>
                  <input type="date" />
                </div>
                <div className="form-group">
                  <label>Return</label>
                  <input type="date" />
                </div>
                <div className="form-group">
                  <label>Travelers</label>
                  <select>
                    <option>1 Adult</option>
                    <option>2 Adults</option>
                    <option>Family</option>
                  </select>
                </div>
              </div>
              
              <button className="search-button">
                <FaSearch /> Search Flights
              </button>
            </div>
            
            {/* Hotel Search Form (hidden by default) */}
            <div className="search-form hotel-form" style={{display: 'none'}}>
              {/* Hotel form content would go here */}
            </div>
          </div>
        </div>
      </div>

      {/* Auth Modal (would toggle with state in real app) */}
      <div className="auth-modal">
        <div className="auth-container">
          <div className="auth-tabs">
            <button className="active">Login</button>
            <button>Sign Up</button>
          </div>
          
          <div className="auth-form">
            <div className="form-group">
              <input type="email" placeholder="Email" />
            </div>
            <div className="form-group">
              <input type="password" placeholder="Password" />
            </div>
            <button className="auth-button">
              <FaSignInAlt /> Login
            </button>
            <div className="auth-divider">or</div>
            <button className="social-auth google">Continue with Google</button>
            <button className="social-auth facebook">Continue with Facebook</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;