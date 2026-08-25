import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  BadgeCheck,
  BriefcaseBusiness,
  CalendarDays,
  MapPin,
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
    tags: ["React.js", "Node.js", "Express.js", "PostgreSQL", "MongoDB", "Razorpay", "Socket.IO"],
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
    tags: ["React.js", "Tailwind CSS", "Node.js", "REST APIs", "MongoDB", "Git/GitHub"],
  },
];

export default function Experience() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="experience" className="bg-[#F5F5F5] px-4 py-20 text-[#303030] sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[.18em] text-[#168BD2]">
            <span className="h-px w-8 bg-[#45B7FF]" />
            Work Experience
            <span className="h-px w-8 bg-[#45B7FF]" />
          </div>
          <h2 className="mt-5 text-[clamp(2.7rem,5vw,5.4rem)] font-black leading-[.94] tracking-[-.055em]">
            Building, debugging and shipping
            <span className="block text-[#45B7FF]">in real product teams.</span>
          </h2>
        </motion.div>

        <div className="relative mx-auto mt-14 max-w-5xl">
          <div className="absolute left-[19px] top-3 hidden h-[calc(100%-24px)] w-px bg-gradient-to-b from-[#45B7FF] via-[#7CCBFF] to-black/10 sm:block" />

          <div className="space-y-6">
            {experienceData.map((item, index) => (
              <motion.article
                key={`${item.company}-${item.period}`}
                initial={reduceMotion ? false : { opacity: 0, x: index % 2 ? 24 : -24, y: 12 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ duration: 0.6, delay: index * 0.06 }}
                className="relative sm:pl-16"
              >
                <span className="absolute left-0 top-7 hidden h-10 w-10 place-items-center rounded-full border-4 border-[#F5F5F5] bg-[#303030] text-white shadow-[0_0_0_1px_rgba(69,183,255,.25)] sm:grid">
                  <BriefcaseBusiness size={17} />
                </span>

                <div className="group rounded-[28px] border border-black/8 bg-white p-5 shadow-[0_20px_55px_rgba(0,0,0,.06)] transition duration-300 hover:-translate-y-1 hover:border-[#45B7FF]/35 hover:shadow-[0_24px_65px_rgba(0,0,0,.09)] sm:p-7">
                  <div className="flex flex-col gap-4 border-b border-black/8 pb-5 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-2xl font-black tracking-[-.025em]">{item.role}</h3>
                        {item.current ? (
                          <span className="inline-flex items-center gap-1 rounded-full bg-[#45B7FF]/10 px-2.5 py-1 text-[10px] font-black uppercase tracking-[.11em] text-[#168BD2]">
                            <BadgeCheck size={13} /> Current
                          </span>
                        ) : null}
                      </div>
                      <p className="mt-1 text-base font-black text-[#168BD2]">{item.company}</p>
                    </div>

                    <div className="flex flex-wrap gap-2 text-xs font-bold text-[#6B7280]">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-black/8 bg-[#F9FAFB] px-3 py-1.5">
                        <CalendarDays size={14} /> {item.period}
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-black/8 bg-[#F9FAFB] px-3 py-1.5">
                        <MapPin size={14} /> {item.location}
                      </span>
                    </div>
                  </div>

                  <ul className="mt-5 space-y-3">
                    {item.points.map((point) => (
                      <li key={point} className="flex gap-3 text-sm leading-6 text-[#5F6670] sm:text-[15px]">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#45B7FF]" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[#45B7FF]/15 bg-[#45B7FF]/[.055] px-3 py-1.5 text-[11px] font-bold text-[#168BD2]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
