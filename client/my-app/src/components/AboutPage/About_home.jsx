import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import img1 from "../../images/final.svg";
import { TimeControlledScroll } from "../Effects";
import SubHeading from "../SubHeading";


export default function About_home() {
  return (

      <>
        {/* Scroll to the top over 1 second */}
        <TimeControlledScroll position={0} time={800} />

        <div>
          <Header />
          <SubHeading name="About" />

          <section className="about">
            <div className="image">
              <img src={img1} alt="" />
            </div>
            <div className="content">
              <h3>"Connecting Generations, Empowering Minds!"</h3>
              <p>
                Welcome to our educational platform, where connections transcend
                generations and knowledge flows freely between peers and seniors
                alike. Here, wisdom meets curiosity, and friendships blossom
                through shared learning journeys. Together, we bridge the gap
                between experience and enthusiasm, creating a vibrant community
                where every exchange is a chance to inspire, uplift, and grow.
                Join us on this path of discovery, where the bonds we forge and
                the lessons we learn are as timeless as the pursuit of knowledge
                itself.
              </p>
              <Link to="/" className="btn">
                learn more
              </Link>
            </div>
          </section>

          <Footer />
        </div>
      </>

  );
}
