import React from "react";
import "../style.css";

function TestimonialCard({ imgSrc, quote, name }) {
  return (
    <div className="testimonial-col">
      <img src={imgSrc} alt={name} />
      <div>
        <p>"{quote}"</p>
        <h3>{name}</h3>
      </div>
    </div>
  );
}

export default TestimonialCard;
