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
  HTML5: htmlLogo,
  CSS3: cssLogo,
  "JavaScript (ES6+)": jsLogo,
  "React.js": reactLogo,
  "Redux Toolkit": reduxLogo,
  Bootstrap: bootstrapLogo,
  "Material UI": muiLogo,
  Vite: viteLogo,
  "Node.js": nodeLogo,
  "Express.js": expressLogo,
  MongoDB: mongoLogo,
  Mongoose: mongooseLogo,
  "JWT Authentication": jwtLogo,
  "REST APIs": restLogo,
  Git: gitLogo,
  GitHub: githubLogo,
  Postman: postmanLogo,
  Vercel: vercelLogo,
};

const groups = [
  {
    icon: Braces,
    title: "Frontend Development",
    description: "Modern, responsive and animated user interfaces.",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "React.js",
      "Tailwind CSS",
      "Vite",
      "Bootstrap",
      "Material UI",
      "Redux Toolkit",
      "Context API",
      "Responsive Design",
      "Framer Motion",
      "GSAP",
      "Lenis",
      "Swiper",
    ],
  },
  {
    icon: ServerCog,
    title: "Backend & API Development",
    description: "Secure APIs, authentication and application logic.",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT Authentication",
      "OAuth",
      "OTP Authentication",
      "Java Backend API Integration",
      "FastAPI",
      "Middleware",
      "API Validation",
      "Error Handling",
      "Nodemailer",
    ],
  },
  {
    icon: Database,
    title: "Databases",
    description: "Structured and scalable application data.",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "Mongoose",
      "SQL",
      "MySQL",
      "Sequelize",
      "Database Design",
      "CRUD",
      "Indexing",
      "Aggregation",
    ],
  },
  {
    icon: Layers3,
    title: "Architecture & Product",
    description: "Production-ready systems and reusable architecture.",
    skills: [
      "RBAC",
      "Protected Routes",
      "Multi-Tenant Architecture",
      "CMS Development",
      "ERP Development",
      "PWA",
      "Electron",
      "File / Media Uploads",
      "Pagination",
      "Search & Filtering",
    ],
  },
  {
    icon: Wrench,
    title: "Integrations & Reporting",
    description: "Payments, realtime systems and business reporting.",
    skills: [
      "Socket.IO",
      "Razorpay",
      "Multer",
      "Third-Party APIs",
      "Recharts",
      "jsPDF",
      "AutoTable",
      "ExcelJS",
      "SheetJS / XLSX",
    ],
  },
  {
    icon: Gauge,
    title: "Tools & Performance",
    description: "Development workflow and production optimization.",
    skills: [
      "Git",
      "GitHub",
      "Postman",
      "Vercel",
      "Performance Optimization",
      "Lazy Loading",
      "Code Splitting",
      "Electron Builder",
      "NSIS",
    ],
  },
];

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      delay: index * 0.06,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

const skillVariants = {
  hidden: {
    opacity: 0,
    y: 10,
    scale: 0.96,
  },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.35,
      delay: Math.min(index * 0.025, 0.22),
    },
  }),
};

