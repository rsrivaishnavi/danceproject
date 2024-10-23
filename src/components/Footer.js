// src/components/Footer.js
import React from 'react';
import './Footer.css'; // Add styles here

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 Dance Community | Designed by [Your Name]</p>
      <ul>
        <li><a href="#privacy">Privacy Policy</a></li>
        <li><a href="#terms">Terms of Service</a></li>
      </ul>
    </footer>
  );
};

export default Footer;
