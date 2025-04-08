import React from "react";
import { Link } from "react-router-dom";
import "../style.css";
import "../section.css";

export default function EventPrizes() {
  const eventPrizeData = [
    {
      id: "event",
      link: "/events",
      iconClass: "fas fa-user-group",
      title: "Events",
      description: "Events conducted by IEEE GHRCEM throughout the years",
      animation: {
        type: "fade-right",
        delay: "200"
      }
    },
    {
      id: "prize",
      link: "/prizes",
      iconClass: "fas fa-trophy",
      title: "Prizes",
      description: "Awards and Prizes received by our IEEE SB Students",
      animation: {
        type: "fade-left",
        delay: "400"
      }
    }
  ];

  return (
    <section id="ep" data-aos="fade-up" data-aos-duration="1000">
      <div className="ep-container">
        <div className="ep-wrapper">
          {eventPrizeData.map((item) => (
            <div
              key={item.id}
              className={item.id}
              data-aos={item.animation.type}
              data-aos-delay={item.animation.delay}
            >
              <Link to={item.link} className="card-view">
                <div className="card-text">
                  <i className={item.iconClass}></i>
                  <h3 className="card-title">{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
