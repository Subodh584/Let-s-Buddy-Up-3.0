import React from "react";
import "../style.css";
import { Link } from "react-router-dom";
import { TimeControlledScroll } from "../Effects";
import Header from "../Header";
import SubHeading from "../SubHeading";
import Footer from "../Footer";

export default function BuyOrSellPage() {
  return (
    <>
      <TimeControlledScroll position={0} time={800} />
      <Header />
      <SubHeading name="Marketplace" />
      <section className="market">
        <div className="buySellContainer">
          <Link to="/buy">
            <div className="buyBox">
              <h2>Buy</h2>
            </div>
          </Link>
          <Link to="/sell">
            <div className="sellBox">
              <h2>Sell</h2>
            </div>
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
}
