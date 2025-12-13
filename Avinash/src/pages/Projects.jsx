import React, { useEffect, useRef, useState } from "react";
import { Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

import Todo1 from "../assets/Todo.png";
import Weather1 from "../assets/Weather.png";
import Unnatii1 from "../assets/Unnatii1.png";
import DC1 from "../assets/DC.png";
import Portfolio1 from "../assets/Portfolio.png";
import Calendar1 from "../assets/Calendar.png";
import Cal1 from "../assets/Calculator.png";
import Wood1 from "../assets/woodland.png";

// ✅ Project Data
const projects = [
  {
    title: "Woodland",
    description:
      "Woodland Architecture Firm — A modern architecture and interior-design studio offering building design, interior styling, layout planning and project management to create purposeful, human-centered spaces.",
    tech: ["React.js", "Tailwind CSS", "Framer Motion", "Gsap"],
    github: "https://github.com/Avinash07x/Woodland.git",
    demo: "https://woodland-three.vercel.app/",
    image: Wood1,
    color: "from-green-400 to-blue-500",
  },
  {
    title: "Advanced Todo-List Web App",
    description:
      "Todo app with dark/light mode, CRUD, duplicate prevention, and progress tracking.",
    tech: ["React.js", "Tailwind CSS", "Local Storage"],
    github: "https://github.com/Avinash07x/Todo/tree/main/TODO",
    demo: "https://todo-mu-peach.vercel.app/",
    image: Todo1,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Real-Time Weather App",
    description: "Responsive weather app with real-time API integration.",
    tech: ["React.js", "Tailwind CSS", "Weather API"],
    github: "https://github.com/Avinash07x/weather",
    demo: "https://weather-lemon-delta.vercel.app/",
    image: Weather1,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Unnatii Real Estate",
    description: "Real estate web app with property listings & filters.",
    tech: ["React.js", "Tailwind CSS", "React Router"],
    github: "https://github.com/Avinash07x/Unnatii/tree/main/frontend",
    demo: "https://unnatii.vercel.app/",
    image: Unnatii1,
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "DC Keepers",
    description: "Task management app with authentication.",
    tech: ["React.js", "Tailwind CSS", "Axios"],
    github:
      "https://github.com/Avinash07x/Avinash07x-Internship-Project-1.git",
    demo: "https://digitalcloud-psi.vercel.app/",
    image: DC1,
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Portfolio Website",
    description: "Showcase of skills & projects.",
    tech: ["React.js", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/Avinash07x/Avinash.git",
    demo: "https://avinash-theta.vercel.app/",
    image: Portfolio1,
    color: "from-indigo-500 to-purple-500",
  },
  {
    title: "Calendar App",
    description: "Advanced calendar with event management.",
    tech: ["React.js", "Tailwind CSS", "Date-fns"],
    github: "https://github.com/Avinash07x/Calendar.git",
    demo: "https://calendar-beta-wheat.vercel.app/",
    image: Calendar1,
    color: "from-teal-500 to-cyan-500",
  },
  {
    title: "Calculator Web App",
    description: "Simple and responsive calculator.",
    tech: ["React.js", "Tailwind CSS"],
    github: "https://github.com/Avinash07x/Calculator.git",
    demo: "https://calculator-blue-theta-18.vercel.app/",
    image: Cal1,
    color: "from-yellow-500 to-orange-500",
  },
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(projects.length);
  const carouselRef = useRef(null);
  const autoPlayRef = useRef(null);

  const infiniteProjects = [...projects, ...projects, ...projects];
  const totalProjects = projects.length;

  const updateCarousel = (index) => {
    const items = carouselRef.current?.children;
    if (!items) return;

    Array.from(items).forEach((item, i) => {
      const diff = i - index;
      const absDiff = Math.abs(diff);

      const translateX = diff * 420;
      const translateZ = -absDiff * 260;
      const scale = Math.max(0.7, 1 - absDiff * 0.18);
      const opacity = Math.max(0.25, 1 - absDiff * 0.3);
      const rotateY = diff * -30;

      item.style.transform = `
        translateX(${translateX}px)
        translateZ(${translateZ}px)
        scale(${scale})
        rotateY(${rotateY}deg)
      `;
      item.style.opacity = opacity;
      item.style.zIndex = 100 - absDiff;
      item.style.filter =
        diff === 0 ? "brightness(1.15)" : "brightness(0.6)";
    });
  };

  const goToSlide = (index) => {
    if (index < 0) index = infiniteProjects.length - 1;
    if (index >= infiniteProjects.length) index = 0;
    setCurrentIndex(index);
    updateCarousel(index);
  };

  const nextSlide = () => goToSlide(currentIndex + 1);
  const prevSlide = () => goToSlide(currentIndex - 1);

  useEffect(() => {
    autoPlayRef.current = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 3500);
    return () => clearInterval(autoPlayRef.current);
  }, []);

  useEffect(() => {
    updateCarousel(currentIndex);
  }, [currentIndex]);

  const actualIndex = currentIndex % totalProjects;
  const currentProject = projects[actualIndex];

  return (
    <section className="min-h-screen bg-gray-900 py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-6xl font-bold text-blue-500">
          Featured Projects
        </h2>
      </div>

      {/* ✅ 3D Carousel */}
      <div className="relative mb-20" style={{ perspective: "2000px", height: "520px" }}>
        <div ref={carouselRef} className="relative w-full h-full" style={{ transformStyle: "preserve-3d" }}>
          {infiniteProjects.map((project, index) => (
            <div
              key={index}
              className="absolute top-1/2 left-1/2 cursor-pointer"
              style={{
                width: "360px",
                height: "480px",
                marginLeft: "-180px",
                marginTop: "-240px",
                transition: "all 0.7s ease",
              }}
              onClick={() => goToSlide(index)}
            >
              {/* ✅ IMAGE CLICK OPENS DEMO */}
              <Link to={project.demo} target="_blank">
                <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-gray-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-[85%] object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-white text-xl font-bold">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* ✅ Navigation */}
        <button onClick={prevSlide} className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/20 p-4 rounded-full">
          <ChevronLeft className="text-white" />
        </button>

        <button onClick={nextSlide} className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/20 p-4 rounded-full">
          <ChevronRight className="text-white" />
        </button>
      </div>

      {/* ✅ Project Info */}
      <div className="max-w-4xl mx-auto bg-gray-800 p-8 rounded-xl text-white">
        <h3 className={`text-3xl font-bold bg-gradient-to-r ${currentProject.color} bg-clip-text text-transparent mb-4`}>
          {currentProject.title}
        </h3>

        <p className="text-gray-300 mb-6">
          {currentProject.description}
        </p>

        <div className="flex gap-4">
          <Link
            to={currentProject.github}
            target="_blank"
            className="flex gap-2 bg-gray-700 px-6 py-3 rounded-lg"
          >
            <Github /> GitHub
          </Link>

          <Link
            to={currentProject.demo}
            target="_blank"
            className={`flex gap-2 bg-gradient-to-r ${currentProject.color} px-6 py-3 rounded-lg`}
          >
            <ExternalLink /> Live Demo
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;