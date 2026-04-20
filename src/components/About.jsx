import React, { useEffect, useRef } from 'react';

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section className="about-section" id="about" ref={sectionRef} style={{ opacity: 0 }}>
      <h2>About Rishuu</h2>
      <p className="about-desc">
        Rishuu is a simple boy from Ghumarwin, Bilaspur. He loves cricket and enjoys living life in his own way.
      </p>
      
      <div className="cards-container">
        <div className="card">
          <h3>Personality</h3>
          <p>Calm and caring</p>
        </div>
        <div className="card">
          <h3>Passion</h3>
          <p>Cricket lover 🏏</p>
        </div>
        <div className="card">
          <h3>Favorite Team</h3>
          <p>CSK 💛</p>
        </div>
      </div>
    </section>
  );
};

export default About;