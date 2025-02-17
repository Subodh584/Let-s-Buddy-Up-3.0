import React from "react";
export default function TruckAnimation() {
  return (
    <div>
      <div className="animation-container">
        <div className="lightning-container">
          <div className="lightning white" />
          <div className="lightning red" />
        </div>
        <div className="boom-container">
          <div className="shape circle big white" />
          <div className="shape circle white" />
          <div className="shape triangle big yellow" />
          <div className="shape disc white" />
          <div className="shape triangle blue" />
        </div>
        <div className="boom-container second">
          <div className="shape circle big white" />
          <div className="shape circle white" />
          <div className="shape disc white" />
          <div className="shape triangle blue" />
        </div>
      </div>
      <div className="loop-wrapper">
        <div className="mountain" />
        <div className="hill" />
        <div className="tree" />
        <div className="tree" />
        <div className="tree" />
        <div className="rock" />
        <div className="truck" />
        <div className="wheels" />
      </div>
    </div>
  );
}
