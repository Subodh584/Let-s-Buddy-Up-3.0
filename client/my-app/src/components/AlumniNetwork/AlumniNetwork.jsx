import React from "react";
import Header from "../Header";
import { Link } from "react-router-dom";
import SubHeading from "../SubHeading";
import { TimeControlledScroll } from "../Effects";
import Footer from "../Footer";
import img1 from "../../images/event calendar.png";
import img2 from "../../images/chat.png";
import img3 from "../../images/refer.png";
import img4 from "../../images/giving back.png";
export default function AlumniNetwork() {
  return (
    <>
      <TimeControlledScroll position={0} time={800} />
      <Header />
      <SubHeading name="Alimni Network"/>
      <section className="p2p">
        <div className="box">
          <img src={img1} alt="" />
          <h3>Events Calander</h3>
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
          <h3>Chat</h3>
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
          <h3>Referal</h3>
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
          <h3>giving back</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque,
            earum.
          </p>
          <Link to="/" className="btn">
            read more
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
}
