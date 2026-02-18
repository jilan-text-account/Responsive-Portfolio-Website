import React from "react";

import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Contact = () => {
  return (
    <div className="contact-container" id="contact">
      <h2>Contact Me</h2>
      <p>Let's connect for projects or job opportunities</p>

      <div className="contact">
        <div className="contact-info">
          <div className="info-item">
            <EmailIcon className="icon" />
            <a href="mailto:jilani@example.com">jilani@example.com</a>
          </div>

          <div className="info-item">
            <PhoneIcon className="icon" />
            <a href="tel:+919876543210">+91 98765 43210</a>
          </div>

          <div className="info-item">
            <LocationOnIcon className="icon" />
            <span>Andhra Pradesh, India</span>
          </div>

          <div className="social-links">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <LinkedInIcon />
            </a>

            <a href="https://github.com" target="_blank" rel="noreferrer">
              <GitHubIcon />
            </a>
          </div>
        </div>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit" onClick={() => alert("sent your message !! ")}>
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
