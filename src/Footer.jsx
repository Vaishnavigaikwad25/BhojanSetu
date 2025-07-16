import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-column">
        <h4>Contact</h4>
        <p>Phone: +91 1234567890</p>
        <p>Email: info@bhojanseva.com</p>
        <p>Address: Karad, Maharashtra</p>
      </div>

      <div className="footer-column">
        <h4>Career</h4>
        <p>Job Openings</p>
        <p>Internships</p>
        <p>Volunteer with Us</p>
      </div>

      <div className="footer-column">
        <h4>Blog</h4>
        <p>Latest News</p>
        <p>Success Stories</p>
        <p>Events</p>
      </div>
    </footer>
  );
}

export default Footer;
