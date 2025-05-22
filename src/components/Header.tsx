import React from 'react';

const Header = () => {
  return (
    <header>
      {/* Logo */}
      <div className="py-4 text-center">
        <img
          src="/logo.png"
          alt="logo"
          width={250}
          height={250}
          className="mx-auto"
        />
      </div>

      {/* Navbar */}
      <nav>
        <ul className="flex justify-center space-x-20 py-4">
          <li>
            <a href="/about">
              About
            </a>
          </li>
          <li>
            <a href="/experience">
              Experience
            </a>
          </li>
          <li>
            <a href="/projects">
              Projects
            </a>
          </li>
          <li>
            <a href="/contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;