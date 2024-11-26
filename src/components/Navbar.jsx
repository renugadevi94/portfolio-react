import React, { useState } from 'react';
import "./navbar.css";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav__toggle" onClick={toggleMenu}>
        {isMenuOpen ? (
          <div className="close-icon">&#10005;</div>
        ) : (
          <div className="hamburger-icon">&#9776;</div>
        )}
      </div>
      <ul className={`nav__list ${isMenuOpen ? 'nav__list--open' : ''}`}>
        <li className="nav__list-item">
          <a href="#intro" className="nav__link" onClick={() => scrollToSection("intro")}>Home</a>
        </li>
        <li className="nav__list-item">
          <a href="#about" className="nav__link" onClick={() => scrollToSection("about")}>About</a>
        </li>
        <li className="nav__list-item">
          <a href="#skills" className="nav__link" onClick={() => scrollToSection("skills")}>Skills</a>
        </li>
        <li className="nav__list-item">
          <a href="#portfolio" className="nav__link" onClick={() => scrollToSection("portfolio")}>Portfolio</a>
        </li>
        <li className="nav__list-item">
          <a href="#contact" className="nav__link" onClick={() => scrollToSection("contact")}>Contact</a>
        </li>
      </ul>
    </nav>
  );
};

















