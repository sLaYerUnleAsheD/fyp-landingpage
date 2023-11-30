import React from 'react';
import mihawk_zoro from '../images/mihawk_zoro.jpg'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
        <img src={mihawk_zoro} alt='site logo' />
        </div>
        <div className="footer-links">
          <a href="#">Instagram</a>
          <a href="#">Github</a>
          <a href="#">Donate</a>
        </div>
        <div className="footer-social">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
