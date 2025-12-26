import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Projects from "./pages/Projects";
import Faqs from "./components/Faqs";
import Contact from "./pages/Contact";
import Home from "./pages/Home";


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/projects" element={<Projects />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Contact />
        <Faqs />
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;