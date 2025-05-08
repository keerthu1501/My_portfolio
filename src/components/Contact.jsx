import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa"; // Font Awesome icons

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <div className="contact-icons">
        <a href="mailto:keerthananainiyappan1525@gmail.com" aria-label="Email">
          <FaEnvelope size={30} />
        </a>
        <a href="https://github.com/keerthu1501" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub size={30} />
        </a>
        <a
          href="https://in.linkedin.com/in/keerthana-nainiyappan"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={30} />
        </a>
        <a href="tel:+1234567890" aria-label="Phone">
          <FaPhone size={30} />
        </a>
      </div>
    </section>
  );
};

export default Contact;
