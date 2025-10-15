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

        <div className="footer-section links row">
          <h3>Quick Links</h3>
          <div className='col-6 '>
              <ul>
            <li><a href='#home' style={{textDecoration:'none', color:'#e5e5e5'}}>Home</a></li>
          <li><a href='#aboutSection' style={{textDecoration:'none', color:'#e5e5e5'}}>About Us</a></li>
          <li><a href='#callforpaper' style={{textDecoration:'none', color:'#e5e5e5'}}>Call For Paper</a></li>
          <li><a href='#committees' style={{textDecoration:'none', color:'#e5e5e5'}}>Committees</a></li>
          <li><a href='#sponsorship' style={{textDecoration:'none', color:'#e5e5e5'}}>Sponsorship</a></li>
          </ul>
          </div>
          <div className='col-6'>
            <ul>
          <li><a href='#speakers' style={{textDecoration:'none', color:'#e5e5e5'}}>Speakers</a></li>
          <li><a href='#awardsgrants' style={{textDecoration:'none', color:'#e5e5e5'}}>Awards Grants</a></li>
          <li><a href='#schedule' style={{textDecoration:'none', color:'#e5e5e5'}}>Schedule</a></li>
          <li><a href='#registerform' style={{textDecoration:'none', color:'#e5e5e5'}}>Register</a></li>
          </ul>
          </div>
    
        </div>

        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>Email: <a href="mailto:info@aiconf.com">info@sgsuniversity.ac.in</a></p>
          <p>Phone: <a href="tel:+1234567890">+1 234 567 890</a></p>
          <p>Address: SGSU Campus, NH-12, Narmadapuram Rd, near Misrod, Misrod, Bhopal, Bhairopur, Madhya Pradesh 462047</p>
        </div>

        {/* <div className="footer-section newsletter">
          <h3>Newsletter</h3>
          <p>Subscribe to get the latest updates and news.</p>
          <form className="newsletter-form" onSubmit={e => e.preventDefault()}>
            <input type="email" placeholder="Your email" required />
          </form>
        <br/>
           <button type="submit">Subscribe</button>
        </div> */}

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
