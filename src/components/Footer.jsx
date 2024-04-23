import React from 'react';
import './footer.css';
import { FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
return(
<footer className="footer">
  <div className="footer-content">
    <div className="footer-contact">
      
      <p><FaEnvelope /> <span>srenugadevi1991@gmail.com</span></p>
      <p><FaPhone /><span>9080059073</span></p>
    </div>
    <div className="footer-social">
      <h3>Follow Me</h3>
      <ul className="social-links">
        
        <li><a href="https://www.linkedin.com/in/renugadevi1994" target="_blank">LinkedIn</a></li>
        <li><a href="https://github.com/renugadevi94" target="_blank">GitHub</a></li>
      </ul>
    </div>
  </div>
  <div className="footer-bottom">
    <p>&copy; 2024 Renugadevi. All rights reserved.</p>
  </div>
</footer>
)
}
export default Footer;