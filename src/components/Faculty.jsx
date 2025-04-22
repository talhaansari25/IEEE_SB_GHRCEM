import React from 'react';
import '../style.css';

const Faculty = () => {
  const facultyData = [
    {
      name: "Dr. Simran Khiani Ma'am",
      image: "/Images/sk.jpeg",
      about: (
        <>
          is an esteemed member of our academic community, serving as the Counselor for the IEEE Student Branch GHRCEM.
          <br /><br />
          Ma'am brings invaluable insight and guidance to our student branch club. Her dedication to fostering a culture of innovation and excellence inspires our members to reach new heights in their academic and professional pursuits.
          <br /><br />
          IEEE GHRCEM will be essential to the global technical community and to technical professionals everywhere, and be universally recognized for the contributions of technology and of technical professionals in improving global conditions.
          <br /><br />
          We are honored to have Dr. Simran Khiani Ma'am as our counselor, guiding us towards success in our journey of technological exploration and advancement.
        </>
      )
    },
    
    // other faculty can be added too
    // {
    //   name: "Prof. Rahul Sharma Sir",
    //   image: "/Images/rs.jpeg",
    //   about: (
    //     <>
    //       serves as the Co-Counselor and plays a key role in managing IEEE events at GHRCEM.
    //       <br /><br />
    //       His support and mentorship enable smooth coordination between faculty and students, ensuring successful project outcomes and high-impact events.
    //       <br /><br />
    //       His technical expertise and constant motivation help the student body explore innovation and leadership at every level.
    //     </>
    //   )
    // }
  ];

  return (
    <section className="faculty" data-aos="fade-up" data-aos-duration="800">
      <h1 id="bc" data-aos="fade-down" data-aos-duration="600">Meet Our Faculty Advisors</h1>
      {facultyData.map((faculty, index) => (
        <div className="adv" key={index}>
          <div className="sim" data-aos="fade-right" data-aos-duration="800">
            <img src={faculty.image} alt={faculty.name} />
          </div>
          <div className="wr" data-aos="fade-left" data-aos-duration="800" data-aos-delay="150">
            <p>
              <strong>{faculty.name}</strong> {faculty.about}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Faculty;
