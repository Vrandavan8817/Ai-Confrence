import React from 'react';
import "./Footer.css"

function Footer() {
  return (
    <div>
       <footer className="footer">
      <div className="footer-wrapper">

        <div className="footer-section about">
          <h3>About AIConf</h3>
          <p>
            AIConf is the premier conference for AI enthusiasts, researchers, and professionals. Join us to explore the future of artificial intelligence.
          </p>
        </div>

        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#speakers">Speakers</a></li>
            <li><a href="#schedule">Schedule</a></li>
            <li><a href="#tickets">Tickets</a></li>
            <li><a href="#sponsors">Sponsors</a></li>
            <li><a href="#schedule">Schedule</a></li>
            <li><a href="#tickets">Tickets</a></li>
            <li><a href="#sponsors">Sponsors</a></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>Email: <a href="mailto:info@aiconf.com">info@sgsuniversity.ac.in</a></p>
          <p>Phone: <a href="tel:+1234567890">+1 234 567 890</a></p>
          <p>Address: SGSU Campus, NH-12, Narmadapuram Rd, near Misrod, Misrod, Bhopal, Bhairopur, Madhya Pradesh 462047</p>
        </div>

        <div className="footer-section newsletter">
          <h3>Newsletter</h3>
          <p>Subscribe to get the latest updates and news.</p>
          <form className="newsletter-form" onSubmit={e => e.preventDefault()}>
            <input type="email" placeholder="Your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 AIConf. All rights reserved.</p>
        <ul className="socials">
          <li><a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a></li>
          <li><a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a></li>
          <li><a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a></li>
          <li><a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a></li>
        </ul>
      </div>
    </footer>
    </div>
  )
}

export default Footer;
