import React, { useState } from "react";
import { Github, ExternalLink, Figma, Play, ChevronDown } from "lucide-react";

/* IMAGES */
import Wood1 from "../assets/woodland.png";
import Todo1 from "../assets/Todo.png";
import Weather1 from "../assets/Weather.png";
import Unnatii1 from "../assets/Unnatii1.png";
import DC1 from "../assets/DC.png";
import Portfolio1 from "../assets/Portfolio.png";
import Calendar1 from "../assets/Calendar.png";
import Cal1 from "../assets/Calculator.png";


/* PROJECT DATA */
const projects = [
  {
    title: "Woodland",
    description:
      "Woodland Architecture Firm — A modern architecture and interior-design studio offering building design, interior styling, layout planning and project management.",
    tech: ["React.js", "Tailwind CSS", "Framer Motion", "GSAP"],
    github: "https://github.com/Avinash07x/Woodland.git",
    demo: "https://woodland-three.vercel.app/",
    info: [
      "Client-focused architecture website",
      "Smooth GSAP + Framer Motion animations",
      "Fully responsive layout",
      "SEO-friendly structure"
    ],
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
    info: [
      "CRUD functionality",
      "Light/Dark mode toggle",
      "Progress tracking",
      "Local storage persistence"
    ],
    image: Todo1,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Real-Time Weather App",
    description: "Responsive weather app with real-time API integration.",
    tech: ["React.js", "Tailwind CSS", "Weather API"],
    github: "https://github.com/Avinash07x/weather",
    demo: "https://weather-lemon-delta.vercel.app/",
    info: ["Real-time API integration", "Responsive design", "Error handling"],
    image: Weather1,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Unnatii Real Estate",
    description: "Real estate web app with property listings & filters.",
    tech: ["React.js", "Tailwind CSS", "React Router"],
    github: "https://github.com/Avinash07x/Unnatii/tree/main/frontend",
    demo: "https://unnatii.vercel.app/",
    info: [
      "Property listing & filters",
      "Responsive design",
      "React Router navigation"
    ],
    image: Unnatii1,
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "DC Keepers",
    description: "Task management app with authentication.",
    tech: ["React.js", "Tailwind CSS", "Axios"],
    github: "https://github.com/Avinash07x/Avinash07x-Internship-Project-1.git",
    demo: "https://digitalcloud-psi.vercel.app/",
    info: [
      "User authentication",
      "Task CRUD operations",
      "Responsive UI"
    ],
    image: DC1,
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Portfolio Website",
    description: "Showcase of skills & projects.",
    tech: ["React.js", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/Avinash07x/Avinash.git",
    demo: "https://avinash-theta.vercel.app/",
    info: [
      "Portfolio showcase",
      "Project sections with animations",
      "Responsive design"
    ],
    image: Portfolio1,
    color: "from-indigo-500 to-purple-500",
  },
  {
    title: "Calendar App",
    description: "Advanced calendar with event management.",
    tech: ["React.js", "Tailwind CSS", "Date-fns"],
    github: "https://github.com/Avinash07x/Calendar.git",
    demo: "https://calendar-beta-wheat.vercel.app/",
    info: [
      "Event creation & editing",
      "Date management with Date-fns",
      "Responsive calendar UI"
    ],
    image: Calendar1,
    color: "from-teal-500 to-cyan-500",
  },
  {
    title: "Calculator Web App",
    description: "Simple and responsive calculator.",
    tech: ["React.js", "Tailwind CSS"],
    github: "https://github.com/Avinash07x/Calculator.git",
    demo: "https://calculator-blue-theta-18.vercel.app/",
    info: [
      "Basic arithmetic operations",
      "Responsive layout",
      "Lightweight and fast"
    ],
    image: Cal1,
    color: "from-yellow-500 to-orange-500",
  },
];

/* COMPONENT */
const Projects = () => {
  const [openInfo, setOpenInfo] = useState(null);
  const [openVideo, setOpenVideo] = useState(null);

  return (
    <>
      <section id="projects" className="py-24 bg-gray-900">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:-translate-y-2 transition"
              >
                {/* IMAGE */}
                <div className="relative mb-6">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 object-cover rounded-xl"
                  />
                </div>

                {/* TITLE */}
                <h3
                  className={`text-2xl font-bold mb-3 bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}
                >
                  {project.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-gray-300 mb-4">{project.description}</p>

                {/* TECH */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* INFO */}
                {project.info && (
                  <>
                    <button
                      onClick={() =>
                        setOpenInfo(openInfo === index ? null : index)
                      }
                      className="flex items-center gap-2 text-blue-400 font-semibold mb-3"
                    >
                      Project Info
                      <ChevronDown
                        className={`transition ${openInfo === index ? "rotate-180" : ""
                          }`}
                      />
                    </button>

                    {openInfo === index && (
                      <ul className="list-disc pl-5 text-gray-300 mb-4 space-y-1">
                        {project.info.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </>
                )}

                {/* LINKS */}
                <div className="flex gap-4 flex-wrap mb-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-blue-400 hover:text-purple-400"
                    >
                      <Github size={18} /> GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-blue-400 hover:text-purple-400"
                    >
                      <ExternalLink size={18} /> Live
                    </a>
                  )}
                  {project.figma && (
                    <a
                      href={project.figma}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-blue-400 hover:text-purple-400"
                    >
                      <Figma size={18} /> Figma
                    </a>
                  )}
                </div>

                {/* VIDEO MODAL */}
                {openVideo === index && project.video && (
                  <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
                    <div className="relative w-full h-full max-w-7xl max-h-full">
                      <button
                        onClick={() => setOpenVideo(null)}
                        className="absolute top-4 right-6 text-white text-3xl z-50"
                      >
                        ✕
                      </button>

                      {project.video.endsWith(".mp4") ? (
                        <video
                          src={project.video}
                          controls
                          autoPlay
                          className="w-full h-full object-contain rounded-lg"
                        />
                      ) : (
                        <iframe
                          src={project.video}
                          title={project.title}
                          className="w-full h-full rounded-lg"
                          allowFullScreen
                        />
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
