import React from "react";
import Header from "../Header";
import Home from "./Home";
import Category from "./Category";
import Footer from "../Footer";
import { TimeControlledScroll } from "../Effects";
export default function LandingPage() {
  return (
    <div className="LandingPage">
      <TimeControlledScroll position={75} time={800} />
      <Header />
      <Home />
      <Category />
      <Footer />
    </div>
  );
}