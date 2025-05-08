import React, { useState } from "react";
import defaultImage from "../assets/image/pro.jpg";
import hoverImage from "../assets/image/pro.jpg"; // Ensure this path is correct
import "../css/about.css"; // Make sure to create this CSS file

const About = () => {
  const [imageSrc, setImageSrc] = useState(defaultImage);

  const handleMouseEnter = () => {
    setImageSrc(hoverImage); // Change to hover image on hover
  };

  const handleMouseLeave = () => {
    setImageSrc(defaultImage); // Revert to default image when mouse leaves
  };

  return (
    <section id="about" className="about">
      <div className="content-wrapper">
        <h2 className="about-title">About Me</h2>
        <p className="about-description">
          I am a Computer Science Engineering graduate from the class of 2023
          with a strong foundation in front-end development. My expertise lies in
          building dynamic, responsive, and user-friendly web applications.
        </p>
        <p className="about-description">
          Certified as an AWS Cloud Practitioner, I am eager to contribute to
          innovative teams and grow as a developer.
        </p>
      </div>

      <div
        className="image-container"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src={imageSrc}
          alt="Profile"
          className="profile-image"
        />
      </div>
    </section>
  );
};

export default About;
