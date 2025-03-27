import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AuthForm() {
  const [isSignup, setIsSignup] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleAuth = () => {
    if (!email || !password) {
      alert("Email and password are required.");
      return;
    }

    if (isSignup) {
      if (!name || !confirmPassword) {
        alert("All fields are required.");
        return;
      }
      if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
      }

      // Save user data in local storage
      localStorage.setItem("user", JSON.stringify({ name, email, password }));
      alert("Signup successful! Please login.");
      setIsSignup(false);
    } else {
      // Login logic
      const storedUser = JSON.parse(localStorage.getItem("user"));
      if (!storedUser || storedUser.email !== email || storedUser.password !== password) {
        alert("Invalid email or password.");
        return;
      }
      alert("Login successful!");
      navigate("/"); // Redirect to homepage
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">{isSignup ? "Sign Up" : "Login"}</h2>
      <div className="card p-4 mx-auto" style={{ maxWidth: "400px" }}>
        {isSignup && (
          <div className="mb-3">
            <label className="form-label">Name:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        )}
        <div className="mb-3">
          <label className="form-label">Email:</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password:</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {isSignup && (
          <div className="mb-3">
            <label className="form-label">Confirm Password:</label>
            <input
              type="password"
              className="form-control"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
        )}
        <button className="btn btn-success w-100" onClick={handleAuth}>
          {isSignup ? "Sign Up" : "Login"}
        </button>
        <p className="text-center mt-3">
          {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
          <span className="text-primary" style={{ cursor: "pointer" }} onClick={() => setIsSignup(!isSignup)}>
            {isSignup ? "Log in here" : "Sign up here"}
          </span>
        </p>
      </div>
    </div>
  );
}

export default AuthForm;
