import React from "react";
import "../css/project.css";

// Dummy banner images (replace with your actual images later)
import banner1 from "../assets/image/project1.avif";
import banner2 from "../assets/image/project1.avif";
import banner3 from "../assets/image/project1.avif";
import banner4 from "../assets/image/project1.avif";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "Built using React.js and styled with modern UI principles to create an engaging personal portfolio.",
    image: banner1,
  },
  {
    title: "Resort Booking Website",
    description:
      "Responsive site for booking rooms, integrated with payment gateways and subtle animations.",
    image: banner2,
  },
  {
    title: "E-commerce Web App",
    description:
      "Full-stack shopping platform with cart system, login authentication, and real-time order tracking.",
    image: banner3,
  },
  {
    title: "Chat Application",
    description:
      "Real-time chat app using Firebase and React. Features private messaging, group chat, and online status.",
    image: banner4,
  },
];

const MyProjects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-image-container">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyProjects;
