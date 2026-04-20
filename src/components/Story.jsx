import React, { useEffect, useRef } from 'react';

const StoryPart = ({ title, desc, partClass }) => {
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
    <div className={`story-part ${partClass}`}>
      <div className="story-content" ref={ref} style={{ opacity: 0 }}>
        <h2>{title}</h2>
        <p>{desc}</p>
      </div>
    </div>
  );
};

const Story = () => {
  const parts = [
    { title: 'Morning', desc: 'Starts his day with thoughts of cricket', class: 'part-1' },
    { title: 'Day', desc: 'Spends time with friends and daily life', class: 'part-2' },
    { title: 'Evening', desc: 'Plays cricket and enjoys the game', class: 'part-3' },
    { title: 'Night', desc: 'Dreams big and thinks about his future', class: 'part-4' },
  ];

  return (
    <section className="story-section" id="story">
      {parts.map((p, index) => (
        <StoryPart key={index} title={p.title} desc={p.desc} partClass={p.class} />
      ))}
    </section>
  );
};

export default Story;