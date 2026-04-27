import React from 'react';

function Contact() {
  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Contact Us</h1>
        <p className="page-subtitle">We would love to hear from you. Reach out to our admissions team.</p>
      </div>

      <div className="contact-container">
        <h2>Get in Touch</h2>
        <div className="contact-info" style={{ marginTop: '20px' }}>
          <p><strong>Email:</strong> admissions@vnrvjiet.in</p>
          <p><strong>Phone:</strong> 1234567890 </p>
          <p><strong>Address:</strong>Bachupally , Hyderabad</p>
        </div>
        
        <button className="btn">Email Admissions</button>
      </div>
    </div>
  );
}

export default Contact;
