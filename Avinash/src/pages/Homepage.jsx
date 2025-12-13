import React from "react";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";
import Contact from "./Contact";
import Projects from "./Projects"; // Ensure this is the fixed Projects.jsx

const Homepage = () => {
  return (
    <>
      <Home />
      <About />
      <Projects />  {/* Fixed Projects component included */}
      <Skills />
      <Experience />
      <Contact />
    </>
  );
};

export default Homepage;
