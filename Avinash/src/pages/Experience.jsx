import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  BadgeCheck,
  BriefcaseBusiness,
  CalendarDays,
  MapPin,
  Sparkles,
} from "lucide-react";

const experienceData = [
  {
    role: "Full Stack Engineer",
    company: "Uddan Promotions Pvt. Ltd.",
    period: "Present",
    location: "Jaipur, Rajasthan, India",
    current: true,
    points: [
      "Develop and maintain production-grade React.js/Vite/Tailwind CSS applications and Node.js/Express.js backend systems with reusable architecture, responsive UX and reliable production behavior.",
      "Contribute across SaaS, ERP, CMS, analytics, licensing, payment and real-time workflows on NirmanX, GetViralNews, Indeora Voyages, Uddan corporate/CMS systems and Uddan Pro Extractor.",
      "Implement JWT/OAuth/OTP authentication, role-based routing, protected routes, file/media uploads, API validation and reusable error-handling patterns.",
      "Integrate PostgreSQL and MongoDB-backed REST APIs, Java backend services, Razorpay, Socket.IO and reporting libraries while improving loading performance and code splitting.",
    ],
    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "MongoDB",
      "Razorpay",
      "Socket.IO",
    ],
  },
  {
    role: "Full Stack Developer Intern",
    company: "Site Worx Infotech",
    period: "Feb 2025 – Jul 2025",
    location: "Jaipur, Rajasthan, India",
    current: false,
    points: [
      "Built responsive React.js and Tailwind CSS interfaces, Node.js/Express.js backend features, REST API integrations, database workflows and real-time chat functionality.",
      "Collaborated through Git/GitHub, performed QA/testing and resolved UI and API issues prior to release.",
      "Led and coordinated interns on the DC Keepers project by assigning tasks, reviewing progress and supporting timely delivery.",
    ],
    tags: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "REST APIs",
      "MongoDB",
      "Git/GitHub",
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 38,
    scale: 0.985,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const pointVariants = {
  hidden: {
    opacity: 0,
    x: -12,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.38,
      ease: "easeOut",
    },
  },
};

