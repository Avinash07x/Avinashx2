import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Github, ExternalLink, ChevronDown, Building2, Code2, Rocket, Layers3 } from "lucide-react";

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



const resumeProjects = [
  {
    title: "NirmanX",
    subtitle: "Construction Management & Workforce ERP Platform",
    tech: ["React.js", "Node.js", "Express.js", "PostgreSQL", "Sequelize", "JWT", "Socket.IO", "Razorpay", "Electron"],
    description:
      "A full-stack ERP for project management, workforce, GPS attendance, inventory, procurement, payroll and accounting with multi-role authentication, real-time workflows and reporting.",
    accent: "ERP",
  },
  {
    title: "GetViralNews",
    subtitle: "Multi-Tenant News Publishing SaaS",
    tech: ["React.js", "Node.js", "Express.js", "PostgreSQL", "JWT", "PWA"],
    description:
      "A scalable multi-tenant publishing SaaS with Super Admin and Tenant Admin systems, permission-controlled modules, dynamic branding, E-Paper, subscriptions and optimized frontend delivery.",
    accent: "SaaS",
  },
  {
    title: "Indeora Voyages",
    subtitle: "Travel CMS & Booking Website",
    tech: ["React.js", "Vite", "Tailwind CSS", "Framer Motion", "Node.js", "Express.js", "PostgreSQL", "JWT", "Multer"],
    description:
      "A CMS-driven travel platform for destinations, yoga retreats, blogs, itineraries, FAQs and quotation requests with reusable responsive sections, dynamic media and Admin/Superadmin controls.",
    accent: "CMS",
  },
  {
    title: "DocOrbit",
    subtitle: "Healthcare Management & Super Admin Platform",
    tech: ["React.js", "Vite", "Tailwind CSS", "Recharts", "jsPDF", "REST APIs", "Java Backend"],
    description:
      "A healthcare frontend integrated with Java backend APIs for clinics, doctors, patients, appointments, subscriptions and employees with protected modules, reporting and responsive dashboards.",
    accent: "Health",
  },
  {
    title: "Uddan",
    subtitle: "Corporate Website & Content Management Platform",
    tech: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "PostgreSQL", "JWT", "Multer", "GSAP", "Lenis"],
    description:
      "A full-stack corporate website with secure Admin CMS for services, projects, blogs, careers, FAQs and testimonials, including uploads, recruitment workflows and responsive motion.",
    accent: "CMS",
  },
  {
    title: "Uddan Pro Extractor",
    subtitle: "Google Maps Lead Extraction & Licensing Desktop App",
    tech: ["React.js", "Vite", "Electron", "Electron Builder", "NSIS", "Recharts", "SheetJS", "jsPDF"],
    description:
      "A Windows desktop application for extracting and managing Google Maps business leads with filtering, analytics, duplicate detection, Excel/PDF export and machine-bound licensing.",
    accent: "Desktop",
  },
];


