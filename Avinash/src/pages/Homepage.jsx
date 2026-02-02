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
      <Home
        name="Avinash Sharma"
        role="Frontend / Full Stack Developer (Fresher)"
        description="I am a Full Stack Developer with a strong focus on frontend development,
          and hands-on experience in backend technologies. I build modern,
          responsive, and scalable web applications with an emphasis on clean UI,
          good UX, and seamless user experiences.
        "
      />
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