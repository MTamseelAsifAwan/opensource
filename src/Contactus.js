import React from 'react';
import './ContacUs.css';

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <h1>About Us</h1>
      <p>We'd love to hear from you!</p>

      <div className="contact-info">
        <h2>Developer Team</h2>
        <ul>
          <li>Tamseel Asif</li>
          <li>Adeel Ahmad</li>
          <li>Hassaan Mujtaba</li>
        </ul>
      </div>

      <div className="project-info">
        <h2>Project Details</h2>
        <p>Project Given By: Dr. Abdul Jaleel</p>
        <p>Chairman of CS Department</p>
      </div>

      <div className="extra-info">
        <h2>Additional Information</h2>
        <p>
          We are a passionate team of developers working on innovative projects
          to bring value to our users. Feel free to reach out to us with any
          questions, feedback, or collaboration opportunities.
        </p>
      </div>

      
    </div>
  );
};

export default ContactUs;
