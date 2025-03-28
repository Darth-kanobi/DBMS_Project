import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Flights from "./pages/Flights";
import Hotels from "./pages/Hotels";
import Login from "./pages/Login";
import ConfirmPayment from "./pages/ConfirmPayment";
import Signup from "./pages/Signup";
import HotelDetails from "./pages/HotelDetails";
import HotelBooking from "./pages/HotelBooking";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flights" element={<Flights />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/confirm-payment" element={<ConfirmPayment />} />
        <Route path="/hotel-details" element={<HotelDetails />} />
        <Route path="/hotel-booking" element={<HotelBooking />} />
      </Routes>
    </Router>
  );
}

export default App;
