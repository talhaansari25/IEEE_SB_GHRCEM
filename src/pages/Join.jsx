import React, { useEffect } from "react";
import "../style.css";
import JoinForm from "../components/JoinForm";
import Benefits from "../components/Benefits";
import Footer from "../components/Footer";

const Join = () => {
  useEffect(() => {
    document.title = "JOIN IEEE GHRCEM";
  }, []);

  return (
    <section className="form-benefit-section">
      <JoinForm />
      <Benefits />
    </section>
  );
  <Footer />

};


export default Join;
