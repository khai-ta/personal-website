'use client';

import React, { useEffect } from 'react';

const Hero = () => {
  useEffect(() => {
    const items = document.querySelectorAll('.ticker-item');
    let current = 0;
    const interval = setInterval(() => {
      items[current].classList.remove('active');
      items[current].classList.add('exit');
      setTimeout(() => items[current].classList.remove('exit'), 500);
      current = (current + 1) % items.length;
      items[current].classList.add('active');
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero">
      <div id="vid">
        <video autoPlay loop muted playsInline>
          <source src="/hero.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="hl hbl">
        <div className="ticker" id="ticker">
          <div className="ticker-item active">AI/ML ENGINEER · LOCKHEED</div>
          <div className="ticker-item">FULL STACK · HACKPSU</div>
          <div className="ticker-item">DEV DIRECTOR · ACM</div>
          <div className="ticker-item">CS · PENN STATE</div>
        </div>
      </div>

      <div className="hl hbr">kqt5461@psu.edu</div>

    </section>
  );
};

export default Hero;
