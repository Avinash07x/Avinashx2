import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Projects from "./pages/Projects";
import Faqs from "./components/Faqs";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Skills from "./components/Skills";
import About from "./pages/About";
import Experience from "./pages/Experience";


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Home />
        <About />
        <Routes>
          <Route path="/" element={<Skills />} />
        </Routes>
        <Projects />
        <Experience />
        <Contact />
        <Faqs />
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;