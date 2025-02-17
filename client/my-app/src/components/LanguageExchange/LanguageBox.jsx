import React from "react";
import "../style.css";
import { Link } from "react-router-dom";
export default function LanguageBox({imgsrc,start,detail,description}) {
    return (
    <div className="box">
      <div className="image">
        <img src={imgsrc} alt="" />
      </div>
      <div className="content">
        <div className="icons">
          <Link to="#">
            {" "}
            <i className="fas fa-clock" /> {start}{" "}
          </Link>
          <Link to="#">
            {" "}
            <i className="fas fa-user" /> {detail}{" "}
          </Link>
        </div>
        <h3>{description}</h3>
        <Link to="#" className="btn">
          enroll
        </Link>
      </div>
    </div>
  );
}
