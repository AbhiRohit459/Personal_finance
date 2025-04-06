import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  // Validate email
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setEmailError(value.includes("@") ? "" : "Email must contain @");
  };

  // Validate password (at least 1 special char & 1 number)
  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);
    const hasNumber = /\d/.test(value);

    setPasswordError(
      hasSpecialChar && hasNumber
        ? ""
        : "Password must contain at least 1 special character and 1 number"
    );
  };

  // Handle Signup
  const handleSignup = async () => {
    if (!name || !email || !password) {
      alert("Please fill in all fields.");
      return;
    }

    if (emailError || passwordError) {
      alert("Please fix the errors before signing up.");
      return;
    }

    const newUser = { name, email, password };

    try {
      await axios.post("http://localhost:5000/users", newUser);
      setSuccessMessage("User registered successfully!");
      setName("");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error("Error signing up:", error);
      alert("Failed to register user.");
    }
  };

  return (
    <div className="container d-flex flex-column align-items-center mt-5">
      <h3>Sign Up</h3>

      {/* Signup Block */}
      <div className="card p-4 shadow-sm mt-3" style={{ width: "350px" }}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
          />
          {emailError && <small className="text-danger">{emailError}</small>}
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <div className="input-group">
            <input
              type={passwordVisible ? "text" : "password"}
              className="form-control"
              placeholder="Enter your password"
              value={password}
              onChange={handlePasswordChange}
            />
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={togglePasswordVisibility}
            >
              {passwordVisible ? "🙈" : "👁"}
            </button>
          </div>
          {passwordError && <small className="text-danger">{passwordError}</small>}
        </div>

        {successMessage && <div className="alert alert-success">{successMessage}</div>}

        <button className="btn btn-primary mt-3" onClick={handleSignup}>
          Sign Up
        </button>
        <div className="mt-2">
          Already have an account? <a href="/signin">Sign In</a>
        </div>
      </div>
    </div>
  );
};

export default Signup;