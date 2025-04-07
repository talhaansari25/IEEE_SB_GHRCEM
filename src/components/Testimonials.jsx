import React from "react";
import TestimonialCard from "./TestimonialCard";
import "../style.css";

function Testimonials() {
  const testimonialData = [
    {
      imgSrc: "/Images/rk.jpg",
      quote:
        "Proudly chaired the IEEE Student Chapter, organizing flagship events and securing funding, fostering impactful collaborations within the IEEE community.",
      name: "Rudraksh Kurpe",
    },
    {
      imgSrc: "/Images/pr.png",
      quote:
        "Serving as Chair of the IEEE Student Chapter for the last year was an enriching experience. I had the opportunity to lead a passionate team, drive impactful initiatives, and contribute to the growth of our technical community through innovative events and meaningful collaborations.",
      name: "Purvesh Mule",
    },
  ];

  return (
    <section className="testimonial" data-aos="fade-up" data-aos-duration="1200">
      <h1>Our Testimonials</h1>
      <div className="row">
        {testimonialData.map((item, index) => (
          <div key={index} data-aos="zoom-in-up" data-aos-delay={index * 200}>
            <TestimonialCard
              imgSrc={item.imgSrc}
              quote={item.quote}
              name={item.name}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
