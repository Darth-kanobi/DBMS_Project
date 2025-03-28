import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function ConfirmPayment() {
  const location = useLocation();
  const navigate = useNavigate();
  const totalAmount = location.state?.total || 0;

  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  const handlePayment = () => {
    if (!cardNumber || !expiry || !cvv) {
      alert("Please fill in all card details.");
      return;
    }
    alert("Payment Successful! Booking Confirmed 🎉");
    navigate("/"); // Redirect to home after payment
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Confirm Payment</h2>
      <div className="card p-4 mx-auto" style={{ maxWidth: "500px" }}>
        <h4>Total Amount: ₹{totalAmount}</h4>

        <div className="mb-3">
          <label className="form-label">Card Number:</label>
          <input
            type="text"
            className="form-control"
            placeholder="1234 5678 9012 3456"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Expiry Date:</label>
          <input
            type="text"
            className="form-control"
            placeholder="MM/YY"
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">CVV:</label>
          <input
            type="text"
            className="form-control"
            placeholder="123"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
          />
        </div>

        <button className="btn btn-success w-100" onClick={handlePayment}>
          Pay Now
        </button>
      </div>
    </div>
  );
}

export default ConfirmPayment;
