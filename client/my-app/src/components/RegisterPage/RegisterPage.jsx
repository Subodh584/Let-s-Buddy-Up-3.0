import React, { useState } from "react";
import axios from "axios";
import "../style.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import TruckAnimation from "../Animations/TruckAnimation";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conPassword, setConPassword] = useState("");
  const [user_id, setUser_id] = useState("");

  const navigate = useNavigate();

  const userInfo = {
    name: name,
    email: email,
    password: password,
    userId:user_id
  };

  async function handleClick(e) {
    e.preventDefault();

    // Check if passwords match
    if (password.length < 8) {
      alert("Password must be at least 8 characters long!");
    } else if (password !== conPassword) {
      alert("Passwords don't match!");
    } else {
      console.log(user_id);
      try {
        const response = await axios.post(
          "http://localhost:3000/register",
          userInfo
        );

        if (!response.data) {
          alert("User already exists, please Login!");
        } else {
          navigate("/login");
          alert("User Registration Successful!");
        }
      } catch (error) {
        console.error("Error during registration:", error);
      }
    }
  }

  return (
    <div className="Body">
      <div className="wrapper">
        <h2>Let's Buddy Up</h2>

        {/* Changed onClick to onSubmit for the form */}
        <form action="#" id="RegForm" onSubmit={handleClick}>
          <div className="input-box">
            <input
              type="text"
              required
              placeholder="Enter your name"
              onChange={(e) =>{ setName(e.target.value);
                setUser_id(Date.now);
                }}
            />
          </div>
          <div className="input-box">
            <input
              type="email"
              required
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-box">
            <input
              type="password"
              required
              placeholder="Create password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input-box">
            <input
              type="password"
              required
              placeholder="Confirm password"
              onChange={(e) => setConPassword(e.target.value)}
            />
          </div>
          <div className="policy">
            <input type="checkbox" required />
            <h3>I accept all terms &amp; conditions</h3>
          </div>
          <div className="input-box button">
            <input type="Submit" defaultValue="Register Now" />
            <h3 style={{ color: "red" }}>
              {password === conPassword ? "" : "Passwords don't match"}
            </h3>
          </div>
          <div className="text">
            <h3>
              Already have an account? <Link to="/login">Login now</Link>
            </h3>
          </div>
        </form>

        <TruckAnimation />
      </div>
    </div>
  );
}
