import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";



function Header() {
  const [isActive, setIsActive] = useState(false);

  const navigate=useNavigate();
  function handleClick() {
    setIsActive(!isActive);
  }

  function handleLogoutClick(){
    localStorage.removeItem("UserName");
    localStorage.removeItem("UserId");
    navigate("/login");
  }

  return (
    <div className="headcontainer">
      <header className="header">
        <Link to="/" className="logo">
          {" "}
          <i className="fas fa-graduation-ca" />
          Let's Buddy Up
        </Link>
        <div id="menu-btn" className="fas fa-bars" onClick={handleClick} />
        <nav className={`navbar ${isActive ? "active" : ""}`}>
          <ul>
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="/about-home">about</Link>
            </li>
            <li>
              <Link to="#">Funzone</Link>
              <ul>
                <li>
                  <Link to="/p2p">P2P</Link>
                </li>
                <li>
                  <Link to="/alumninetwork">Alumni Networks</Link>
                </li>
                <li>
                  <Link to="/">Upcoming Events</Link>
                </li>
                <li>
                  <Link to="/market">Marketplace</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="#">Studyzone</Link>
              <ul>
                <li>
                  <Link to="/studygroups">Studygroups</Link>
                </li>
                <li>
                  <Link to="/redirection">Mentorship</Link>
                </li>
                <li>
                  <Link to="/languageexchange">Language Exchange</Link>
                </li>
                <li>
                  <Link to="/">Anonymous Q&amp;A</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/contactus">contact</Link>
            </li>
            <li>
              <button onClick={handleLogoutClick}>logOut</button>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;