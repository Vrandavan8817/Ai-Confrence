import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar-clone">
      <nav className="navbar">
        {/* <a href="#home" className="logo">AI CONFERENCE 2026</a> */}
        <img src="/media/images/logo.jpg" className="logo" />

        {/* Nav Links */}
        <div className={`nav-overlay ${isOpen ? "open" : ""}`}>
          <ul className="nav-links">
            <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
            <li><a href="#aboutSection" onClick={() => setIsOpen(false)}>About Us</a></li>
            <li><a href="#callforpaper" onClick={() => setIsOpen(false)}>Call For Paper</a></li>
            <li><a href="#committees" onClick={() => setIsOpen(false)}>Committees</a></li>
            <li><a href="#expert" onClick={() => setIsOpen(false)}>Experts</a></li>
            <li><a href="#speakers" onClick={() => setIsOpen(false)}>Themes & Technology</a></li>
            {/* <li><a href="#awardsgrants" onClick={() => setIsOpen(false)}>Awards Grants</a></li> */}
            <li><a href="#schedule" onClick={() => setIsOpen(false)}>Schedule</a></li>
            <li><a href="#registerform" onClick={() => setIsOpen(false)}>Register</a></li>
          </ul>
        </div>

        {/* Hamburger Button */}
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
