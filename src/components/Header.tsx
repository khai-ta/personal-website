// src/components/Header.tsx
import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center px-6 py-4">
        {/* Name */}
        <div>
          <button className="text-sm">KHAI TA</button>
        </div>
        
        {/* Navigation */}
        <nav>
          <ul className="flex gap-8">
            <li><a href="/about" className="text-sm">ABOUT</a></li>
            <li><a href="/experience" className="text-sm">EXPERIENCE</a></li>
            <li><a href="/projects" className="text-sm">PROJECTS</a></li>
            <li><a href="/contact" className="text-sm">CONTACT</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;