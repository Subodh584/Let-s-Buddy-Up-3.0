import React from "react";
import Header from "../Header";
import SubHeading from "../SubHeading";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import img1 from '../../images/hire.png';
import img2 from '../../images/good match making.png';
import img3 from '../../images/senior.png';
import img4 from '../../images/share.png'
import { TimeControlledScroll } from "../Effects";

export default function P2P() {
  return (
    <>
    <TimeControlledScroll position={0} time={800}/>
      <Header />
      <SubHeading name="P2P" />
      <section className="p2p">
        <div className="box">
          <img src={img1} alt="" />
          <h3>Instant Hire</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque,
            earum.
          </p>
          <Link to="/" className="btn">
            read more
          </Link>
        </div>
        <div className="box">
          <img src={img2} alt="" />
          <h3>instant Match making</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque,
            earum.
          </p>
          <Link to="/" className="btn">
            read more
          </Link>
        </div>
        <div className="box">
          <img src={img3} alt="" />
          <h3>senior mentorship</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque,
            earum.
          </p>
          <Link to="/" className="btn">
            read more
          </Link>
        </div>
        <div className="box">
          <img src={img4} alt="" />
          <h3>share</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque,
            earum.
          </p>
          <Link to="/" className="btn">
            read more
          </Link>
        </div>
      </section>
      <Footer/>
    </>
  );
}