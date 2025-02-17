import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [canLogin, setCanLogin] = useState(false);
  const [loginAttempted, setLoginAttempted] = useState(false);
  const [userName, setUserName] = useState("");
  const [userId, setUserId] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const userInfo = localStorage.getItem("UserName");
    if (userInfo) {
      navigate("/");
    } else if (canLogin) {
      localStorage.setItem("UserName", userName);
      localStorage.setItem("UserId",userId);
      navigate("/");
    }
  }, [canLogin, navigate, userName]);

  async function postTest(e) {
    e.preventDefault();
    const data = {
      email: email,
      password: pass
    };
    try {
      const response = await axios.post("http://localhost:3000/login", data);
      setCanLogin(response.data.canLogin);
      setUserName(response.data.name);
      setUserId(response.data.userId);
      setLoginAttempted(true);
    } catch (error) {
      console.log(error.message);
    }
  }

  function handleEmailInput(event) {
    setEmail(event.target.value);
  }

  function handlePasswordInput(event) {
    setPass(event.target.value);
  }

  return (
    <form id="LoginForm">
      <h3>Let's Buddy Up</h3>

      <label htmlFor="username">Username</label>
      <input
        className="LoginInput"
        type="email"
        placeholder="Email or Phone"
        id="username"
        onChange={handleEmailInput}
      />

      <label htmlFor="password">Password</label>
      <input
        className="LoginInput"
        type="password"
        placeholder="Password"
        id="password"
        onChange={handlePasswordInput}
      />

      <Link onClick={postTest}>
        <p>Log In</p>
      </Link>
      {loginAttempted && !canLogin ? (
        <div id="wrngcrds">Wrong Credentials</div>
      ) : (
        <></>
      )}

      <div className="social">
        <Link to="/signup">
          <div>New User?</div>
        </Link>
      </div>
    </form>
  );
}
