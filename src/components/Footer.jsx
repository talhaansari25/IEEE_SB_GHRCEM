import React from "react";
import { Link } from "react-router-dom";
import "../style.css";

const Footer = () => {
  return (
    <section className="footer" data-aos="fade-up" data-aos-duration="1200">
      <h1 data-aos="fade-up" data-aos-delay="100">Thanks for visit</h1>
      
      <div className="footer-intro" data-aos="fade-up" data-aos-delay="300">
        <p>
          <br />
          Thank you for your interest in the IEEE Student Branch Club at GHRCEM!
          Whether you have a question, feedback, or would like to get involved, we're here to help.
          <br /> Connect with us on social media to stay updated on our latest events, initiatives,
          or you can contact us just by clicking on the contact us button.
          <br />
        </p>
        <br />
        <Link to="/contact" id="cs" className="hero-btn" data-aos="zoom-in" data-aos-delay="500">
          CONTACT US
          <br />
        </Link>
      </div>

      <div className="icons" data-aos="fade-up" data-aos-delay="700">
        <br />
        <a href="mailto:ieee_comp@ghrcem.raisoni.net" className="fa fa-envelope"></a>
        <a href="https://www.instagram.com/ieee_ghrcem_pune/" className="fa-brands  fa fa-instagram"></a>
        <a href="https://www.linkedin.com/company/ieee-ghrcem/posts/?feedView=all" className="fa-brands  fa fa-linkedin"></a>
        <a href="https://www.facebook.com/ieee.ghrce/?locale=hi_IN" className="fa-brands  fa fa-facebook"></a>
        <a href="" className="fa-brands  fa fa-twitter"></a>
      </div>

      <br />
      <p data-aos="fade-up" data-aos-delay="800">
        © 2025 All Rights Reserved. Design & Developed by Talha Ansari
      </p>
    </section>
  );
};

export default Footer;
  