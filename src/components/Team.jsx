// src/components/Team.jsx
import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import TeamMember from './TeamMember';
import '../style.css';





export default function Team() {
  return (
    <section id="team" className="team">
      <h1>Meet Our Core Team Members</h1>
      <div className="team-container">

        <div className="team-row">
          <TeamMember
            name="Ayan Shaikh"
            role="BRANCH CHAIR"
            image="/Images/ch.png"
            linkedin="https://www.linkedin.com/in/ayan-shaikh8805/"
          />
          <TeamMember
            name="Sumeet Gupta"
            role="VICE CHAIR"
            image="/Images/Sumeet Gupta.jpg"
            linkedin="https://www.linkedin.com/in/sumeet-gupta-ba2216209/"
          />
          <TeamMember
            name="Sakshi Kute"
            role="TREASURER"
            image="/Images/Sakshi Kute (1).jpg"
            linkedin="https://www.linkedin.com/in/sakshi-kute-159072287/"
          />
        </div>

        <div className="team-row">
          <TeamMember
            name="Shruti Tiwari"
            role="SECRETARY"
            image="/Images/shr.jpg"
            linkedin="https://www.linkedin.com/in/shrutiptiwari/"
          />
          <TeamMember
            name="Rudraksh Raut"
            role="WEB MASTER 1"
            image="/Images/Rudraksh Raut .jpg"
            linkedin="https://www.linkedin.com/in/rudraksh-raut/"
          />
          <TeamMember
            name="Talha Ansari"
            role="WEB MASTER 2"
            image="/Images/talha.jpg"
            linkedin="https://www.linkedin.com/in/talha-ansari-22189b1bb/"
          />
        </div>

      </div>
    </section>
  );
}

