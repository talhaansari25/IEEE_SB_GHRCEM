import React from 'react';
import '../style.css';

function Faculty({ name, image, about }) {
  return (
    <section className="faculty" data-aos="fade-up" data-aos-duration="800">
      <h1 id="bc" data-aos="fade-down" data-aos-duration="600">Meet Our Branch Counselor</h1>
      <div className="adv">
        <div className="sim" data-aos="fade-right" data-aos-duration="800">
          <img src={image} alt={name} />
        </div>
        <div className="wr" data-aos="fade-left" data-aos-duration="800" data-aos-delay="150">
          <p>
            <strong>{name}</strong> {about}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Faculty;
