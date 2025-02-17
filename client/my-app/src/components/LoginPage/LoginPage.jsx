import React from "react";
import "./LoginPage.css";
import TruckAnimation from "../Animations/TruckAnimation";
import LoginForm from "./LoginForm";
function LoginPage() {
  return (
    <div className="Page">
      <div className="loginpage">
        <div className="background">
          <div className="shape" />
          <div className="shape" />
        </div>
        <LoginForm />
      </div>
      <TruckAnimation />
    </div>
  );
}

export default LoginPage;
