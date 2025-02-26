import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>Experience the best wildlife safari with expert guides and unforgettable adventures.</p>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: info@travelula.com</p>
          <p>Phone: +1 (555) 123-4567</p>
          <p>Location: Nairobi, Kenya</p>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Travel Ula. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
