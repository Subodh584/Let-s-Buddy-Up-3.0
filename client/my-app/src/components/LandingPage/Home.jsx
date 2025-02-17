import React from "react";
import "../style.css";
import img1 from "../../images/final.svg";

import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="homecontainer">
      <section className="home">
        <div className="image">
          <img src={img1} alt="" />
        </div>
        <div className="content">
          <h3>Bridging Generations, Empowering Futures.</h3>
          <p>
            By leveraging the wisdom of the past to guide the aspirations of the
            future, we empower individuals to reach their full potential and
            create a brighter tomorrow through knowledge exchange and support.
            Join us in building bridges that span generations and pave the way
            for lifelong success.
          </p>
          <Link to="/about-home" className="btn">
            About Us
          </Link>
        </div>
      </section>
    </div>
  );
}
