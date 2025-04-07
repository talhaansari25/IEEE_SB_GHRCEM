import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import '../style.css'; 
import Navbar from './Navbar.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="header">
      <Navbar />
      <div className="text-box">
        <h3 className="wel" data-aos="fade-down">Welcome to</h3>
        <h1 data-aos="zoom-in" data-aos-delay="200">IEEE Student Branch</h1>
        <p data-aos="fade-up" data-aos-delay="400">
          GH RAISONI COLLEGE OF ENGINEERING AND MANAGEMENT, PUNE.
        </p>
        <a href="#about" className="hero-btn" data-aos="fade-up" data-aos-delay="600">
          Know More
        </a>
      </div>
    </section>
  );
}

export default Hero;
