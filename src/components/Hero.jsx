import React from 'react';

const Hero = () => {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-content fade-in">
        <div className="hero-image-container">
          <img src="/images/rishuu.jpg" alt="Rishuu" className="hero-image" onError={(e) => { e.target.src = 'https://via.placeholder.com/200?text=Rishuu'; }}/>
        </div>
        <h1 className="hero-title">This is Rishuu</h1>
        <p className="hero-subtitle">A boy who lives for cricket and loves deeply ❤️</p>
        <a href="#about" className="btn">Explore His Story</a>
      </div>
    </section>
  );
};

export default Hero;