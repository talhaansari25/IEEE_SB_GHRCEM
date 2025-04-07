import React from "react";
import { Link } from "react-router-dom";
import "../style.css";

const JoinSection = () => {
  return (
    <section className="form" data-aos="zoom-in-up" data-aos-duration="1200">
      <h1>Be Part of the IEEE SB GHRCEM Family</h1>
      <Link to="/join" className="hero-btn" data-aos="fade-up" data-aos-delay="300">
        JOIN US
      </Link>
    </section>
  );
};

export default JoinSection;
