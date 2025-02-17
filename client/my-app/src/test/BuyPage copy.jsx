import React from "react";
import Header from "../components/Header";
import SubHeading from "../components/SubHeading";
import Footer from "../components/Footer";
import img1 from "../images/fbook.png";
import img2 from "../images/felectronics.png";
import img3 from "../images/store.png";
import img4 from "../images/fticket.png";
import img5 from "../images/fpersonal.png";
import img6 from "../images/fclothes-rack.png";
import { Link } from "react-router-dom";
import { TimeControlledScroll } from "../components/Effects";
export default function BuyPage54() {
  return (
    <>
      <TimeControlledScroll position={0} time={800} />
      <Header />
      <SubHeading name="Marketplace" />
      <section className="market">


        <div className="box">
          <div className="image">
            <img src={img1} alt="" />
          </div>
          <div className="content">
            <span>Books</span>
            <h3>Buy exclusive used books at low price.</h3>
            <Link to="#" className="btn">
              Visit now
            </Link>
            <div className="icons">
              <Link to="#">
                {" "}
                <i className="fas fa-boo" /> 239+ available{" "}
              </Link>
              <Link to="#">
                {" "}
                <i className="fas fa-cloc" /> starts from Rs. 199{" "}
              </Link>
            </div>
          </div>
        </div>



        <div className="box">
          <div className="image">
            <img src={img2} alt="" />
          </div>
          <div className="content">
            <span>Electronics</span>
            <h3>Used Electronics to make your life easier. </h3>
            <Link to="#" className="btn">
              visit now
            </Link>
            <div className="icons">
              <Link to="#">
                {" "}
                <i className="fas fa-bok" /> 200+ devices{" "}
              </Link>
              <Link to="#">
                {" "}
                <i className="fas fa-clck" /> strarts from Rs. 1999{" "}
              </Link>
            </div>
          </div>
        </div>




        <div className="box">
          <div className="image">
            <img src={img6} alt="" />
          </div>
          <div className="content">
            <span>Clothings</span>
            <h3>impress your peers.</h3>
            <Link to="#" className="btn">
              visit now
            </Link>
            <div className="icons">
              <Link to="#">
                {" "}
                <i className="fasfa-book" /> 1130+ designs available{" "}
              </Link>
              <Link to="#">
                {" "}
                <i className="fas a-clock" /> starts from rs. 699{" "}
              </Link>
            </div>
          </div>
        </div>




        <div className="box">
          <div className="image">
            <img src={img5} alt="" />
          </div>
          <div className="content">
            <span>Personal Care</span>
            <h3>stay healty and fit.</h3>
            <Link to="#" className="btn">
              visit now
            </Link>
            <div className="icons">
              <Link to="#">
                {" "}
                <i className="fas fa-ook" /> 98+ beauty Products{" "}
              </Link>
              <Link to="#">
                {" "}
                <i className="fas fa-lck" /> starts from rs. 119{" "}
              </Link>
            </div>
          </div>
        </div>





        <div className="box">
          <div className="image">
            <img src={img4} alt="" />
          </div>
          <div className="content">
            <span>Tickets</span>
            <h3>grab your seat to the selling shows now!</h3>
            <Link to="#" className="btn">
              visit now
            </Link>
            <div className="icons">
              <Link to="#">
                {" "}
                <i className="fas fa-bok" /> 37+ fest Tickets{" "}
              </Link>
              <Link to="#">
                {" "}
                <i className="fas fa-clck" /> starts from Rs. 449{" "}
              </Link>
            </div>
          </div>
        </div>





        <div className="box">
          <div className="image">
            <img src={img3} alt="" />
          </div>
          <div className="content">
            <span>Store</span>
            <h3>Everything else is in here.</h3> <br />
            <Link to="#" className="btn">
              visit now
            </Link>
            <div className="icons">
              <Link to="#">
                {" "}
                <i className="fas fa-ook" /> 1256+ items{" "}
              </Link>
              <Link to="#">
                {" "}
                <i className="fas fa-cock" /> starts from Rs. 299{" "}
              </Link>
            </div>
          </div>
        </div>




      </section>
      <Footer />
    </>
  );
}
