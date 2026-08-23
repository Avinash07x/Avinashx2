import React from "react";
import Home from "./Home";
import About from "./About";
import Skills from "../components/Skills";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";
import Faqs from "../components/Faqs";

export default function Homepage() {
  return (
    <main className="overflow-x-clip bg-[#F5F5F5]">
      <Home
        name="Avinash Sharma"
        description="Full Stack Developer with hands-on experience building production-grade web applications, SaaS platforms, ERP systems, CMS solutions and Windows desktop applications using React.js, Node.js, Express.js, PostgreSQL and MongoDB."
      />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Faqs />
    </main>
  );
}
