import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home";
import Flights from "./pages/Flights";
import Hotels from "./pages/Hotels";
import Login from "./pages/Login";
import ConfirmPayment from "./pages/ConfirmPayment";

function App() {
  return (
    <Router>
      <div className="container text-center mt-5">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/">Booking App</Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><Link className="nav-link" to="/flights">Flights</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/hotels">Hotels</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
            </ul>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/flights" element={<Flights />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/login" element={<Login />} />
          <Route path="/confirm-payment" element={<ConfirmPayment />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
