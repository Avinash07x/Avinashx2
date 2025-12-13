import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import logo from "../assets/AV.png";
import homeGif from "../assets/home1.gif";
import aboutGif from "../assets/about1.gif";
import skillsGif from "../assets/Skills1.gif";
import experienceGif from "../assets/Experience1.gif";
import projectsGif from "../assets/project1.gif";
import contactGif from "../assets/contact1.gif";

const Navbar = () => {
  const [navBackground, setNavBackground] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setNavBackground(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ FIXED: ALL items now have UNIQUE PATH
  const menuItems = [
    { name: "Home", path: "/", icon: homeGif },
    { name: "About", path: "#", icon: aboutGif },
    { name: "Skills", path: "#", icon: skillsGif },
    { name: "Experience", path: "#", icon: experienceGif },
    { name: "Projects", path: "#", icon: projectsGif },
    { name: "Contact", path: "#", icon: contactGif },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500
        ${
          navBackground
            ? "bg-white/20 backdrop-blur-xl border border-white/30 shadow-lg"
            : "bg-white/10 backdrop-blur-md border border-white/20"
        }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center py-3 relative">

        {/* ✅ LOGO */}
        <Link to="/" className="flex items-center space-x-4 group z-50">
          <img
            src={logo}
            alt="Logo"
            className="h-10 w-10 md:h-12 md:w-12 rounded-full border-2 border-cyan-400 animate-pulse hover:animate-none shadow-2xl shadow-cyan-500/50"
          />
        </Link>

        {/* ✅ DESKTOP MENU */}
        <ul className="hidden md:flex space-x-4 z-50">
          {menuItems.map((item) => (
            <li key={item.path} className="relative group">
              <Link
                to={item.path}
                className="flex items-center justify-center w-20 h-12 px-2 py-2 rounded-lg transition-all duration-300 relative"
              >
                {/* Hover Text */}
                <span
                  className="absolute opacity-0 group-hover:opacity-100 text-purple-400 font-medium text-sm 
                  -translate-y-6 group-hover:translate-y-0 transition-all duration-300 group-hover:animate-glitch"
                >
                  {item.name}
                </span>

                {/* Icon */}
                <img
                  src={item.icon}
                  alt={item.name}
                  className="w-10 h-10 p-2 animate-wobble group-hover:opacity-0 group-hover:scale-50 transition-all duration-300"
                />
              </Link>
            </li>
          ))}
        </ul>

        {/* ✅ HAMBURGER BUTTON */}
        <button
          className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-cyan-500 z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <div
            className={`w-6 h-0.5 bg-white mb-1.5 transition-transform duration-300 ${
              mobileMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-white mb-1.5 transition-opacity duration-300 ${
              mobileMenuOpen ? "opacity-0" : ""
            }`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-white transition-transform duration-300 ${
              mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></div>
        </button>

        {/* ✅ MOBILE MENU */}
        <div
          className={`absolute top-full left-0 w-full bg-gray-900 border-b border-gray-700 shadow-xl md:hidden transition-all duration-300 ${
            mobileMenuOpen
              ? "opacity-100 visible translate-y-0"
              : "opacity-0 invisible -translate-y-4"
          }`}
        >
          <ul className="flex flex-col p-6 space-y-3">
            {menuItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-4 px-4 py-3 text-white font-medium rounded-lg 
                  hover:bg-gray-800 transition-all duration-300"
                >
                  <img src={item.icon} alt={item.name} className="w-7 h-7" />
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
