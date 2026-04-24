import React from 'react';

const Header = () => {
  return (
    <nav>
      <div className="logo">KHAI TA</div>
      <ul>
        <li><a href="#about">ABOUT</a></li>
        <li><a href="#experience">EXPERIENCE</a></li>
        <li><a href="#projects">PROJECTS</a></li>
        <li><a href="#contact">CONTACT</a></li>
        <li><a href="resume.pdf" target="_blank" className="nav-dim">RÉSUMÉ →</a></li>
      </ul>
    </nav>
  );
};

export default Header;