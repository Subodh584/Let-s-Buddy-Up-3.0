import React from "react";
import { Link } from "react-router-dom";
export default function StudyGroupBox({imgsrc,name,year}) {
  return (
    <div className="box">
      <div className="image">
        <img src={imgsrc} alt="" />
        <div className="share">
          <Link to="/studygroup" className="fab fa-facebook-f" ></Link>
          <Link to="/studygroup" className="fab fa-twitter" ></Link>
          <Link to="/studygroup" className="fab fa-instagram" ></Link>
          <Link to="/studygroup" className="fab fa-linkedin" ></Link>
        </div>
      </div>
      <div className="content">
        <h3>{name}</h3>
        <span>{year}</span>
      </div>
    </div>
  );
}
