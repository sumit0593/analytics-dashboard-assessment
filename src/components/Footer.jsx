import React from "react";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        {/* Company Info */}
        <div className="footer-section">
          <h3>EV Dashboard</h3>
          <p>
            Your one-stop platform for monitoring and analyzing electric vehicle
            data. Stay updated, explore trends, and make informed decisions
            about EVs.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li>
              <a href="#overview">Overview</a>
            </li>
            <li>
              <a href="#charts">Charts</a>
            </li>
            <li>
              <a href="#reports">Reports</a>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: sumitsumitsumit163@gmail.com</p>
          <p>Phone: +91 7011676185</p>
          <div className="footer-icons">
            <a href="https://www.linkedin.com/in/sumit-kumar0509/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin">Linkedin</i>
            </a>
            <a href="https://github.com/sumit0593" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram">GitHub</i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} EV Dashboard. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
