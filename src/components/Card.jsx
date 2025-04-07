// components/Card.jsx
import React from "react";
import "../style.css";

function Card({ image, title, description }) {
  return (
    <div className="one">
      <div className="one-img">
        <img src={image} alt="project-thumbnail" />
      </div>
      <div className="one-text">
        <h3 className="title">{title}</h3>
        <p className="detail">{description}</p>
      </div>
    </div>
  );
}

export default Card;
