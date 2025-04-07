import React, { useState } from "react";
import "../style.css";
import Carousel from "react-bootstrap/Carousel";

const AboutSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const fullText = (
    <>
      Welcome to the IEEE Student Branch GHRCEM, a vibrant community of aspiring engineers and technology enthusiasts
      at G. H. Raisoni College of Engineering & Management (GHRCEM). Established with the mission of fostering
      innovation, collaboration, and professional development, our club serves as a platform for students to explore
      their interests in various fields of engineering and technology.
      <br /><br />
      At IEEE GHRCEM, we believe in the power of knowledge-sharing and hands-on learning experiences. Through a
      diverse range of activities and events, we aim to provide our members with opportunities to expand their
      technical skills, network with industry professionals, and make a positive impact on their communities.
      <br /><br />
      Our club is affiliated with the Institute of Electrical and Electronics Engineers (IEEE), the world's largest
      technical professional organization dedicated to advancing technology for the benefit of humanity. As part of
      the IEEE community, we have access to a wealth of resources, including publications, conferences, and
      professional development opportunities, which we leverage to enhance the educational experience of our members.
      <br /><br />
      Join us as we embark on a journey of discovery, creativity, and excellence. Together, we'll shape the future of
      technology and make a difference in the world.
      <br /><br />
      Connect with us on social media and stay updated on our latest events, initiatives, and opportunities for
      involvement.
    </>
  );

  const shortText = (
    <>
      Welcome to the IEEE Student Branch GHRCEM, a vibrant community of aspiring engineers and technology enthusiasts
      at G. H. Raisoni College of Engineering & Management (GHRCEM). Established with the mission of fostering
      innovation, collaboration, and professional development.
      <br /><br />
      At IEEE GHRCEM, we believe in the power of knowledge-sharing and hands-on learning experiences. Through a
      diverse range of activities and events, we aim to provide our members with opportunities...
      <br /><br />
    </>
  );

  return (
    
    <section id="about" className="ab-section">
  <h2 className="section-title" data-aos="fade-up">About IEEE SB GHRCEM</h2>
  <div className="ab">
    <div className="gallery" data-aos="zoom-in">
      <Carousel fade controls={true} indicators={false}>
        <Carousel.Item>
          <img src="/Images/ie1.jpeg" alt="Slide 1" className="gallery-img" />
        </Carousel.Item>
        <Carousel.Item>
          <img src="/Images/ie2.jpeg" alt="Slide 2" className="gallery-img" />
        </Carousel.Item>
        <Carousel.Item>
          <img src="/Images/ie3.jpeg" alt="Slide 3" className="gallery-img" />
        </Carousel.Item>
      </Carousel>
    </div>

    <div className="ab-intro" data-aos="fade-left">
      <p>
        {isExpanded ? fullText : shortText}
        <br />
        <span
          onClick={toggleReadMore}
          style={{
            color: "#007bff",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          {isExpanded ? " Read Less ▲" : " Read More ▼"}
        </span>
      </p>
    </div>
  </div>
</section>

  
  );
};

export default AboutSection;
