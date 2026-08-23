import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Braces,
  Database,
  Gauge,
  Layers3,
  ServerCog,
  Wrench,
} from "lucide-react";

import htmlLogo from "../assets/html.png";
import cssLogo from "../assets/css.png";
import jsLogo from "../assets/javascript.png";
import reactLogo from "../assets/react.png";
import reduxLogo from "../assets/redux.png";
import bootstrapLogo from "../assets/bootstrap.png";
import muiLogo from "../assets/mui.png";
import viteLogo from "../assets/vite.png";
import nodeLogo from "../assets/node.png";
import expressLogo from "../assets/express.png";
import mongoLogo from "../assets/mongodb.png";
import mongooseLogo from "../assets/mongoose.png";
import jwtLogo from "../assets/jwt.png";
import restLogo from "../assets/rest api.png";
import gitLogo from "../assets/git.png";
import githubLogo from "../assets/github.png";
import postmanLogo from "../assets/postman.png";
import vercelLogo from "../assets/Vercel.png";

const iconMap = {
  "HTML5": htmlLogo,
  "CSS3": cssLogo,
  "JavaScript (ES6+)": jsLogo,
  "React.js": reactLogo,
  "Redux Toolkit": reduxLogo,
  "Bootstrap": bootstrapLogo,
  "Material UI": muiLogo,
  "Vite": viteLogo,
  "Node.js": nodeLogo,
  "Express.js": expressLogo,
  "MongoDB": mongoLogo,
  "Mongoose": mongooseLogo,
  "JWT Authentication": jwtLogo,
  "REST APIs": restLogo,
  "Git": gitLogo,
  "GitHub": githubLogo,
  "Postman": postmanLogo,
  "Vercel": vercelLogo,
};

const groups = [
  {
    icon: Braces,
    title: "Frontend Development",
    skills: [
      "HTML5","CSS3","JavaScript (ES6+)","React.js","Tailwind CSS","Vite",
      "Bootstrap","Material UI","Redux Toolkit","Context API","Responsive Design",
      "Framer Motion","GSAP","Lenis","Swiper"
    ],
  },
  {
    icon: ServerCog,
    title: "Backend & API Development",
    skills: [
      "Node.js","Express.js","REST APIs","JWT Authentication","OAuth",
      "OTP Authentication","Java Backend API Integration","FastAPI","Middleware",
      "API Validation","Error Handling","Nodemailer"
    ],
  },
  {
    icon: Database,
    title: "Databases",
    skills: [
      "PostgreSQL","MongoDB","Mongoose","SQL","MySQL","Sequelize",
      "Database Design","CRUD","Indexing","Aggregation"
    ],
  },
  {
    icon: Layers3,
    title: "Architecture & Product",
    skills: [
      "RBAC","Protected Routes","Multi-Tenant Architecture","CMS Development",
      "ERP Development","PWA","Electron","File / Media Uploads","Pagination",
      "Search & Filtering"
    ],
  },
  {
    icon: Wrench,
    title: "Integrations & Reporting",
    skills: [
      "Socket.IO","Razorpay","Multer","Third-Party APIs","Recharts",
      "jsPDF","AutoTable","ExcelJS","SheetJS / XLSX"
    ],
  },
  {
    icon: Gauge,
    title: "Tools & Performance",
    skills: [
      "Git","GitHub","Postman","Vercel","Performance Optimization",
      "Lazy Loading","Code Splitting","Electron Builder","NSIS"
    ],
  },
];

export default function Skills() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="skills" className="relative overflow-hidden bg-[#111111] px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-28">
      <div className="skills-blue-glow pointer-events-none absolute -right-40 top-10 h-[28rem] w-[28rem] rounded-full" />
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[.18em] text-[#7CCBFF]">
            <span className="h-px w-8 bg-[#45B7FF]" />
            Technical Skills
          </div>
          <h2 className="mt-5 text-[clamp(2.7rem,5vw,5.5rem)] font-black leading-[.94] tracking-[-.055em]">
            A practical stack for
            <span className="block text-[#45B7FF]">shipping real products.</span>
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-[#9CA3AF]">
            From responsive interfaces and APIs to databases, authentication,
            payments, reporting, real-time features and deployment.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {groups.map(({ icon: Icon, title, skills }, groupIndex) => (
            <motion.article
              key={title}
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ delay: groupIndex * 0.04 }}
              className="rounded-[28px] border border-white/10 bg-[#181818] p-5 shadow-[0_22px_60px_rgba(0,0,0,.2)] sm:p-6"
            >
              <div className="flex items-center gap-3 border-b border-white/8 pb-5">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#45B7FF]/10 text-[#7CCBFF]">
                  <Icon size={20} />
                </span>
                <div>
                  <p className="text-lg font-black">{title}</p>
                  <p className="text-xs text-[#6B7280]">{skills.length} capabilities</p>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: Math.min(index, 8) * 0.025 }}
                    className="group flex min-h-14 items-center gap-2.5 rounded-2xl border border-white/8 bg-white/[0.035] px-3 py-2.5 transition duration-300 hover:-translate-y-0.5 hover:border-[#45B7FF]/35 hover:bg-[#45B7FF]/[.06]"
                  >
                    {iconMap[skill] ? (
                      <img
                        src={iconMap[skill]}
                        alt=""
                        className="h-6 w-6 shrink-0 object-contain transition duration-300 group-hover:scale-110"
                        loading="lazy"
                      />
                    ) : (
                      <span className="grid h-6 w-6 shrink-0 place-items-center rounded-lg bg-[#45B7FF]/10 text-[10px] font-black text-[#7CCBFF]">
                        {skill.slice(0, 1)}
                      </span>
                    )}
                    <span className="text-[12px] font-bold leading-4 text-[#D1D5DB]">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
