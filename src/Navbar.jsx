import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar-clone">
      <nav className="navbar">
        <a href="#home" className="logo">SUMMIT'25</a>

        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li><a href="#home">Home</a></li>
          <li><a href="#aboutSection">About Us</a></li>
          <li><a href="#callforpaper">Call For Paper</a></li>
          <li><a href="#committees">Committees</a></li>
          <li><a href="#sponsorship">Experts</a></li>
          <li><a href="#speakers">Speakers</a></li>
          <li><a href="#awardsgrants">Awards Grants</a></li>
          <li><a href="#schedule">Schedule</a></li>
          <li><a href="#registerform">Register</a></li>
        </ul>

        <button 
          className={`nav-toggle ${isOpen ? "active" : ""}`} 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <i className="fa-solid fa-bars"></i>
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
