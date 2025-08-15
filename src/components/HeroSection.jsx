import React from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/herosection.css";
import banner from "../assets/image/banner1.avif";
import { useState, useEffect } from "react";


const descriptionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 1 + i * 0.6, duration: 0.6 },
  }),
};

const HeroSection = () => {
  const lines = [
    "A Passionate Web Developer.",
    "AWS Cloud Enthusiast.",
    "Creative Graphic Designer.",
    "Focused on Crafting User-Centered Digital Products.",
  ];
  const [displayedLines, setDisplayedLines] = useState([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    if (currentLineIndex < lines.length) {
      let currentLine = lines[currentLineIndex];
      let charIndex = 0;

      const typeChar = () => {
        if (charIndex <= currentLine.length) {
          setTypedText(currentLine.slice(0, charIndex));
          charIndex++;
          setTimeout(typeChar, 40); // Speed of typing
        } else {
          setDisplayedLines((prev) => [...prev, currentLine]);
          setTypedText("");
          setCurrentLineIndex((prev) => prev + 1);
        }
      };

      typeChar();
    }
  }, [currentLineIndex]);

  return (
    <section
      id="hero"
      className="hero-section d-flex align-items-center text-white"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="container text-center">
        {/* First Heading Motion */}
        <motion.h1
          className="hero-title mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, 👋 I'm <span className="highlight">Keerthana</span>
        </motion.h1>

         {/* Already displayed lines */}
         {displayedLines.map((line, index) => (
          <p className="hero-subtitle" key={index}>{line}</p>
        ))}

        {/* Typing line */}
        {typedText && (
          <p className="hero-subtitle">
            {typedText}
            <span className="blinking-cursor">|</span>
          </p>
        )} 

        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <button className="btn btn-primary btn-lg mt-4 px-4">Contact Me</button>
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;