export default function Experience() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="experience"
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
      {/* soft background decoration */}
      <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-28
          h-[420px]
          w-[420px]
          rounded-full
          bg-[#45B7FF]/[0.07]
          blur-[120px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-48
          bottom-20
          h-[460px]
          w-[460px]
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
          opacity-[0.3]
          [background-image:linear-gradient(rgba(48,48,48,.025)_1px,transparent_1px),linear-gradient(90deg,rgba(48,48,48,.025)_1px,transparent_1px)]
          [background-size:68px_68px]
          [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)]
        "
      />

      <div className="relative mx-auto">
        {/* heading */}
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
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mx-auto text-center"
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
            <span className="h-px w-8 bg-[#45B7FF]" />

            Work Experience

            <span className="h-px w-8 bg-[#45B7FF]" />
          </div>

          <h2
            className="
              mt-5
              text-[clamp(2.7rem,5vw,5.4rem)]
              font-black
              leading-[0.94]
              tracking-[-0.055em]
            "
          >
            Building, debugging and shipping

            <span className="block text-[#45B7FF]">
              in real product teams.
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-6
              text-[15px]
              leading-7
              text-[#6B7280]
              sm:text-base
            "
          >
            Hands-on experience across production applications, SaaS,
            ERP, CMS, APIs, databases, payments, real-time systems and
            product delivery.
          </p>
        </motion.div>

        {/* timeline */}
        <motion.div
          variants={containerVariants}
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.08,
          }}
          className="
            relative
            mx-auto
            mt-14
            sm:mt-16
          "
        >
          {/* base timeline */}
          <div
            className="
              absolute
              left-[20px]
              top-6
              hidden
              h-[calc(100%-48px)]
              w-px
              bg-[#E5E7EB]
              sm:block
            "
          />

          {/* animated blue timeline */}
          {!reduceMotion && (
            <motion.div
              initial={{
                scaleY: 0,
              }}
              whileInView={{
                scaleY: 1,
              }}
              viewport={{
                once: true,
                amount: 0.1,
              }}
              transition={{
                duration: 1.25,
                ease: [0.16, 1, 0.3, 1],
              }}
              style={{
                transformOrigin: "top",
              }}
              className="
                absolute
                left-[20px]
                top-6
                hidden
                h-[calc(100%-48px)]
                w-px
                bg-gradient-to-b
                from-[#45B7FF]
                via-[#7CCBFF]
                to-[#45B7FF]/10
                sm:block
              "
            />
          )}

          <div className="space-y-7 sm:space-y-9">
            {experienceData.map((item, index) => (
              <motion.article
                key={`${item.company}-${item.period}`}
                variants={cardVariants}
                className="
                  relative
                  sm:pl-16
                "
              >
                {/* timeline marker */}
                <motion.div
                  initial={
                    reduceMotion
                      ? false
                      : {
                          scale: 0.65,
                          opacity: 0,
                        }
                  }
                  whileInView={{
                    scale: 1,
                    opacity: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.45,
                    delay: 0.15 + index * 0.08,
                  }}
                  className="
                    absolute
                    left-0
                    top-7
                    hidden
                    sm:block
                  "
                >
                  <span
                    className="
                      relative
                      grid
                      h-10
                      w-10
                      place-items-center
                      rounded-full
                      border-[5px]
                      border-white
                      bg-[#303030]
                      text-white
                      shadow-[0_0_0_1px_rgba(69,183,255,.35),0_8px_24px_rgba(0,0,0,.12)]
                    "
                  >
                    {item.current && (
                      <span
                        className="
                          absolute
                          inset-[-8px]
                          rounded-full
                          border
                          border-[#45B7FF]/30
                        "
                      />
                    )}

                    <BriefcaseBusiness size={16} />
                  </span>
                </motion.div>

                {/* card */}
                <motion.div
                  whileHover={
                    reduceMotion
                      ? undefined
                      : {
                          y: -6,
                        }
                  }
                  transition={{
                    type: "spring",
                    stiffness: 280,
                    damping: 24,
                  }}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[28px]
                    border
                    border-[#E5E7EB]
                    bg-white
                    p-5
                    shadow-[0_18px_55px_rgba(0,0,0,.055)]
                    transition
                    duration-300
                    hover:border-[#45B7FF]/35
                    hover:shadow-[0_28px_70px_rgba(0,0,0,.09)]
                    sm:p-7
                    lg:p-8
                  "
                >
                  {/* top glow */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      -right-24
                      -top-24
                      h-56
                      w-56
                      rounded-full
                      bg-[#45B7FF]/0
                      blur-[70px]
                      transition
                      duration-500
                      group-hover:bg-[#45B7FF]/10
                    "
                  />

                  {/* top accent line */}
                  <div
                    className="
                      absolute
                      left-0
                      top-0
                      h-[3px]
                      w-0
                      bg-gradient-to-r
                      from-[#45B7FF]
                      via-[#7CCBFF]
                      to-transparent
                      transition-all
                      duration-700
                      group-hover:w-full
                    "
                  />

                  <div className="relative">
                    {/* card header */}
                    <div
                      className="
                        flex
                        flex-col
                        gap-5
                        border-b
                        border-[#ECEFF2]
                        pb-6
                        lg:flex-row
                        lg:items-start
                        lg:justify-between
                      "
                    >
                      <div>
                        <div
                          className="
                            flex
                            flex-wrap
                            items-center
                            gap-2.5
                          "
                        >
                          <h3
                            className="
                              text-2xl
                              font-black
                              tracking-[-0.03em]
                              sm:text-[28px]
                            "
                          >
                            {item.role}
                          </h3>

                          {item.current && (
                            <motion.span
                              initial={
                                reduceMotion
                                  ? false
                                  : {
                                      opacity: 0,
                                      scale: 0.9,
                                    }
                              }
                              whileInView={{
                                opacity: 1,
                                scale: 1,
                              }}
                              viewport={{
                                once: true,
                              }}
                              className="
                                inline-flex
                                items-center
                                gap-1.5
                                rounded-full
                                border
                                border-[#45B7FF]/20
                                bg-[#45B7FF]/10
                                px-3
                                py-1.5
                                text-[10px]
                                font-black
                                uppercase
                                tracking-[0.11em]
                                text-[#168BD2]
                              "
                            >
                              <BadgeCheck size={13} />

                              Current
                            </motion.span>
                          )}
                        </div>

                        <p
                          className="
                            mt-2
                            text-base
                            font-black
                            text-[#168BD2]
                          "
                        >
                          {item.company}
                        </p>
                      </div>

                      <div
                        className="
                          flex
                          flex-wrap
                          gap-2
                          text-xs
                          font-bold
                          text-[#6B7280]
                        "
                      >
                        <motion.span
                          whileHover={
                            reduceMotion
                              ? undefined
                              : {
                                  y: -2,
                                }
                          }
                          className="
                            inline-flex
                            items-center
                            gap-1.5
                            rounded-full
                            border
                            border-[#E5E7EB]
                            bg-[#F9FAFB]
                            px-3
                            py-2
                            transition
                            hover:border-[#45B7FF]/30
                            hover:bg-white
                          "
                        >
                          <CalendarDays
                            size={14}
                            className="text-[#168BD2]"
                          />

                          {item.period}
                        </motion.span>

                        <motion.span
                          whileHover={
                            reduceMotion
                              ? undefined
                              : {
                                  y: -2,
                                }
                          }
                          className="
                            inline-flex
                            items-center
                            gap-1.5
                            rounded-full
                            border
                            border-[#E5E7EB]
                            bg-[#F9FAFB]
                            px-3
                            py-2
                            transition
                            hover:border-[#45B7FF]/30
                            hover:bg-white
                          "
                        >
                          <MapPin
                            size={14}
                            className="text-[#168BD2]"
                          />

                          {item.location}
                        </motion.span>
                      </div>
                    </div>

                    {/* bullet points */}
                    <motion.ul
                      variants={{
                        hidden: {},
                        visible: {
                          transition: {
                            staggerChildren: 0.07,
                          },
                        },
                      }}
                      initial={
                        reduceMotion
                          ? false
                          : "hidden"
                      }
                      whileInView="visible"
                      viewport={{
                        once: true,
                        amount: 0.2,
                      }}
                      className="
                        mt-6
                        space-y-4
                      "
                    >
                      {item.points.map((point) => (
                        <motion.li
                          key={point}
                          variants={pointVariants}
                          className="
                            flex
                            gap-3
                            text-sm
                            leading-6
                            text-[#5F6670]
                            sm:text-[15px]
                          "
                        >
                          <span
                            className="
                              mt-[9px]
                              h-1.5
                              w-1.5
                              shrink-0
                              rounded-full
                              bg-[#45B7FF]
                              shadow-[0_0_0_4px_rgba(69,183,255,.09)]
                            "
                          />

                          <span>{point}</span>
                        </motion.li>
                      ))}
                    </motion.ul>

                    {/* tags */}
                    <motion.div
                      initial={
                        reduceMotion
                          ? false
                          : {
                              opacity: 0,
                              y: 12,
                            }
                      }
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        delay: 0.18,
                      }}
                      className="
                        mt-7
                        flex
                        flex-wrap
                        gap-2
                        border-t
                        border-[#ECEFF2]
                        pt-5
                      "
                    >
                      {item.tags.map((tag) => (
                        <motion.span
                          key={tag}
                          whileHover={
                            reduceMotion
                              ? undefined
                              : {
                                  y: -2,
                                  scale: 1.025,
                                }
                          }
                          className="
                            rounded-full
                            border
                            border-[#45B7FF]/15
                            bg-[#45B7FF]/[0.055]
                            px-3
                            py-1.5
                            text-[11px]
                            font-bold
                            text-[#168BD2]
                            transition
                            duration-300
                            hover:border-[#45B7FF]/40
                            hover:bg-[#45B7FF]/10
                          "
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </motion.div>
                  </div>
                </motion.div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}