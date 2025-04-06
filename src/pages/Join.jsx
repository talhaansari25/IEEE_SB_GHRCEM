// src/pages/Join.jsx
import React from "react";
import "../style.css";

import { Link } from "react-router-dom";
import { useEffect } from "react";


const Join = () => {
  return (
    <>
      <head>
        <link rel="icon" href="Images/lg.png" type="image/x-icon" />
        <style>{`
          body {
            margin: 0;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #fdfdfd;
          }

          .form-benefit-section {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            gap: 30px;
            padding: 40px;
            flex-wrap: wrap;
          }

          .form-column {
            flex: 1;
            min-width: 350px;
            max-width: 45%;
            background-color: #f4f0fc;
            border-radius: 8px;
            padding: 10px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          }

          .benefit-column {
            flex: 1;
            max-width: 50%;
            padding: 20px;
            color: #333;
            line-height: 1.6;
          }

          .benefit-column h2 {
            color: #4444dd;
            font-size: 28px;
            font-weight: bold;
          }

          .benefit-column h2 span {
            color: #777;
            font-size: 20px;
          }

          .benefit-column p {
            margin-top: 20px;
            font-size: 16px;
          }
        `}</style>
      </head>

      <section className="form-benefit-section">
        <div className="form-column">
          <iframe
            src="https://forms.gle/hthfcSvb95Ad4cWH9"
            width="100%"
            height="800"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            allowFullScreen
            title="Join Form"
          ></iframe>
        </div>

        <div className="benefit-column">
          <h2>
            BENEFITS <br />
            <span>OF JOINING IEEE GHRCEM!!</span>
          </h2>
          <p>
            IEEE Membership – More Than Just a Title  
            <br /><br />
            IEEE isn’t just an organization; it’s a community of innovators, thinkers, and problem-solvers. As a member, you get access to global conferences, top-tier research, exclusive workshops, and technical training that put you ahead of the curve. Your @ieee.org email ID isn’t just an address—it’s an entry pass to a network of industry leaders, researchers, and like-minded peers across the world.
            <br /><br />
            Competitions like IEEE Xtreme aren’t just coding challenges; they’re a chance to prove yourself against the best. Discounts on books, journals, certifications, and electronics make continuous learning more accessible. And with the IEEE Xplore Digital Library, you have a treasure trove of research at your fingertips.
            <br /><br />
            Why Be a Part of IEEE?
            <br /><br />
            Because the real world isn’t about just studying—it’s about <strong>creating, innovating, and leading.</strong> Whether you want to build the next breakthrough in AI, design cutting-edge hardware, or push the limits of robotics and IoT, IEEE gives you the resources and support to turn ideas into reality.
            <br /><br />
            With mentorship from experts, funding for your projects, and a global stage to showcase your skills, IEEE isn’t just about learning—it’s about <strong>making an impact</strong>. Plus, let’s be honest—being part of a global tech movement is just cool.
            <br /><br />
            Members enjoy reduced rates on many products and services including books, eBooks, journals, conferences, and more. Access to the IEEE Xplore Library and over 700,000 documents ensures you’re never out of learning resources.
            <br /><br />
            If You Dream Big, IEEE is Where You Belong!
            <br /><br />
            Be a part of something bigger. Join IEEE and start shaping the future today.
          </p>
        </div>
      </section>
    </>
  );
};

export default Join;
