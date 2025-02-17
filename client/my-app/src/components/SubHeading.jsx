import React from "react";
import { Link } from "react-router-dom";
export default function SubHeading(prop) {
  return (
    <section className="heading">
      <h3>{prop.name}</h3>
      <div>
        {" "}
        <Link id="home" to="/">
          home &gt;&gt;
        </Link>{" "}
        {prop.name2?<Link to={`${prop.to}`} id="home">{prop.name+" >>"}</Link>:prop.name }{" "}
        {prop.name2}
      </div>
    </section>
  );
}