import React from 'react';
import './contact.css';
import {FaEnvelope,FaPhoneSquareAlt } from 'react-icons/fa';
const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2 className="heading-contact">Contact <span>Me!</span></h2>

      
      <form action="mailto:srenugadevi1991@gmail.com" method="post" encType="text/plain" className="contact-form">
        <div className="input-group">
          <div className="input-box">
            <input type="text" placeholder="Full Name" name="Full Name" />
            <input type="email" placeholder="Enter your email" name="Email" />
          </div>
          <div className="input-box">
            <input type="tel" placeholder="Mobile Number" name="Mobile Number" />
            <input type="text" placeholder="Subject" name="Subject" />
          </div>
        </div>
        <div className="input-group-2">
          <textarea name="Message" cols="30" rows="10" placeholder="Your Message"></textarea>
          <input type="submit" value="Send Message" className="btn" />
        </div>
      </form>
      
    </section>
  );
};

export default Contact;