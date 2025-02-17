import React from "react";
import "../style.css";
import { Link } from "react-router-dom";
import img1 from "../../images/user.png";
import img2 from "../../images/podium.png";
import img3 from "../../images/book.png";
import img4 from "../../images/hacker.png";
import img5 from "../../images/dashboard (1).png";
export default function Category() {
  return (
    <section className="category">
      <Link to="/" className="box">
        <img src={img5} alt="" />
        <h3>My DashBoard</h3>
      </Link>
      <Link to="/" className="box">
        <img src={img1} alt="" />
        <h3>Profile</h3>
      </Link>
      <Link to="/" className="box">
        <img src={img2} alt="" />
        <h3>Leaderboard</h3>
      </Link>
      <Link to="/" className="box">
        <img src={img3} alt="" />
        <h3>about us</h3>
      </Link>
      <Link to="/" className="box">
        <img src={img4} alt="" />
        <h3>hackathon Hub</h3>
      </Link>
    </section>
  );
}
