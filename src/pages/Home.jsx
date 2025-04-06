import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../style.css";

function Home() {
  useEffect(() => {
    setTimeout(() => {
      document.getElementById("preloader").style.display = "none";
    }, 1000);
  }, []);

  const showMenu = () => {
    document.getElementById("navLinks").style.right = "0";
  };

  const hideMenu = () => {
    document.getElementById("navLinks").style.right = "-200px";
  };

  return (
    <>
      <div id="preloader">
        <div className="loader">
          <img src="/Images/logo.png" alt="logo" className="loader-logo" />
        </div>
      </div>

      <section className="header">
        <nav>
          <Link id="logoo" to="/">
            <img src="/Images/logo.png" alt="" />
          </Link>
          <div className="nav-links" id="navLinks">
            <i className="fa fa-times" onClick={hideMenu}></i>
            <ul>
              <li><Link to="/">HOME</Link></li>
              <li><a href="#team">TEAM</a></li>
              <li><Link to="/prize">PRIZES</Link></li>
              <li><Link to="/events">EVENTS</Link></li>
              <li><a href="#achievements">ACHIEVEMENTS</a></li>
              <li><Link to="/contact">CONTACT</Link></li>
            </ul>
          </div>
          <i className="fa fa-bars" onClick={showMenu}></i>
        </nav>

        <div className="text-box">
          <h3 className="wel">Welcome to</h3>
          <h1>IEEE Student Branch</h1>
          <p>GH RAISONI COLLEGE OF ENGINEERING AND MANAGEMENT, PUNE.</p>
          <a href="#about" className="hero-btn">know More</a>
        </div>
      </section>

      <section id="about" className="ab">
        <div className="ab-intro">
          <h1>About IEEE SB GHRCEM</h1>
          <p>
          Welcome to the IEEE Student Branch GHRCEM, a vibrant community of aspiring engineers and technology enthusiasts
        at G. H. Raisoni College of Engineering & Management (GHRCEM). Established with the mission of fostering
        innovation, collaboration, and professional development, our club serves as a platform for students to explore
        their interests in various fields of engineering and technology.
        <br />
        <br/>
        At IEEE GHRCEM, we believe in the power of knowledge-sharing and hands-on learning experiences. Through a
        diverse range of activities and events, we aim to provide our members with opportunities to expand their
        technical skills, network with industry professionals, and make a positive impact on their communities
        <br/>
        <br/>
        Our club is affiliated with the Institute of Electrical and Electronics Engineers (IEEE), the world's largest
        technical professional organization dedicated to advancing technology for the benefit of humanity. As part of
        the IEEE community, we have access to a wealth of resources, including publications, conferences, and
        professional development opportunities, which we leverage to enhance the educational experience of our members.
        <br/>
        <br/>
        Join us as we embark on a journey of discovery, creativity, and excellence. Together, we'll shape the future of
        technology and make a difference in the world.
        <br/>
        <br/>
        Connect with us on social media and stay updated on our latest events, initiatives, and opportunities for
        involvement.
          </p>
        </div>
        <div className="gallery">
          <h1> Gallery Section </h1>
        </div>
      </section>

      <section className="faculty">
        <h1 id="bc">Meet Our Branch Counselor</h1>
        <div className="adv">
          <div className="sim">
            <img src="/Images/sk.jpeg" alt="Branch Counselor" />
          </div>
          <div className="wr">
          <p><strong>Dr. Simran Khiani Ma'am</strong> is an esteemed member of our academic community, serving as the
          Counselor for the IEEE Student Branch GHRCEM.
          <br/><br/>Ma'am brings invaluable insight and guidance to our student branch club. Her dedication to fostering a
          culture of innovation and excellence inspires our members to reach new heights in their academic and
          professional pursuits.
          <br/><br/>IEEE GHRCEM will be essential to the global technical community and to technical professionals
          everywhere, and be universally recognized for the contributions of technology and of technical professionals
          in improving global conditions.
          <br/><br/> We are honored to have Dr. Simran Khiani Ma'am as our counselor, guiding us towards success in our
          journey of technological exploration and advancement.
        </p>
          </div>
        </div>
      </section>

      <section id="team" className="team">
        <h1>Meet Our Core Team Members</h1>
        <div className="team-container">
          <div className="team-row">
            <div className="team-col">
              <div className="image-wrapper">
                <a href="https://www.linkedin.com/in/ayan-shaikh8805/" target="_blank" rel="noopener noreferrer">
                  <img src="/Images/ch.png" alt="Ayan Shaikh" />
                  <div className="layer"><h3>BRANCH CHAIR</h3></div>
                </a>
              </div>
              <div className="aa"><h3 className="name">Ayan Shaikh</h3></div>
            </div>
          </div>
        </div>
      </section>

      <section id="ep">
        <div className="ep-container">
          <div className="ep-wrapper">
            <div className="event">
              <Link to="/events" className="card-view">
                <div className="card-text">
                  <h3 className="card-title">Events</h3>
                  <p>Some of the events conducted by IEEE GHRCEM throughout the years</p>
                </div>
              </Link>
            </div>

            <div className="prize">
              <Link to="/prize" className="card-view">
                <div className="card-text">
                  <h3 className="card-title">Prizes</h3>
                  <p>Awards and Prizes received by our IEEE SB Students</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="achievements" className="achv">
        <h1>Awards & Achievements</h1>
        <div className="achv-intro">
          <p>Awards and Achievements of IEEE Student Branch GHRCEM received by branch counsellor</p>
        </div>
        <div className="row">
          <div className="achv-col">
            <img src="/Images/BE.jpg" alt="" />
            <h3>Best Emerging IEEE Student Branch Award - 2018</h3>
          </div>
        </div>
      </section>

      <section className="testimonial">
        <h1>Our Testimonials</h1>
        <div className="row">
          <div className="testimonial-col">
            <img src="/Images/rk.jpg" alt="" />
            <div>
              <p>"Proudly chaired the IEEE Student Chapter..."</p>
              <h3>Rudraksh Kurpe</h3>
            </div>
          </div>
          <div className="testimonial-col">
            <img src="/Images/pr.png" alt="" />
            <div>
              <p>"Serving as Chair of the IEEE Student Chapter..."</p>
              <h3>Purvesh Mule</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="form">
        <h1>Be Part of the IEEE SB GHRCEM Family</h1>
        <Link to="/join" className="hero-btn">JOIN US</Link>
      </section>

      <section className="footer">
        <h1>Thanks for visit </h1>
        <div className="footer-intro">
          <p>Thank you for your interest in the IEEE Student Branch Club at GHRCEM...</p>
          <Link to="/contact" id="cs" className="hero-btn">CONTACT US</Link>
        </div>
        <div className="icons">
          <a href="https://www.instagram.com/ieee_ghrcem_pune/" className="fa fa-instagram"></a>
          <a href="https://www.linkedin.com/company/ieee-ghrcem/posts/?feedView=all" className="fa fa-linkedin"></a>
          <a href="https://www.facebook.com/ieee.ghrce/?locale=hi_IN" className="fa fa-facebook"></a>
          <a href="#" className="fa fa-twitter"></a>
        </div>
        <p>© 2024 All Rights Reserved. Design & Developed by Talha Ansari</p>
      </section>
    </>
  );
}

export default Home;
