import React from "react";
import Header from "../Header";
import SubHeading from "../SubHeading";
import { TimeControlledScroll } from "../Effects";
import Footer from "../Footer";

export default function ContactUs() {
  return (
    <>
      <TimeControlledScroll position={175} time={800} />
      <Header />
      <SubHeading name={"ContactUs"} />
      <section className="contact">
        <div className="icons-container">
          <div className="icons">
            <i className="fas fa-phone" />
            <h3>our number</h3>
            <p>+918318044545</p>
            <p>+919627720445</p>
          </div>
          <div className="icons">
            <i className="fas fa-envelope" />
            <h3>our email</h3>
            <p>sk3663@srmist.edu.in</p>
            <p>subodhchauhan695@gmail.com</p>
          </div>
          <div className="icons">
            <i className="fas fa-map-marker-alt" />
            <h3>our address</h3>
            <p>SRM KTR, Chennai, TamilNadu</p>
          </div>
        </div>
        <div className="row">
          <div className="formcontainer">
            <form action="">
              <h3>get in touch</h3>
              <input type="text" placeholder="your name" className="box" />
              <input type="number" placeholder="your number" className="box" />
              <input type="email" placeholder="your email" className="box" />
              <textarea
                name=""
                placeholder="your message"
                id=""
                cols={30}
                rows={10}
                defaultValue={""}
              />
              <input
                type="submit"
                defaultValue="send message"
                className="btn"
              />
            </form>
          </div>
          <div className="mapcontainer">
            <iframe
              className="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.2367871099286!2d80.04360012186623!3d12.822618586272204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f712b82a78d9%3A0xfdb944a3aee53831!2sSRM%20Institute%20of%20Science%20and%20Technology!5e1!3m2!1sen!2sin!4v1728837814374!5m2!1sen!2sin"
              title="SRM Institute Location Map"
              allowFullScreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
