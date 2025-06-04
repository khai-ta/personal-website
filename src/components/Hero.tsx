// src/components/Hero.tsx
import React from "react";

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* Attribution */}
      <div className="absolute bottom-2 right-4 text-xs text-white z-10 bg-black/40 px-2 py-1 rounded">
        <a
          href="https://www.vecteezy.com/free-videos/cube-animation"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Cube Animation Stock Video by Vecteezy
        </a>
      </div>
    </section>
  );
};

export default Hero;