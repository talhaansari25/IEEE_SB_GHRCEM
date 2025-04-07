import React from "react";
import AchievementCard from "./AchievementCard";
import '../style.css';

function Achievements() {
  const achievementData = [
    {
      imgSrc: "Images/BE.jpg",
      title: "Best Emerging IEEE Student Branch Award - 2018",
    },
    {
      imgSrc: "Images/BBC.jpg",
      title: "Best Branch Counselor of the Year Award 2020",
    },
    {
      imgSrc: "Images/bsv.jpg",
      title: "Best Student Volunteer of the Year Award 2020",
    },
    {
      imgSrc: "Images/bpv.jpg",
      title: "Best Professional Volunteer of the Year Award 2021",
    },
    {
      imgSrc: "Images/av.jpg",
      title: "Appreciation for mentoring a project sponsored by IEEE Pune Section 2021",
    },
    {
      imgSrc: "Images/bwe.jpg",
      title: "Best Women in Engineering Award 2022",
    },
  ];

  return (
    <section id="achievements" className="achv">
      <h1>Awards & Achievements</h1>
      <div className="achv-intro">
        <p>
          Awards and Achievements of IEEE Student Branch GHRCEM received by branch counsellor
        </p>
      </div>
      <div className="row">
        {achievementData.map((achv, index) => (
          <AchievementCard key={index} imgSrc={achv.imgSrc} title={achv.title} />
        ))}
      </div>
    </section>
  );
}

export default Achievements;
