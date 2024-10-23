// src/components/ContactUs.js
import React from 'react';
import './ContactUs.css'; 

const ContactUs = () => {
  return (
    <footer className="contact-us" id="contact">
      <div className="contact-info">
        <h3>Contact Us</h3>
        <p>srivaishuravikumar2006@gmail.com</p>
      </div>
      <div className="footer-links">
        <ul>
          <li>Parental/Legal Guardian Privacy Notice</li>
          <li>Mobile Apps</li>
          <li>Terms of Use</li>
          <li>Help & Contact</li>
        </ul>
      </div>
      <div className="social-icons">
        <a href="https://facebook.com"><i className="fa fa-facebook"></i></a>
        <a href="https://twitter.com"><i className="fa fa-twitter"></i></a>
        <a href="https://instagram.com"><i className="fa fa-instagram"></i></a>
        <a href="https://linkedin.com"><i className="fa fa-linkedin"></i></a>
      </div>
      <p className="copyright">
        © 2021 Digital Literacy. All logos and trademarks are the properties of their respective owners.
      </p>
    </footer>
  );
};

export default ContactUs;
