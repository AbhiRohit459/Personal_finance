import React, { useState } from "react";
import axios from "axios";

const Signin = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loading, setLoading] = useState(false);

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

  // Handle Sign In
  const handleSignin = async () => {
    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }

    if (emailError || passwordError) {
      alert("Please fix the errors before signing in.");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.get("http://localhost:5000/users");
      const users = response.data;

      const user = users.find((u) => u.email === email && u.password === password);

      if (user) {
        alert("Login successful!");
        // Redirect or store user session
        window.location.href = "/dashboard"; // Change as per your routing
      } else {
        alert("Invalid email or password.");
      }
    } catch (error) {
      console.error("Error signing in:", error);
      alert("Failed to sign in. Try again later.");
    }
    setLoading(false);
  };

  return (
    <div className="container d-flex flex-column align-items-center mt-5">
      <h3>Sign In</h3>

      {/* Signin Block */}
      <div className="card p-4 shadow-sm mt-3" style={{ width: "350px" }}>
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

        <div className="mt-2">
          Don't have an account? <a href="/signup">Sign Up</a>
        </div>
      </div>

      {/* Signin Button */}
      <button className="btn btn-primary mt-3" onClick={handleSignin} disabled={loading}>
        {loading ? "Signing In..." : "Sign In"}
      </button>
    </div>
  );
};

export default Signin;