import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";  // ✅ Added for navbar collapse
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Flights from "./pages/Flights";
import Hotels from "./pages/Hotels";
import Login from "./pages/Login";
import ConfirmPayment from "./pages/ConfirmPayment";
import Signup from "./pages/Signup";

function App() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <Router>
      <div className="container text-center mt-5">
        {/* ✅ Updated Navbar with Login removed */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/">Booking App</Link>
          <button 
            className="navbar-toggler" 
            type="button" 
            onClick={handleNavCollapse}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><Link className="nav-link" to="/flights">Flights</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/hotels">Hotels</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/signup">Sign Up</Link></li> {/* ✅ Kept only Sign Up */}
            </ul>
          </div>
        </nav>

        {/* ✅ Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/flights" element={<Flights />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/confirm-payment" element={<ConfirmPayment />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