const Projects = () => {
  const reduceMotion = useReducedMotion();
  const [openInfo, setOpenInfo] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <section id="projects" className="bg-white px-4 py-20 text-[#303030] sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[.18em] text-[#168BD2]">
              <span className="h-px w-8 bg-[#45B7FF]" />
              Featured Projects
            </div>
            <h2 className="mt-5 text-[clamp(2.7rem,5vw,5.5rem)] font-black leading-[.94] tracking-[-.055em]">
              Production work first.
              <span className="block text-[#45B7FF]">Portfolio work preserved.</span>
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-[#6B7280] sm:text-base">
            Resume projects highlight real SaaS, ERP, CMS, healthcare and desktop-product experience.
            Below them, all existing portfolio projects remain available.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {resumeProjects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={reduceMotion ? false : { opacity: 0, y: 26, scale: 0.985 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: index * 0.045 }}
              className="project-feature-card group relative overflow-hidden rounded-[28px] border border-black/8 bg-[#111111] p-6 text-white shadow-[0_20px_60px_rgba(0,0,0,.13)] sm:p-7"
            >
              <div className="project-card-spotlight pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100" />
              <div className="relative">
                <div className="flex items-start justify-between gap-4">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/[0.06] text-[#7CCBFF]">
                    {index % 3 === 0 ? <Building2 size={21}/> : index % 3 === 1 ? <Layers3 size={21}/> : <Rocket size={21}/>}
                  </span>
                  <span className="rounded-full border border-[#45B7FF]/25 bg-[#45B7FF]/10 px-3 py-1 text-[10px] font-black uppercase tracking-[.12em] text-[#7CCBFF]">
                    {project.accent}
                  </span>
                </div>

                <h3 className="mt-8 text-3xl font-black tracking-[-.035em]">{project.title}</h3>
                <p className="mt-1 text-sm font-bold text-[#7CCBFF]">{project.subtitle}</p>
                <p className="mt-4 text-sm leading-6 text-[#AEB4BE]">{project.description}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="rounded-full border border-white/10 bg-white/[0.045] px-3 py-1.5 text-[11px] font-bold text-[#D1D5DB]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-20 flex items-end justify-between gap-5 border-t border-black/8 pt-10">
          <div>
            <p className="text-xs font-black uppercase tracking-[.16em] text-[#168BD2]">More work</p>
            <h3 className="mt-2 text-3xl font-black tracking-[-.03em]">Original portfolio projects</h3>
          </div>
          <span className="hidden text-sm font-bold text-[#9CA3AF] sm:block">{projects.length} projects</span>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {visibleProjects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.5, delay: (index % 6) * 0.04 }}
              className="group overflow-hidden rounded-[26px] border border-black/8 bg-[#F9FAFB] transition duration-300 hover:-translate-y-1.5 hover:border-[#45B7FF]/35 hover:bg-white hover:shadow-[0_18px_50px_rgba(0,0,0,.09)]"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[#E5E7EB]">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.045]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-65" />
                <div className="absolute bottom-3 left-3 flex gap-2">
                  {project.live ? (
                    <span className="rounded-full bg-white px-2.5 py-1 text-[9px] font-black uppercase tracking-[.1em] text-[#303030]">
                      Live
                    </span>
                  ) : null}
                </div>
              </div>

              <div className="p-5">
                <h4 className="text-xl font-black leading-6 tracking-[-.025em]">{project.title}</h4>
                <p className="mt-3 line-clamp-3 text-sm leading-6 text-[#6B7280]">{project.description}</p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tech.slice(0, 5).map((tech) => (
                    <span key={tech} className="rounded-full border border-black/8 bg-white px-2.5 py-1 text-[10px] font-bold text-[#6B7280]">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex items-center gap-2 border-t border-black/8 pt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-10 items-center gap-2 rounded-full border border-black/10 px-3.5 text-xs font-black transition hover:border-[#45B7FF] hover:text-[#168BD2]"
                  >
                    <Github size={15}/> Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-10 items-center gap-2 rounded-full bg-[#303030] px-3.5 text-xs font-black text-white transition hover:bg-[#45B7FF]"
                  >
                    <ExternalLink size={15}/> Live
                  </a>
                  <button
                    type="button"
                    onClick={() => setOpenInfo(openInfo === index ? null : index)}
                    className="ml-auto grid h-10 w-10 place-items-center rounded-full border border-black/10 text-[#6B7280] transition hover:border-[#45B7FF] hover:text-[#168BD2]"
                    aria-label={`More about ${project.title}`}
                  >
                    <ChevronDown size={17} className={`transition ${openInfo === index ? "rotate-180" : ""}`} />
                  </button>
                </div>

                <div className={`grid transition-[grid-template-rows,opacity] duration-300 ${openInfo === index ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden">
                    <ul className="mt-4 space-y-2 rounded-2xl bg-white p-4 text-xs leading-5 text-[#6B7280]">
                      {project.info.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#45B7FF]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {projects.length > 6 ? (
          <div className="mt-9 text-center">
            <button
              type="button"
              onClick={() => setShowAll((value) => !value)}
              className="inline-flex h-12 items-center gap-2 rounded-full border border-[#303030] px-5 text-sm font-black transition hover:border-[#45B7FF] hover:text-[#168BD2]"
            >
              {showAll ? "Show fewer projects" : `View all ${projects.length} projects`}
              <ChevronDown size={16} className={`transition ${showAll ? "rotate-180" : ""}`} />
            </button>
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default Projects;
