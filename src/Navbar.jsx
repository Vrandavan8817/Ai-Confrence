import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar-clone">
      <div className="navbar">
        <ul>
          <li><a href='#home' style={{textDecoration:'none', color:'#e5e5e5'}}>Home</a></li>
          <li><a href='#aboutSection' style={{textDecoration:'none', color:'#e5e5e5'}}>About Us</a></li>
          <li><a href='#callforpaper' style={{textDecoration:'none', color:'#e5e5e5'}}>Call For Paper</a></li>
          <li><a href='#committees' style={{textDecoration:'none', color:'#e5e5e5'}}>Committees</a></li>
          <li><a href='#sponsorship' style={{textDecoration:'none', color:'#e5e5e5'}}>Experts</a></li>
          <li><a href='#speakers' style={{textDecoration:'none', color:'#e5e5e5'}}>Speakers</a></li>
          <li><a href='#awardsgrants' style={{textDecoration:'none', color:'#e5e5e5'}}>Awards Grants</a></li>
          <li><a href='#schedule' style={{textDecoration:'none', color:'#e5e5e5'}}>Schedule</a></li>
          <li><a href='#registerform' style={{textDecoration:'none', color:'#e5e5e5'}}>Register</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
