import React from "react";
import { Link } from "react-router-dom";
import "../style.css";


function Event() {
  return (
    <>
      <div className="overlay"></div>
      <nav className="nav">
        <Link to="/">
          <img id="lgo" src="Images/lgo.png" alt="" className="logo" />
        </Link>

        <ul className="menu desktop-menu">
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/#team">TEAM</Link></li>
          <li><Link to="/prize">PRIZES</Link></li>
          <li><Link to="/events">EVENTS</Link></li>
          <li><Link to="/#achievements">ACHIEVEMENTS</Link></li>
          <li><Link to="/contact">CONTACT</Link></li>
        </ul>

        {/* Toggle menu screen */}
        <i className="bi bi-list" id="toggle-menu"></i>
        <div className="mobile-menu">
          <i className="bi bi-x" id="close-btn"></i>
          <ul className="menu menu-items">
            <li className="menu-item">
              <Link to="/" className="hvr-underline-from-left item">HOME</Link>
            </li>
            <li className="menu-item">
              <Link to="/#about" className="hvr-underline-from-left item">ABOUT</Link>
            </li>
            <li className="menu-item">
              <Link to="/#portfolio" className="hvr-underline-from-left item">PORTFOLIO</Link>
            </li>
            <li>
              <Link to="/#blogs" className="menu-item hvr-underline-from-left">ACHIEVEMENTS</Link>
            </li>
            <li className="menu-item">
              <Link to="/#skills" className="hvr-underline-from-left item">SKILLS</Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className="container">
        <div className="wrapper">
          <div className="one">
            <div className="one-img">
              <img src="Images/iv.png" alt="project-thumbnail" />
            </div>
            <div className="one-text">
              <h3 className="title">INDUSTRIAL VISIT</h3>
              <p className="detail">
                Topic: ADVIT Lab Visit at Hinjewadi, Pune
                <br /> 13th JULY 2023
              </p>
            </div>
          </div>

          <div className="two">
            <div className="two-img">
              <img src="Images/ws.jpg" alt="project-thumbnail" />
            </div>
            <div className="two-text">
              <h3 className="title">WORKSHOP</h3>
              <p className="detail">
                Topic: Workshop On Artificial Intelligence In Healthcare , GHRCEM Pune
                <br /> 20th OCTOBER 2023
              </p>
            </div>
          </div>

          <div className="three">
            <div className="three-img">
              <img src="Images/cb.png" alt="project-thumbnail" />
            </div>
            <div className="three-text">
              <h3 className="title">CELEBRATION</h3>
              <p className="detail">
                IEEE Day 2023 celebration at GHRCEM Pune with Branch Counselor DR.SIMRAN KHIANI MA'AM.
                <br />14th OCTOBER 2023
              </p>
            </div>
          </div>

          <div className="four">
            <div className="four-img">
              <img src="Images/wo.jpg" alt="project-thumbnail" />
            </div>
            <div className="four-text">
              <h3 className="title">WORSHOP</h3>
              <p className="detail">
                Topic: Developing Real Time Applications Using IOT And Machine Learning
                <br />24th - 28th JULY 2023
              </p>
            </div>
          </div>

          <div className="one">
            <div className="one-img">
              <img src="Images/dr.jpg" alt="project-thumbnail" />
            </div>
            <div className="one-text">
              <h3 className="title">MEMBERSHIP DRIVE</h3>
              <p className="detail">
                Topic: IEEE Student Membership Drive by MR. RAKSHIT JAIN (SSR IEEE PUNE SECTION ) at GHRCEM Pune
                <br /> 30th JANUARY 2024
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Local JS file */}
      <script src="js/uiux.js"></script>
    </>
  );
}

export default Event;
