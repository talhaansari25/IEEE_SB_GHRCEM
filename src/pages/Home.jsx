import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../style.css";

// Components
import Hero from "../components/Hero";
import About from "../components/About";
import Faculty from "../components/Faculty";
import Team from "../components/Team";
import Achievements from "../components/Achievements";
import EventPrizes from "../components/EventPrizes";
import Testimonials from "../components/Testimonials";
import JoinSection from "../components/JoinSection";
import Footer from "../components/Footer";

const Home = () => {
  useEffect(() => {
    document.title = "IEEE GHRCEM | Home";

    // AOS initialization
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      const preloader = document.getElementById("preloader");
      if (preloader) {
        preloader.style.display = "none";
      }
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div id="preloader">
        <div className="loader">
          <img src="/Images/logo.png" alt="logo" className="loader-logo" />
        </div>
      </div>

      {/* <Navbar /> */}
      <Hero />
      <About />
      <Faculty
        name="Dr. Simran Khiani Ma'am"
        image="/Images/sk.jpeg"
        about={
          <>
            is an esteemed member of our academic community, serving as the Counselor for the IEEE Student Branch GHRCEM.
            <br /><br />
            Ma'am brings invaluable insight and guidance to our student branch club. Her dedication to fostering a culture of innovation and excellence inspires our members to reach new heights in their academic and professional pursuits.
            <br /><br />
            IEEE GHRCEM will be essential to the global technical community and to technical professionals everywhere, and be universally recognized for the contributions of technology and of technical professionals in improving global conditions.
            <br /><br />
            We are honored to have Dr. Simran Khiani Ma'am as our counselor, guiding us towards success in our journey of technological exploration and advancement.
          </>
        }
      />
      <Team />
      <Achievements />
      <EventPrizes />
      <Testimonials />
      <JoinSection />
      <Footer />
    </>
  );
};

export default Home;
