import React from "react";
import { Link } from "react-router-dom";
import "../style.css";
import "../section.css";



export default function EventPrizes() {
  return (
    <section id="ep" data-aos="fade-up" data-aos-duration="1000">
      <div className="ep-container">
        <div className="ep-wrapper">
          <div className="event" data-aos="fade-right" data-aos-delay="200">
            <Link to="/events" className="card-view">
              <div className="card-text">
                <i className="fas fa-user-group"></i>
                <h3 className="card-title">Events</h3>
                <p>Events conducted by IEEE GHRCEM throughout the years</p>
              </div>
            </Link>
          </div>

          <div className="prize" data-aos="fade-left" data-aos-delay="400">
            <Link to="/prizes" className="card-view">
              <div className="card-text">
                <i className="fas fa-trophy"></i>
                <h3 className="card-title">Prizes</h3>
                <p>Awards and Prizes received by our IEEE SB Students</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
