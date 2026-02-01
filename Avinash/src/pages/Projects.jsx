import React, { useState } from "react";
import {
  Github,
  ExternalLink,
  ChevronDown,
  Grid2X2,
  Grid3X3,
  LayoutGrid,
  List,
} from "lucide-react";

/* IMAGES */
import Job1 from "../assets/Job.png";
import Chat1 from "../assets/Chat1.png";
import Emhost1 from "../assets/Emhost1.png";
import Fitness1 from "../assets/GYM.png";
import Wood1 from "../assets/woodland1.png";
import Todo1 from "../assets/Todo.png";
import Weather1 from "../assets/Weather.png";
import Unnatii1 from "../assets/Unnatii5.png";
import DC1 from "../assets/DC1.png";
import Portfolio1 from "../assets/Portfolio4.png";
import Calendar1 from "../assets/Calendar.png";
import Cal1 from "../assets/Calculator.png";
import Kaleo1 from "../assets/Kaleo.png";
import LuxeGlow1 from "../assets/LuxeGlow.png";
import Trend1 from "../assets/Trend.png";
import Financial1 from "../assets/Financial.png";

/* PROJECT DATA */
const projects = [
  {
    title: "Job Portal Website",
    description:
      "A comprehensive job portal website connecting job seekers with employers, featuring job listings, application tracking, and user profiles.",
    tech: ["TypeScript", "React.js", "Tailwind CSS", "Node.js"],
    github: "https://github.com/Avinash07x/Job-Portal.git",
    demo: "https://job-portal-tau-indol.vercel.app/",
    info: [
      "A comprehensive job portal connecting job seekers with employers.",
      "Features job listings, application tracking, and user profiles.",
    ],
    image: Job1,
    color: "from-indigo-500 to-purple-500",
    live: true, // ✅ Added live status
  },
  {
    title: "Real Time Chat Application",
    description:
      "A real-time chat application enabling users to communicate instantly through text messages, with support for multiple chat rooms and user authentication.",
    tech: ["TypeScript","React.js", "Tailwind CSS", "Firebase"],
    github: "https://github.com/Avinash07x/Real-Time-chat-.git",
    demo: "https://real-time-chat-hazel-nine.vercel.app/",
    info: [
      "A real-time chat application enabling users to communicate instantly.",
      "Supports multiple chat rooms and user authentication.",
    ],
    image: Chat1,
    color: "from-indigo-500 to-purple-500",
    live: true, // ✅ Added live status
  },
  {
    title: "Esteemhost – Web Hosting & Domain Services",
    description: "Esteemhost — A web hosting and domain services platform offering reliable hosting solutions, domain registration, and website management tools for businesses and individuals.",
    tech: ["JavaScript","React.js", "Tailwind CSS", "Firebase", "Node.js"],
    github: "https://github.com/Avinash07x/Project-Internship-2.git",
    demo: "https://esteemhost-host.vercel.app/",
    info: [
      "Esteemhost is a web hosting and domain services platform offering reliable hosting solutions, domain registration, and website management tools.",
    ],
    image: Emhost1,
    color: "from-blue-500 to-indigo-500",
    live: true, // ✅ Added live status
  },
  {
    title: "KALEO – Modern Ranch Retreat Website",
    description:
      "Kaleo — A modern ranch retreat website showcasing luxurious accommodations, amenities, and booking options for a serene getaway.",
    tech: ["JavaScript", "React.js", "Tailwind CSS", "Framer Motion", "GSAP"],
    github: "https://github.com/Avinash07x/Travel.git",
    demo: "https://kaleo-three.vercel.app/",
    info: [
      "Kaleo is a modern western ranch retreat offering quiet escapes, open landscapes, soulful experiences, and intentional living—where nature, rhythm, and meaningful gatherings invite guests to slow down and reconnect deeply."
    ],
    image: Kaleo1,
    color: "from-green-400 to-blue-500",
  },
  {
    title: "LuxeGlow - Skincare E-commerce Website",
    description:
      "LuxeGlow — A sleek e-commerce platform for premium skincare products with user-friendly navigation, Package showcases, and secure checkout.",
    tech: ["JavaScript","React.js", "Tailwind CSS", "Framer Motion", "GSAP"],
    github: "https://github.com/Avinash07x/LuxeGlow.git",
    demo: "https://luxe-glow-nine.vercel.app/",
    info: [
      "LuxeGlow is a luxury beauty sanctuary offering expert hair, skin, and bridal treatments. Experience rejuvenating facials, relaxing spa therapies, and personalized services designed to enhance confidence, elegance, and radiant beauty."
    ],
    image: LuxeGlow1,
    color: "from-pink-400 to-purple-500",
  },
  {
    title: "Trend – Curated Looks for Every Occasion",
    description:
      "Trend — A fashion website showcasing curated looks for various occasions, featuring outfit ideas, style tips, and shopping links.",
    tech: ["JavaScript","React.js", "Tailwind CSS", "Framer Motion", "GSAP"],
    github: "https://github.com/Avinash07x/TREND.git",
    demo: "https://trend-flame.vercel.app/",
    info: [
      "Trend is an online fashion destination offering men’s and women’s apparel, from streetwear essentials to premium seasonal collections. Shop the latest trends, elevate your style, and express your unique personality effortlessly."
    ],
    image: Trend1,
    color: "from-yellow-400 to-red-500",
  },
  {
    title: "DC Keepers – Reliable Web Hosting & Digital Solutions",
    description: "DC Keepers — A web hosting and digital solutions platform offering reliable hosting services, domain registration, and website management tools for businesses and individuals.",
    tech: ["JavaScript", "React.js", "Tailwind CSS", "Firebase", "Node.js"],
    github: "https://github.com/Avinash07x/Avinash07x-Internship-Project-1.git",
    demo: "https://digitalcloud-psi.vercel.app/",
    info: [
      "DC Keepers delivers secure, high-performance hosting, cloud, VPS, and server solutions with expert support—helping businesses build, scale, and manage reliable digital infrastructure with confidence."
    ],
    image: DC1,
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Fitness Pro – Modern Gym & Fitness Website",
    description:
      "Fitness Pro — A modern gym and fitness website showcasing services, trainers, class schedules, and membership options.",
    tech: ['JavaScript',"React.js", "Tailwind CSS", "Framer Motion", "GSAP"],
    github: "https://github.com/Avinash07x/Fitness.git",
    demo: "https://fitness-omega-nine.vercel.app/",
    info: [
      "Fitness Pro is a cutting-edge gym and fitness center offering state-of-the-art equipment, expert trainers, and diverse classes. We provide personalized training programs, nutrition guidance, and wellness services to help members achieve their health and fitness goals."
    ],
    image: Fitness1,
    color: "from-red-400 to-yellow-500",
  },
  {
    title: "WOODLAND – Architecture & Interior Design Studio",
    description:
      "Woodland — A modern architecture and interior design studio website showcasing portfolio, services, and client testimonials.",
    tech: ["JavaScript","React.js", "Tailwind CSS", "Framer Motion", "GSAP"],
    github: "https://github.com/Avinash07x/Woodland.git",
    demo: "https://woodland-three.vercel.app/",
    info: [
      "Woodland is an architecture and interior design studio creating purposeful, sustainable spaces. Through integrated design, thoughtful planning, and project management, we craft environments deeply connected to people, function, and place."
    ],
    image: Wood1,
    color: "from-gray-500 to-green-500",
  },
  {
    title: "Unnatii – Premium Real Estate & Residential Projects",
    description: "Unnatii — A real estate website showcasing premium residential projects, property listings, and client services.",
    tech: ["JavaScript", "React.js", "Tailwind CSS", "React Router"],
    github: "https://github.com/Avinash07x/Unnatii/tree/main/frontend",
    demo: "https://unnatii.vercel.app/",
    info: [
      "Unnatii is a Jaipur-based real estate company offering premium residential properties, expert consultancy, and modern amenities. They help clients invest wisely, find dream homes, and ensure seamless property transactions."
    ],
    image: Unnatii1,
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Personal Portfolio Website",
    description: "Personal portfolio showcasing projects and skills.",
    tech: ["JavaScript", "React.js", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/Avinash07x/Avinashx2.git",
    demo: "https://avinashx2.vercel.app/",
    info: [
      "Showcases my skills, projects, and experience as a developer.",
      "Responsive design for all devices",
      "Interactive UI with smooth animations",
      "Contact form for inquiries"
    ],
    image: Portfolio1,
    color: "from-indigo-500 to-purple-500",
  },
  {
    title: "Responsive Weather App",
    description: "Weather app providing real-time forecasts and conditions.",
    tech: ["JavaScript", "React.js", "Tailwind CSS", "Weather API"],
    github: "https://github.com/Avinash07x/weather",
    demo: "https://weather-lemon-delta.vercel.app/",
    info: [
      "Real-time weather data",
      "Responsive design for all devices",
      "Search by city name",
      "5-day weather forecast"
    ],
    image: Weather1,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Todo App with Progress Tracker",
    description:
      "Todo app featuring CRUD operations and progress tracking.",
    tech: ["JavaScript", "React.js", "Tailwind CSS", "Local Storage"],
    github: "https://github.com/Avinash07x/Todo/tree/main/TODO",
    demo: "https://todo-mu-peach.vercel.app/",
    info: [
      "Add, edit, delete tasks",
      "Mark tasks as completed",
      "Progress tracking with visual indicators",
      "Data persistence using Local Storage"
    ],
    image: Todo1,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Advanced Calendar App",
    description: "Calendar app with event management features.",
    tech: ['JavaScript',"React.js", "Tailwind CSS", "Date-fns"],
    github: "https://github.com/Avinash07x/Calendar.git",
    demo: "https://calendar-beta-wheat.vercel.app/",
    info: [
      "Event creation & editing",
      "Date management with Date-fns",
      "Responsive calendar UI"
    ],
    image: Calendar1,
    color: "from-green-500 to-teal-500",
  },
  {
    title: "Financial Calculator App",
    description: "Calculator app for financial calculations and analysis.",
    tech: ["JavaScript","React.js", "Tailwind CSS"],
    github: "https://github.com/Avinash07x/Financial-Calculator-Suite.git",
    demo: "https://financial-calculator-suite-six.vercel.app/",
    info: [
      "Financial calculations (loan, investment, retirement)",
      "User-friendly interface",
      "Responsive design for all devices"
    ],
    image: Financial1,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Simple Calculator",
    description: "Calculator app for basic arithmetic operations.",
    tech: ["JavaScript","React.js", "Tailwind CSS"],
    github: "https://github.com/Avinash07x/Calculator.git",
    demo: "https://calculator-blue-theta-18.vercel.app/",
    info: [
      "Basic arithmetic operations",
      "Responsive design for all devices",
      "Clear and intuitive UI"
    ],
    image: Cal1,
    color: "from-yellow-500 to-orange-500",
  },
];

const Projects = () => {
  const [openInfo, setOpenInfo] = useState(null);
  const [view, setView] = useState("2");

  const iconClass = (active) =>
    `p-2 rounded-lg border transition ${
      active
        ? "bg-blue-500 text-white border-blue-500"
        : "bg-gray-800 text-gray-400 border-gray-700 hover:text-white"
    }`;

  return (
    <section id="projects" className="py-16 sm:py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* TITLE */}
        <h2 className="text-3xl sm:text-5xl font-bold text-center mb-8 sm:mb-10 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
          Featured Projects
        </h2>

        {/* VIEW TOGGLE */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <button onClick={() => setView("2")} className={iconClass(view === "2")}>
            <Grid2X2 size={18} />
          </button>
          <button onClick={() => setView("3")} className={iconClass(view === "3")}>
            <Grid3X3 size={18} />
          </button>
          <button onClick={() => setView("4")} className={iconClass(view === "4")}>
            <LayoutGrid size={18} />
          </button>
          <button
            onClick={() => setView("list")}
            className={iconClass(view === "list")}
          >
            <List size={18} />
          </button>
        </div>

        {/* GRID */}
        <div
          className={`grid gap-6 sm:gap-8 ${
            view === "2"
              ? "grid-cols-1 sm:grid-cols-2"
              : view === "3"
              ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
              : view === "4"
              ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
              : "grid-cols-1"
          }`}
        >
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`bg-gray-800 rounded-2xl border border-white p-4 sm:p-6 border border-gray-700 transition ${
                view === "list" ? "flex flex-col sm:flex-row gap-5" : "hover:-translate-y-2"
              }`}
            >
              {/* IMAGE */}
              <img
                src={project.image}
                alt={project.title}
                className={`rounded-xl border border-white object-cover w-full ${
                  view === "list" ? "sm:w-64 h-44 sm:h-40" : "h-48 sm:h-56"
                }`}
              />

              {/* CONTENT */}
              <div className="flex-1">
                {/* Live Badge */}
                {project.live && (
                  <span className="inline-block bg-green-500 mt-4 text-white text-sm font-bold font-sans px-3 py-2 rounded-full border border-white">
                    &#9733; Live Now
                  </span>
                )}

                <h3
                  className={`text-lg sm:text-xl font-bold mt-4 bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}
                >
                  {project.title}
                </h3>

                <p className="text-gray-300 my-3 text-sm sm:text-base">
                  {project.description}
                </p>

                {/* TECH STACK */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-700 border border-black px-3 py-1 rounded-full text-xs sm:text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* INFO TOGGLE */}
                <button
                  onClick={() =>
                    setOpenInfo(openInfo === index ? null : index)
                  }
                  className="flex items-center gap-2 text-blue-400 text-sm mb-3"
                >
                  Project Info
                  <ChevronDown
                    size={16}
                    className={`transition ${openInfo === index ? "rotate-180" : ""}`}
                  />
                </button>

                {openInfo === index && (
                  <ul className="list-disc pl-5 text-gray-300 text-sm mb-3 space-y-1">
                    {project.info.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}

                {/* LINKS */}
                <div className="flex flex-wrap gap-4 mt-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-blue-400 text-sm"
                  >
                    <Github size={16} /> GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-blue-400 text-sm"
                  >
                    <ExternalLink size={16} /> Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
