import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Skills from "./components/MySkills";
import Projects from "./components/MyProjects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";


const App = () => {
  return (
    <div>
      <Header />
      <main>
        <HeroSection />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
