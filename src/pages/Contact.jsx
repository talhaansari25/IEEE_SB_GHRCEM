import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../style.css";
import Footer from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    const showMenu = () => {
      document.getElementById("navLinks").style.right = "0";
    };
    const hideMenu = () => {
      document.getElementById("navLinks").style.right = "-200px";
    };
    window.showMenu = showMenu;
    window.hideMenu = hideMenu;
  }, []);

  useEffect(() => {
    document.title = "IEEE GHRCEM Contact ";
  }, []);

  return (
    <>
      <section className="sub-header" data-aos="fade-down">
        <nav>
          <Link to="/">
            <img src="Images/logo.png" alt="" />
          </Link>
          <div className="nav-links" id="navLinks">
            <i className="fa fa-times" onClick={() => window.hideMenu()}></i>
            <ul>
              <li><Link to="/">HOME</Link></li>
              <li><a href="/#team">TEAM</a></li>
              <li><Link to="/prizes">PRIZES</Link></li>
              <li><Link to="/events">EVENTS</Link></li>
              <li><a href="/#achievements">ACHIEVEMENTS</a></li>
              <li><Link to="/contact">CONTACT</Link></li>
            </ul>
          </div>
          <i className="fa fa-bars" onClick={() => window.showMenu()}></i>
        </nav>
        <h1 data-aos="zoom-in">Contact Us</h1>
      </section>

      <section className="location" data-aos="fade-up">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.798625014627!2d73.9725971!3d18.5733721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c38275a673c5%3A0x368b6a8fa28346d!2sG%20H%20RAISONI%20College%20OF%20ENGINEERING%20AND%20Management%2C%20PUNE!5e0!3m2!1sen!2sin!4v1712348034912!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

      <section className="contact-us">
        <div className="row">
          <div className="contact-col" data-aos="fade-right">
            <div>
              <i className="fa fa-home"></i>
              <span>
                <h5>GH Raisoni College of Engineering and Management</h5>
                <p>New Gate No. 1200, Domkhel Road, Wagholi, Pune 412207, Maharashtra, India.</p>
              </span>
            </div>

            <div>
              <i className="fa fa-phone"></i>
              <span>
                <h5>+91 809604787185</h5>
                <p>Call us for queries</p>
              </span>
            </div>

            <div>
              <a href="mailto:ieee_comp@ghrcem.raisoni.net" className="fa fa-envelope"></a>
              <span>
                <h5>ieee_comp@ghrcem.raisoni.net</h5>
                <p>Email us for queries</p>
              </span>
            </div>

            <div>
              <a href="https://www.linkedin.com/company/ieee-ghrcem/posts/?feedView=all" className="fa-brands fa fa-linkedin"></a>
              <span>
                <h5>@IEEE Student Branch GHRCEM</h5>
                <p>Connect with us on LinkedIn</p>
              </span>
            </div>

            <div>
              <a href="https://www.instagram.com/ieee_ghrcem_pune/" className="fa-brands fa fa-instagram"></a>
              <span>
                <h5>@ieee_ghrcem_pune</h5>
                <p>Follow us on Instagram</p>
              </span>
            </div>

            <div>
              <a href="https://www.facebook.com/ieee.ghrce/?locale=hi_IN" className="fa-brands fa fa-facebook"></a>
              <span>
                <h5>@IEEE SB G. H. Raisoni College of Engineering</h5>
                <p>Follow us on Facebook</p>
              </span>
            </div>

            <div>
              <a href="#" className="fa-brands fa fa-twitter"></a>
              <span>
                <h5>@ieee_ghrcem_pune</h5>
                <p>Follow us on Twitter</p>
              </span>
            </div>
          </div>

          <div className="contact-col" data-aos="fade-left">
            <iframe
              src="https://forms.gle/hthfcSvb95Ad4cWH9"
              width="100%"
              height="600"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              title="Google Form"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </section>

      <section className="footer" data-aos="zoom-in-up">
        <h1>Thanks for visit</h1>
        <div className="footer-intro" data-aos="fade-up">
          <p>
            Thank you for your interest in the IEEE Student Branch Club at GHRCEM! Whether you have a question, feedback, or would like to get involved, we're here to help.
            <br /> Connect with us on social media to stay updated on our latest events, initiatives, and announcements. Feel free to reach out to us using any of the following methods:
            <br />
          </p>
          <Link to="/join" target="_blank" id="cs" className="hero-btn" data-aos="zoom-in">JOIN US</Link>
        </div>
        <br />
        <p>© 2025 All Rights Reserved. Design & Developed by Talha Ansari</p>
      </section>
    </>
  );
};

export default Contact;
