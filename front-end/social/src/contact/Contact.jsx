import React from 'react';
import './contactSupport.css';

const ContactSupport = () => {
  return (
    <div className="contact-support">
      <h2>Contact Support</h2>
      <p>We're here to help! Fill out the form below and our support team will get back to you shortly.</p>
      <form className="support-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Your Name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Your Email" />
        </div>
        <div className="form-group">
          <label htmlFor="issue">Issue</label>
          <textarea id="issue" placeholder="Describe your issue here..." rows="5"></textarea>
        </div>
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default ContactSupport;
