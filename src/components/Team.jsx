import React from 'react';
import TeamMember from './TeamMember';
import '../style.css';

const teamData = [
  {
    name: "Ayan Shaikh",
    role: "BRANCH CHAIR",
    image: "/Images/ch.png",
    linkedin: "https://www.linkedin.com/in/ayan-shaikh8805/"
  },
  {
    name: "Sumeet Gupta",
    role: "VICE CHAIR",
    image: "/Images/Sumeet Gupta.jpg",
    linkedin: "https://www.linkedin.com/in/sumeet-gupta-ba2216209/"
  },
  {
    name: "Sakshi Kute",
    role: "TREASURER",
    image: "/Images/Sakshi Kute (1).jpg",
    linkedin: "https://www.linkedin.com/in/sakshi-kute-159072287/"
  },
  {
    name: "Shruti Tiwari",
    role: "SECRETARY",
    image: "/Images/shr.jpg",
    linkedin: "https://www.linkedin.com/in/shrutiptiwari/"
  },
  {
    name: "Rudraksh Raut",
    role: "WEB MASTER 1",
    image: "/Images/Rudraksh Raut .jpg",
    linkedin: "https://www.linkedin.com/in/rudraksh-raut/"
  },
  {
    name: "Talha Ansari",
    role: "WEB MASTER 2",
    image: "/Images/talha.jpg",
    linkedin: "https://www.linkedin.com/in/talha-ansari-22189b1bb/"
  }
];

export default function Team() {
  return (
    <section id="team" className="team">
      <h1>Meet Our Core Team Members</h1>
      <div className="team-container">
        {/* Create team rows dynamically: 3 per row */}
        {[0, 1].map(rowIndex => (
          <div className="team-row" key={rowIndex}>
            {teamData
              .slice(rowIndex * 3, rowIndex * 3 + 3)
              .map((member, index) => (
                <TeamMember
                  key={index}
                  name={member.name}
                  role={member.role}
                  image={member.image}
                  linkedin={member.linkedin}
                />
              ))}
          </div>
        ))}
      </div>
    </section>
  );
}
