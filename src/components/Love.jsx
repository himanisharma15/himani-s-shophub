import React, { useEffect, useRef } from 'react';

const Love = () => {
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
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <section className="love-section" id="love" ref={ref} style={{ opacity: 0 }}>
      <div className="love-content">
        <h2 className="love-text">
          And yes... he loves someone truly <span className="heart">❤️</span>
        </h2>
      </div>
    </section>
  );
};

export default Love;