export default function Skills() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="skills"
      className="
        relative
        isolate
        overflow-hidden
        bg-white
        px-4
        py-20
        text-[#303030]
        sm:px-6
        lg:px-8
        lg:py-28
      "
    >
      {/* Decorative background */}
      <div
        className="
          pointer-events-none
          absolute
          -right-40
          -top-32
          h-[520px]
          w-[520px]
          rounded-full
          bg-[#45B7FF]/10
          blur-[120px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-40
          -left-40
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#303030]/[0.035]
          blur-[120px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.38]
          [background-image:linear-gradient(rgba(48,48,48,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(48,48,48,.035)_1px,transparent_1px)]
          [background-size:64px_64px]
          [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]
        "
      />

      <div className="relative mx-auto">
        {/* =========================
            HEADING
        ========================== */}
        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 24,
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.65,
          }}
          className="max-w-4xl"
        >
          <div
            className="
              inline-flex
              items-center
              gap-3
              text-[11px]
              font-black
              uppercase
              tracking-[0.2em]
              text-[#168BD2]
            "
          >
            <span className="h-px w-9 bg-[#45B7FF]" />

            Technical Skills
          </div>

          <h2
            className="
              mt-5
              max-w-4xl
              text-[clamp(2.7rem,5vw,5.5rem)]
              font-black
              leading-[0.94]
              tracking-[-0.055em]
              text-[#303030]
            "
          >
            A practical stack for

            <span className="block text-[#45B7FF]">
              shipping real products.
            </span>
          </h2>

          <p
            className="
              mt-6
              max-w-2xl
              text-[15px]
              leading-7
              text-[#6B7280]
              sm:text-base
            "
          >
            From responsive interfaces and scalable APIs to databases,
            authentication, payments, real-time systems, reporting and
            production deployment.
          </p>
        </motion.div>

        {/* =========================
            MAIN GRID
        ========================== */}
        <div
          className="
            mt-12
            grid
            gap-5
            md:mt-14
            lg:grid-cols-2
          "
        >
          {groups.map(
            (
              {
                icon: Icon,
                title,
                description,
                skills,
              },
              groupIndex
            ) => (
              <motion.article
                key={title}
                custom={groupIndex}
                variants={cardVariants}
                initial={reduceMotion ? false : "hidden"}
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.12,
                }}
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        y: -5,
                      }
                }
                className="
                  group/card
                  relative
                  overflow-hidden
                  rounded-[28px]
                  border
                  border-[#E5E7EB]
                  bg-white
                  p-5
                  shadow-[0_14px_45px_rgba(0,0,0,.055)]
                  transition
                  duration-300
                  hover:border-[#45B7FF]/35
                  hover:shadow-[0_25px_65px_rgba(0,0,0,.09)]
                  sm:p-6
                "
              >
                {/* card hover glow */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-24
                    -top-24
                    h-52
                    w-52
                    rounded-full
                    bg-[#45B7FF]/0
                    blur-[65px]
                    transition
                    duration-500
                    group-hover/card:bg-[#45B7FF]/10
                  "
                />

                <div className="relative">
                  {/* Card top */}
                  <div
                    className="
                      flex
                      items-start
                      gap-4
                      border-b
                      border-[#ECEFF2]
                      pb-5
                    "
                  >
                    <motion.span
                      whileHover={
                        reduceMotion
                          ? undefined
                          : {
                              scale: 1.08,
                              rotate: -3,
                            }
                      }
                      className="
                        grid
                        h-12
                        w-12
                        shrink-0
                        place-items-center
                        rounded-2xl
                        border
                        border-[#45B7FF]/15
                        bg-[#45B7FF]/10
                        text-[#168BD2]
                      "
                    >
                      <Icon size={21} />
                    </motion.span>

                    <div className="min-w-0 flex-1">
                      <h3
                        className="
                          text-lg
                          font-black
                          tracking-[-0.02em]
                          text-[#303030]
                          sm:text-xl
                        "
                      >
                        {title}
                      </h3>

                      <p
                        className="
                          mt-1
                          text-xs
                          leading-5
                          text-[#8A929D]
                        "
                      >
                        {description}
                      </p>
                    </div>

                    <span
                      className="
                        hidden
                        rounded-full
                        border
                        border-[#E5E7EB]
                        bg-[#F8FAFC]
                        px-3
                        py-1.5
                        text-[10px]
                        font-black
                        uppercase
                        tracking-[0.11em]
                        text-[#9CA3AF]
                        sm:block
                      "
                    >
                      {skills.length} skills
                    </span>
                  </div>

                  {/* Skills */}
                  <div
                    className="
                      mt-5
                      grid
                      grid-cols-2
                      gap-2.5
                      sm:grid-cols-3
                    "
                  >
                    {skills.map((skill, index) => (
                      <motion.div
                        key={skill}
                        custom={index}
                        variants={skillVariants}
                        initial={
                          reduceMotion
                            ? false
                            : "hidden"
                        }
                        whileInView="visible"
                        viewport={{
                          once: true,
                        }}
                        whileHover={
                          reduceMotion
                            ? undefined
                            : {
                                y: -3,
                                scale: 1.015,
                              }
                        }
                        className="
                          group/skill
                          flex
                          min-h-[62px]
                          items-center
                          gap-2.5
                          rounded-[16px]
                          border
                          border-[#E8EBEF]
                          bg-[#FAFAFA]
                          px-3
                          py-2.5
                          transition
                          duration-300
                          hover:border-[#45B7FF]/40
                          hover:bg-white
                          hover:shadow-[0_8px_26px_rgba(69,183,255,.09)]
                        "
                      >
                        {iconMap[skill] ? (
                          <span
                            className="
                              grid
                              h-9
                              w-9
                              shrink-0
                              place-items-center
                              rounded-xl
                              border
                              border-black/[0.04]
                              bg-white
                            "
                          >
                            <img
                              src={iconMap[skill]}
                              alt={`${skill} logo`}
                              loading="lazy"
                              className="
                                h-6
                                w-6
                                object-contain
                                transition
                                duration-300
                                group-hover/skill:scale-110
                              "
                            />
                          </span>
                        ) : (
                          <span
                            className="
                              grid
                              h-9
                              w-9
                              shrink-0
                              place-items-center
                              rounded-xl
                              bg-[#45B7FF]/10
                              text-[11px]
                              font-black
                              text-[#168BD2]
                              transition
                              duration-300
                              group-hover/skill:bg-[#45B7FF]
                              group-hover/skill:text-white
                            "
                          >
                            {skill.slice(0, 1)}
                          </span>
                        )}

                        <span
                          className="
                            text-[11px]
                            font-bold
                            leading-[1.35]
                            text-[#555D68]
                            transition
                            duration-300
                            group-hover/skill:text-[#303030]
                            sm:text-[12px]
                          "
                        >
                          {skill}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.article>
            )
          )}
        </div>

        {/* =========================
            BOTTOM STATEMENT
        ========================== */}
        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 20,
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.4,
          }}
          transition={{
            duration: 0.6,
          }}
          className="
            mt-8
            flex
            flex-col
            gap-4
            rounded-[24px]
            border
            border-[#E5E7EB]
            bg-[#F8FAFC]
            px-5
            py-5
            sm:flex-row
            sm:items-center
            sm:justify-between
            sm:px-6
          "
        >
          <div>
            <p
              className="
                text-xs
                font-black
                uppercase
                tracking-[0.16em]
                text-[#168BD2]
              "
            >
              Engineering mindset
            </p>

            <p
              className="
                mt-1
                text-sm
                font-semibold
                text-[#5F6670]
              "
            >
              Clean architecture. Maintainable code. Reliable
              production delivery.
            </p>
          </div>

          <span
            className="
              inline-flex
              w-fit
              items-center
              rounded-full
              bg-[#303030]
              px-4
              py-2
              text-[11px]
              font-black
              uppercase
              tracking-[0.11em]
              text-white
            "
          >
            Full Stack Development
          </span>
        </motion.div>
      </div>
    </section>
  );
}