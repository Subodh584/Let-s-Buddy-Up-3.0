import React from "react";

import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <section className="footer">
      <div className="box-container">
        <div className="box">
          <h3>explore</h3>
          <Link to="/" className="link">
            <i className="fas fa-arrow-right" /> home
          </Link>
          <Link to="/about" className="link">
            <i className="fas fa-arrow-right" /> about
          </Link>
          <Link
            to="https://devfolio.co/discover"
            className="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-arrow-right" /> hackathon hub
          </Link>
          <Link to="/course-2" className="link">
            <i className="fas fa-arrow-right" /> market
          </Link>
          <Link
            to="https://www.quora.com/"
            className="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-arrow-right" /> Q&amp;A
          </Link>
          <Link to="/teachers" className="link">
            <i className="fas fa-arrow-right" /> seniors
          </Link>
          <Link to="/blog" className="link">
            <i className="fas fa-arrow-right" /> blog
          </Link>
          <Link to="/contact" className="link">
            <i className="fas fa-arrow-right" /> contact
          </Link>
        </div>
        <div className="box">
          <h3>categories</h3>
          <Link to="/course-1" className="link">
            <i className="fas fa-arrow-right" /> P2P
          </Link>
          <Link to="/course-1-copy" className="link">
            <i className="fas fa-arrow-right" /> Alumni Networks
          </Link>
          <Link to="/course-3" className="link">
            <i className="fas fa-arrow-right" /> Campus Events
          </Link>
          <Link
            to="https://www.quora.com/"
            className="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-arrow-right" /> Q&amp;A
          </Link>
          <Link to="/teachers" className="link">
            <i className="fas fa-arrow-right" /> Study Groups
          </Link>
          <Link to="/blog" className="link">
            <i className="fas fa-arrow-right" /> Mentorship
          </Link>
          <Link to="/blog-copy" className="link">
            <i className="fas fa-arrow-right" /> Language Exchange
          </Link>
        </div>
        <div className="box">
          <h3>quick links</h3>
          <Link to="/Idea/profile-picture/index.html" className="link">
            <i className="fas fa-arrow-right" /> my account
          </Link>
          <Link
            to="https://www.surveymonkey.com/"
            className="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-arrow-right" /> feedback
          </Link>
          <Link to="#" className="link">
            <i className="fas fa-arrow-right" /> help center
          </Link>
          <Link to="#" className="link">
            <i className="fas fa-arrow-right" /> certificates
          </Link>
          <Link to="#" className="link">
            <i className="fas fa-arrow-right" /> newsletter
          </Link>
        </div>
        <div className="box">
          <h3>follow us</h3>
          <Link
            to="https://www.facebook.com/"
            className="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook-f" /> facebook
          </Link>
          <Link
            to="https://twitter.com/"
            className="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter" /> twitter
          </Link>
          <Link
            to="https://www.linkedin.com/"
            className="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin" /> linkedin
          </Link>
          <Link
            to="https://www.instagram.com/"
            className="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram" /> instagram
          </Link>
          <Link
            to="https://www.pinterest.com/"
            className="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-pinterest" /> pinterest
          </Link>
          <Link
            to="https://www.github.com/"
            className="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github" /> github
          </Link>
        </div>
      </div>
      <div className="credit">
        created by <span>Team Fanatic</span> | all rights reserved!
      </div>
    </section>
  );
}
