import React, { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Code2,
  Database,
  Download,
  Github,
  Linkedin,
  ServerCog,
  Sparkles,
} from "lucide-react";
import CV from "../assets/Avinash_Sharma_Full_Stack_MERN_Developer_Resume.pdf";
import logo from "../assets/AV.png";

const roles = [
  "Full Stack MERN Developer",
  "React.js Developer",
  "Software Developer",
];

export default function Home({ name, description }) {
  const reduceMotion = useReducedMotion();
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    if (reduceMotion) return undefined;
    const id = setInterval(() => {
      setRoleIndex((i) => (i + 1) % roles.length);
    }, 2600);
    return () => clearInterval(id);
  }, [reduceMotion]);

  const goProjects = () => {
    document.getElementById("projects")?.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "start",
    });
  };

  return (
    <section
      id="home"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-[#F5F5F5] px-4 pb-10 pt-24 text-[#303030] sm:px-6 lg:px-8"
    >
      <div className="hero-grid pointer-events-none absolute inset-0" />
      <div className="hero-blue-glow pointer-events-none absolute -right-32 -top-24 h-[34rem] w-[34rem] rounded-full" />
      <div className="hero-black-glow pointer-events-none absolute -bottom-48 -left-44 h-[34rem] w-[34rem] rounded-full" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[1.08fr_.92fr] lg:gap-14">
        <motion.div
          initial={reduceMotion ? false : "hidden"}
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.09, delayChildren: 0.08 } },
          }}
        >
          <motion.div
            variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#45B7FF]/25 bg-white/85 px-4 py-2 text-[11px] font-black uppercase tracking-[.17em] text-[#168BD2] shadow-sm"
          >
            <Sparkles size={14} />
            Full Stack Engineer · Jaipur, India
          </motion.div>

          <motion.h1
            variants={{ hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0 } }}
            className="max-w-4xl text-[clamp(3.2rem,7.8vw,7.7rem)] font-black leading-[.88] tracking-[-.065em]"
          >
            <span className="block">Building</span>
            <span className="block text-[#45B7FF]">production-ready</span>
            <span className="block">digital products.</span>
          </motion.h1>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
            className="mt-7 flex items-center gap-3"
          >
            <span className="h-px w-9 bg-[#45B7FF]" />
            <span className="text-base font-black text-[#303030] sm:text-lg">
              {reduceMotion ? roles[0] : roles[roleIndex]}
            </span>
            <span className="role-caret" aria-hidden="true" />
          </motion.div>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}
            className="mt-5 max-w-2xl text-base leading-7 text-[#6B7280] sm:text-lg"
          >
            {description}
          </motion.p>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}
            className="mt-7 flex flex-wrap gap-2"
          >
            {["React.js", "Node.js", "Express.js", "PostgreSQL", "MongoDB", "REST APIs"].map(
              (item) => (
                <span
                  key={item}
                  className="rounded-full border border-black/8 bg-white px-3 py-1.5 text-xs font-bold text-[#4B5563] shadow-sm"
                >
                  {item}
                </span>
              ),
            )}
          </motion.div>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
          >
            <button
              type="button"
              onClick={goProjects}
              className="group inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-[#303030] px-6 text-sm font-black text-white transition duration-300 hover:-translate-y-1 hover:bg-[#45B7FF] hover:shadow-[0_15px_38px_rgba(69,183,255,.25)]"
            >
              View Featured Work
              <ArrowRight size={17} className="transition group-hover:translate-x-1" />
            </button>
            <a
              href={CV}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border border-[#303030] bg-transparent px-6 text-sm font-black text-[#303030] transition duration-300 hover:-translate-y-1 hover:border-[#45B7FF] hover:text-[#168BD2]"
            >
              <Download size={17} /> View Resume
            </a>
            <div className="flex gap-2">
              <a
                href="https://github.com/Avinash07x"
                target="_blank"
                rel="noreferrer"
                className="grid h-14 w-14 place-items-center rounded-full border border-black/10 bg-white text-[#303030] transition hover:-translate-y-1 hover:border-[#45B7FF] hover:text-[#168BD2]"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/avinash-sharma-3104a1364/"
                target="_blank"
                rel="noreferrer"
                className="grid h-14 w-14 place-items-center rounded-full border border-black/10 bg-white text-[#303030] transition hover:-translate-y-1 hover:border-[#45B7FF] hover:text-[#168BD2]"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, x: 26, scale: 0.97 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.15 }}
          className="relative mx-auto w-full max-w-[510px]"
        >
          <div className="absolute -inset-10 rounded-full bg-[#45B7FF]/10 blur-3xl" />
          <div className="relative rounded-[34px] border border-black/8 bg-white p-5 shadow-[0_26px_80px_rgba(0,0,0,.09)] sm:p-7">
            <div className="flex items-center justify-between border-b border-black/8 pb-5">
              <div className="flex items-center gap-3">
                <img src={logo} alt="" className="h-12 w-12 rounded-xl object-cover" />
                <div>
                  <p className="font-black text-[#303030]">{name}</p>
                  <p className="text-xs font-semibold uppercase tracking-[.14em] text-[#45B7FF]">
                    Engineer profile
                  </p>
                </div>
              </div>
              <span className="rounded-full bg-[#303030] px-3 py-1.5 text-[10px] font-black uppercase tracking-[.12em] text-white">
                Available
              </span>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">
              {[
                { icon: Code2, label: "Frontend", value: "React + Vite" },
                { icon: ServerCog, label: "Backend", value: "Node + Express" },
                { icon: Database, label: "Data", value: "PostgreSQL + MongoDB" },
                { icon: Sparkles, label: "Product", value: "SaaS · CMS · ERP" },
              ].map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="group rounded-[22px] border border-black/8 bg-[#F9FAFB] p-4 transition duration-300 hover:-translate-y-1 hover:border-[#45B7FF]/35 hover:bg-white hover:shadow-[0_14px_36px_rgba(0,0,0,.07)]"
                >
                  <Icon size={20} className="text-[#45B7FF] transition group-hover:scale-110" />
                  <p className="mt-6 text-xs font-semibold uppercase tracking-[.12em] text-[#9CA3AF]">
                    {label}
                  </p>
                  <p className="mt-1 text-sm font-black text-[#303030]">{value}</p>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-[22px] bg-[#111111] p-5 font-mono text-[12px] leading-6 text-[#D1D5DB]">
              <p><span className="text-[#7CCBFF]">const</span> developer = {"{"}</p>
              <p className="pl-4">focus: <span className="text-white">&quot;scalable products&quot;</span>,</p>
              <p className="pl-4">quality: <span className="text-white">&quot;production-ready&quot;</span>,</p>
              <p className="pl-4">status: <span className="text-[#7CCBFF]">&quot;shipping&quot;</span></p>
              <p>{"};"}</p>
            </div>
          </div>
        </motion.div>
      </div>

      <button
        type="button"
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" })}
        className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-[10px] font-black uppercase tracking-[.18em] text-[#9CA3AF] sm:flex"
      >
        Scroll
        <ArrowDown size={16} className="scroll-arrow" />
      </button>
    </section>
  );
}
