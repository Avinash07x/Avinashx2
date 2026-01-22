import React from "react";
import Home from "./Home";
import About from "./About";
import Skills from "../components/Skills";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";
import Faqs from "../components/Faqs";


const Homepage = () => {
  return (
    <div>
      <Home />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Faqs />
    </div>
  );
};

export default Homepage;