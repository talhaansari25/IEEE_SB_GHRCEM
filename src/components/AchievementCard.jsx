import React from "react";
import '../style.css';

function AchievementCard({ imgSrc, title }) {
  return (
    <div className="achv-col" data-aos="flip-up" data-aos-duration="1000">
      <img src={imgSrc} alt={title} />
      <h3>{title}</h3>
    </div>
  );
}

export default AchievementCard;
