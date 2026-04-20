import React, { useEffect, useRef } from 'react';

const Cricket = () => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
          }
        });
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <section className="cricket-section" id="cricket" ref={ref} style={{ opacity: 0 }}>
      <h2 className="cricket-title">The Game of Life</h2>
      <p className="cricket-desc">"Cricket is not just a game for him, it's an emotion."</p>
      
      <div className="stats-card">
        <h3>Chennai Super Kings 💛</h3>
        <p>Whistle Podu! Forever a loyal fan of CSK and the spirit of the game.</p>
      </div>
    </section>
  );
};

export default Cricket;