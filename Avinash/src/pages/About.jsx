import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  BadgeCheck,
  Boxes,
  Code2,
  Gauge,
  Layers3,
  ServerCog,
} from "lucide-react";
import aboutImage from "../assets/Aboutv.png";

const strengths = [
  {
    icon: Code2,
    title: "Frontend engineering",
    text: "Responsive React.js interfaces with reusable components, animation systems and production-focused UX.",
  },
  {
    icon: ServerCog,
    title: "Backend & APIs",
    text: "Node.js/Express.js REST APIs, authentication, validation, integrations and reliable error handling.",
  },
  {
    icon: Layers3,
    title: "Product systems",
    text: "Hands-on work across SaaS, CMS, ERP, multi-tenant systems, dashboards and desktop applications.",
  },
  {
    icon: Gauge,
    title: "Performance mindset",
    text: "Lazy loading, code splitting, optimized media, practical debugging and production issue resolution.",
  },
];

const stats = [
  ["2+", "Professional roles"],
  ["10+", "Production & portfolio projects"],
  ["Full stack", "Frontend to database"],
];

export default function About() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="about" className="bg-white px-4 py-20 text-[#303030] sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-start gap-12 lg:grid-cols-[.88fr_1.12fr] lg:gap-16">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65 }}
            className="lg:sticky lg:top-28"
          >
            <div className="relative overflow-hidden rounded-[32px] border border-black/8 bg-[#F5F5F5] p-3 shadow-[0_24px_70px_rgba(0,0,0,.08)]">
              <div className="relative aspect-[4/4.7] overflow-hidden rounded-[25px]">
                <img
                  src={aboutImage}
                  alt="Avinash Sharma working as a full stack developer"
                  className="h-full w-full object-cover transition duration-700 hover:scale-[1.035]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                <div className="absolute inset-x-4 bottom-4 rounded-[20px] border border-white/15 bg-black/55 p-4 text-white backdrop-blur-xl">
                  <p className="text-[10px] font-black uppercase tracking-[.16em] text-[#7CCBFF]">
                    Current role
                  </p>
                  <p className="mt-1 font-black">Full Stack Engineer</p>
                  <p className="mt-1 text-sm text-white/70">Uddan Promotions Pvt. Ltd.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <div>
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65 }}
            >
              <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[.18em] text-[#168BD2]">
                <span className="h-px w-8 bg-[#45B7FF]" />
                About Me
              </div>
              <h2 className="mt-5 text-[clamp(2.7rem,5vw,5.6rem)] font-black leading-[.95] tracking-[-.055em] text-[#303030]">
                I turn business requirements into
                <span className="block text-[#45B7FF]">working products.</span>
              </h2>

              <div className="mt-7 max-w-3xl space-y-5 text-[15px] leading-7 text-[#6B7280] sm:text-base">
                <p>
                  I&apos;m a Full Stack Developer with hands-on experience building and delivering
                  production-grade web applications, SaaS platforms, ERP systems, CMS solutions and
                  Windows desktop applications.
                </p>
                <p>
                  My core stack includes React.js, JavaScript, Node.js, Express.js, PostgreSQL and
                  MongoDB. I&apos;ve worked with REST APIs, Java backend services, JWT/OAuth/OTP
                  authentication, role-based access control, Socket.IO, Razorpay, reporting systems
                  and responsive performance-optimized interfaces.
                </p>
                <p>
                  In my current role at Uddan Promotions, I contribute across products including
                  NirmanX, GetViralNews, Indeora Voyages, Uddan corporate/CMS systems and Uddan Pro
                  Extractor — solving UI, API, database, authentication, media, payment and
                  production reliability challenges end-to-end.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#45B7FF]/20 bg-[#45B7FF]/[.06] px-4 py-2 text-sm font-bold text-[#168BD2]">
                  <BadgeCheck size={17} /> Production experience
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-black/8 bg-[#F9FAFB] px-4 py-2 text-sm font-bold text-[#4B5563]">
                  <Boxes size={17} /> SaaS · ERP · CMS · Desktop
                </span>
              </div>
            </motion.div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {strengths.map(({ icon: Icon, title, text }, index) => (
                <motion.article
                  key={title}
                  initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                  className="group rounded-[24px] border border-black/8 bg-[#F9FAFB] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#45B7FF]/35 hover:bg-white hover:shadow-[0_16px_45px_rgba(0,0,0,.07)]"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#45B7FF]/10 text-[#168BD2]">
                    <Icon size={20} className="transition group-hover:scale-110" />
                  </span>
                  <h3 className="mt-5 text-lg font-black">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#6B7280]">{text}</p>
                </motion.article>
              ))}
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {stats.map(([value, label]) => (
                <div key={label} className="rounded-[22px] border border-black/8 bg-white p-5 shadow-sm">
                  <p className="text-2xl font-black text-[#303030]">{value}</p>
                  <p className="mt-1 text-xs font-bold uppercase tracking-[.12em] text-[#9CA3AF]">{label}</p>
                </div>
              ))}
            </div>

            <a
              href="mailto:itsavinash0@gmail.com"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-black text-[#303030] transition hover:text-[#168BD2]"
            >
              Discuss a role or project
              <ArrowUpRight size={17} className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
