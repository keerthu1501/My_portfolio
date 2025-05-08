import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/header.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const navLinks = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <header className="bg-dark text-white py-3 sticky-top shadow-lg">
      <nav className="container d-flex justify-content-between align-items-center">
        <motion.h1
          className="logo mb-0"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Keerthana<span style={{ color: "white" }}>'s Portfolio</span>
        </motion.h1>

        {/* Desktop Nav */}
        <ul className="nav list-unstyled d-none d-md-flex gap-4 mb-0">
          {navLinks.map((section) => (
            <li key={section}>
              <a
                href={`#${section.toLowerCase()}`}
                className="text-white text-decoration-none nav-link-custom"
              >
                {section}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger Icon - Mobile View */}
        <div className="d-md-none">
          <button
            onClick={toggleMenu}
            className="btn text-white fs-4"
            aria-label="Toggle navigation"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.ul
            className="mobile-nav d-flex flex-column align-items-center gap-3 p-4 bg-dark"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {navLinks.map((section) => (
              <li key={section} onClick={() => setIsMobileMenuOpen(false)}>
                <a
                  href={`#${section.toLowerCase()}`}
                  className="text-white text-decoration-none fs-5"
                >
                  {section}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
