import React from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Braces,
  Code2,
  Database,
  Download,
  Github,
  Linkedin,
  ServerCog,
  Sparkles,
} from "lucide-react";
import CV from "../assets/Avinash_Sharma_Full_Stack_MERN_Developer_Resume.pdf";

const tech = ["React.js", "Node.js", "Express.js", "PostgreSQL", "MongoDB", "Tailwind CSS"];

const Herop = ({ name, role, description }) => {
  return (
    <section id="home" className="relative isolate min-h-screen overflow-hidden bg-[#050914] px-5 pb-16 pt-28 text-white sm:px-8 lg:px-12 lg:pt-32">
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_14%_18%,rgba(16,185,129,.16),transparent_28%),radial-gradient(circle_at_84%_20%,rgba(56,189,248,.14),transparent_30%),radial-gradient(circle_at_50%_90%,rgba(99,102,241,.10),transparent_30%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.05] [background-image:linear-gradient(rgba(255,255,255,.22)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.22)_1px,transparent_1px)] [background-size:54px_54px]" />

      <div className="mx-auto flex min-h-[calc(100vh-8rem)] max-w-7xl items-center">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1.18fr_.82fr] lg:gap-16">
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, ease: [0.16,1,.3,1] }}>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/[0.06] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-emerald-300">
              <Sparkles size={14} />
              Full Stack Engineer · Jaipur, India
            </div>

            <h1 className="max-w-5xl text-[clamp(3.2rem,8vw,7.7rem)] font-black leading-[.88] tracking-[-.065em]">
              <span className="block text-white">I build</span>
              <span className="block bg-gradient-to-r from-emerald-300 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">production-ready</span>
              <span className="block text-white">web products.</span>
            </h1>

            <div className="mt-8 max-w-3xl border-l border-emerald-300/35 pl-5 sm:pl-7">
              <p className="text-sm font-bold uppercase tracking-[.16em] text-slate-300">{name}</p>
              <p className="mt-2 text-lg font-semibold text-slate-200 sm:text-xl">{role}</p>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">{description}</p>
            </div>

            <div className="mt-8 flex flex-wrap gap-2.5">
              {tech.map((item, index) => (
                <motion.span key={item} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .35 + index * .06 }} className="rounded-full border border-white/10 bg-white/[0.045] px-3.5 py-2 text-xs font-semibold text-slate-300 backdrop-blur-md">
                  {item}
                </motion.span>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <motion.a whileHover={{ y: -2 }} whileTap={{ scale: .98 }} href="#projects" className="group inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-400 to-cyan-400 px-6 text-sm font-black text-[#03231d] shadow-[0_18px_50px_rgba(16,185,129,.20)]">
                View Featured Work <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
              </motion.a>
              <motion.a whileHover={{ y: -2 }} whileTap={{ scale: .98 }} href={CV} download="Avinash_Sharma_Full_Stack_MERN_Developer_Resume.pdf" className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl border border-white/12 bg-white/[0.045] px-6 text-sm font-bold text-white backdrop-blur-md transition hover:bg-white/[0.08]">
                <Download size={17} /> Download Resume
              </motion.a>
              <div className="flex gap-2">
                <a href="https://github.com/Avinash07x" target="_blank" rel="noreferrer" aria-label="GitHub" className="grid h-14 w-14 place-items-center rounded-2xl border border-white/10 bg-white/[0.045] text-slate-300 transition hover:border-cyan-300/30 hover:text-cyan-300"><Github size={19}/></a>
                <a href="https://www.linkedin.com/in/avinash-sharma-3104a1364/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="grid h-14 w-14 place-items-center rounded-2xl border border-white/10 bg-white/[0.045] text-slate-300 transition hover:border-cyan-300/30 hover:text-cyan-300"><Linkedin size={19}/></a>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: .94, x: 26 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: .85, delay: .12, ease: [0.16,1,.3,1] }} className="relative mx-auto w-full max-w-xl">
            <div className="absolute -inset-8 rounded-[3rem] bg-gradient-to-br from-emerald-400/10 via-cyan-400/5 to-indigo-500/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#09111f]/88 p-5 shadow-[0_35px_100px_rgba(0,0,0,.42)] backdrop-blur-2xl sm:p-7">
              <div className="flex items-center justify-between border-b border-white/8 pb-5">
                <div className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-rose-400"/><span className="h-2.5 w-2.5 rounded-full bg-amber-300"/><span className="h-2.5 w-2.5 rounded-full bg-emerald-400"/></div>
                <span className="rounded-full border border-emerald-300/15 bg-emerald-300/[0.05] px-3 py-1 text-[10px] font-bold uppercase tracking-[.15em] text-emerald-300">Building end-to-end</span>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                {[{icon:Code2,label:"Frontend",value:"React + Vite"},{icon:ServerCog,label:"Backend",value:"Node + Express"},{icon:Database,label:"Data",value:"PostgreSQL + MongoDB"},{icon:Braces,label:"Architecture",value:"REST · RBAC · SaaS"}].map(({icon:Icon,label,value},index)=>(
                  <motion.div key={label} whileHover={{ y:-4 }} className="rounded-2xl border border-white/8 bg-white/[0.035] p-4 transition hover:border-cyan-300/20">
                    <Icon size={20} className={index % 2 ? "text-cyan-300" : "text-emerald-300"}/>
                    <p className="mt-5 text-xs text-slate-500">{label}</p>
                    <p className="mt-1 text-sm font-bold text-slate-200">{value}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-4 rounded-2xl border border-white/8 bg-[#050914]/70 p-5 font-mono text-[12px] leading-6 text-slate-400">
                <p><span className="text-fuchsia-300">const</span> <span className="text-cyan-300">developer</span> = {'{'}</p>
                <p className="pl-5">focus: <span className="text-amber-300">"scalable products"</span>,</p>
                <p className="pl-5">strengths: [<span className="text-emerald-300">"UI/UX"</span>, <span className="text-emerald-300">"APIs"</span>, <span className="text-emerald-300">"Databases"</span>],</p>
                <p className="pl-5">shipping: <span className="text-amber-300">true</span></p>
                <p>{'}'};</p>
              </div>

              <div className="mt-5 grid grid-cols-3 divide-x divide-white/8 rounded-2xl border border-white/8 bg-white/[0.035] py-4 text-center">
                <div><p className="text-xl font-black text-white">10+</p><p className="mt-1 text-[10px] uppercase tracking-wider text-slate-500">Projects</p></div>
                <div><p className="text-xl font-black text-white">2</p><p className="mt-1 text-[10px] uppercase tracking-wider text-slate-500">Roles</p></div>
                <div><p className="text-xl font-black text-white">Full Stack</p><p className="mt-1 text-[10px] uppercase tracking-wider text-slate-500">MERN+</p></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <a href="#about" aria-label="Scroll to about" className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 rounded-full border border-white/10 bg-white/[0.04] p-3 text-slate-400 transition hover:text-white md:block">
        <motion.span animate={{ y:[-2,4,-2] }} transition={{ duration:1.7, repeat:Infinity }} className="block"><ArrowDown size={18}/></motion.span>
      </a>
    </section>
  );
};

export default Herop;
