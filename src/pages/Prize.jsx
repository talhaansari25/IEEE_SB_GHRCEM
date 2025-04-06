import React from "react";
import { Link } from 'react-router-dom';
import "../style.css";

function Prize() {
  return (
    <div>
      <div className="overlay"></div>
      <nav className="nav">
        <Link to="/">
          <img id="lgo" src="Images/lgo.png" alt="" className="logo" />
        </Link>

        <ul className="menu desktop-menu">
          <li><Link to="/">HOME</Link></li>
          <li><a href="/#team">TEAM</a></li>
          <li><Link to="/prize">PRIZES</Link></li>
          <li><Link to="/event">EVENTS</Link></li>
          <li><a href="/#achievements">ACHIEVEMENTS</a></li>
          <li><Link to="/contact">CONTACT</Link></li>
        </ul>

        <i className="bi bi-list" id="toggle-menu"></i>
        <div className="mobile-menu">
          <i className="bi bi-x" id="close-btn"></i>
          <ul className="menu menu-items">
            <li className="menu-item">
              <Link to="/" className="hvr-underline-from-left item">HOME</Link>
            </li>
            <li className="menu-item">
              <a href="/#about" className="hvr-underline-from-left item">ABOUT</a>
            </li>
            <li className="menu-item">
              <a href="/#portfolio" className="hvr-underline-from-left item">PORTFOLIO</a>
            </li>
            <li>
              <a href="/#blogs" className="menu-item hvr-underline-from-left">ACHIEVEMENTS</a>
            </li>
            <li className="menu-item">
              <a href="/#skills" className="hvr-underline-from-left item">SKILLS</a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="container">
        <div className="wrapper">
          <div className="one">
            <div className="one-img">
              <img src="Images/Bb.jpg" alt="project-thumbnail" />
            </div>
            <div className="one-text">
              <h3 className="title">Blue Bit 2.0 Hackathon </h3>
              <p className="detail">
                Team Cyber Titans win Codechef's Blue Bit State Level Hackathon 2.0 sponsored by IEEE Pune developing AI-powered personalized education platform for students.
                <br />facilated by IEEE Pune Section Chair MR. ABHIJIT KHURPE.
              </p>
            </div>
          </div>

          <div className="two">
            <div className="two-img">
              <img src="Images/pm.jpg" alt="project-thumbnail" />
            </div>
            <div className="two-text">
              <h3 className="title">Greening the Planet Ideathon</h3>
              <p className="detail">
                Mr.Purvesh Mule, Nikhil Kamode, and Ganesh Hulle secure first prize in the Greening the Planet Ideathon by IEEE Pune Section and SICSR Student Branch Pune
              </p>
            </div>
          </div>

          <div className="three">
            <div className="three-img">
              <img src="Images/ag.jpg" alt="project-thumbnail" />
            </div>
            <div className="three-text">
              <h3 className="title">WIE AG's Poster Making Competition</h3>
              <p className="detail">
                Ms. Amruta Gulave wins first prize in WIE AG's 'Show Your Culture' Poster Making Competition, IEEE Pune Section.
              </p>
            </div>
          </div>

          <div className="four">
            <div className="four-img">
              <img src="Images/mp.jpg" alt="project-thumbnail" />
            </div>
            <div className="four-text">
              <h3 className="title">WIE AG's Performance Competition </h3>
              <p className="detail">
                Mr. Meet Patil wins first prize in WIE AG's 'Show Your Culture' Performance Competition (Poems, Singing, Dancing), IEEE Pune Section.
              </p>
            </div>
          </div>
        </div>
      </div>

      <script src="js/uiux.js"></script>
    </div>
  );
}

export default Prize;