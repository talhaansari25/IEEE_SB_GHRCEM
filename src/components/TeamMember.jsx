import React from "react";
import '../style.css';

function TeamMember({ name, role, image, linkedin }) {
  return (
    <div className="team-col" data-aos="fade-up" data-aos-delay="100">
      <div className="image-wrapper" data-aos="zoom-in">
        <a href={linkedin} target="_blank" rel="noopener noreferrer">
          <img src={image} alt={name} />
          <div className="layer"><h3>{role}</h3></div>
        </a>
      </div>
      <div className="aa" data-aos="fade-up" data-aos-delay="200">
        <h3 className="name">{name}</h3>
      </div>
    </div>
  );
}

export default TeamMember;
