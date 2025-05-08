import React, { useState } from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/skills.css";
import modalBackground from '../assets/image/modal-bg.avif';
import { BsTransparency } from "react-icons/bs";


// List of skills and their detailed descriptions
const skillList = [
  { skill: "React.js", details: "I have extensive experience in React.js, building dynamic and responsive web applications using hooks, context, and other modern React features." },
  { skill: "React Native", details: "I have developed mobile apps with React Native, focusing on performance, smooth user experiences, and utilizing native modules." },
  { skill: "JavaScript", details: "I have a deep understanding of JavaScript and use it to build complex web applications with clean, maintainable code." },
  { skill: "HTML", details: "I am proficient in HTML, creating semantic and accessible layouts that follow best practices and SEO standards." },
  { skill: "CSS", details: "I have experience in CSS, using modern techniques like Flexbox, Grid, and animations to create beautiful, responsive designs." },
  { skill: "AWS Cloud", details: "I have worked with AWS services to build scalable applications, manage infrastructure, and ensure high availability." },
  { skill: "PHP", details: "I have experience in PHP, developing server-side applications and APIs, working with both MySQL and NoSQL databases." },
  { skill: "MySQL", details: "I have used MySQL extensively for relational database management, optimizing queries and ensuring efficient data retrieval." },
  { skill: "Tailwind CSS", details: "I use Tailwind CSS to build custom, utility-first styled web interfaces with a focus on responsiveness." },
  { skill: "WordPress", details: "I have built custom WordPress themes and plugins, focusing on performance and SEO optimization." },
  { skill: "Bootstrap", details: "I am proficient in Bootstrap, using it to create responsive, mobile-first web designs." },
];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, type: "spring", stiffness: 100 },
  },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

 
const modalVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, type: "spring", stiffness: 120 },
  },
};

const MySkills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const handleSkillClick = (skill) => {
    setSelectedSkill(skill);
  };

  const closeModal = () => {
    setSelectedSkill(null);
  };


  const modalStyle = {
    background: `url(${modalBackground}) no-repeat center center fixed`,
    backgroundSize: "cover",
  };

  return (
    <section id="skills" className="skills-section py-5 text-white">
      <div className="container text-center">
        <motion.h2
          className="mb-4 section-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My <span className="highlight">Skills</span>
        </motion.h2>

        <motion.div
          className="row justify-content-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {skillList.map((skill, index) => (
            <motion.div
              className="col-6 col-sm-4 col-md-3 mb-3"
              key={index}
              variants={itemVariants}
            >
              <div
                className="skill-card p-3 shadow-sm"
                onClick={() => handleSkillClick(skill)}
                style={{ cursor: "pointer" }}
              >
                {skill.skill}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal */}
        {selectedSkill && (
          <motion.div
            className="modal fade show"
            tabIndex="-1"
            style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)", ...modalStyle }}
            aria-hidden="true"
            onClick={closeModal}
            variants={modalVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="modal-dialog modal-dialog-centered" onClick={(e) => e.stopPropagation()}>
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">{selectedSkill.skill} Details</h5>
                </div>
                <div className="modal-body">
                  <p>{selectedSkill.details}</p>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={closeModal}>
                    Close
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default MySkills;
