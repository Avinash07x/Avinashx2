import React from "react";
import { ArrowUp, Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import logo from "../assets/AV.png";

const links = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Experience", "#experience"],
  ["Projects", "#projects"],
  ["Contact", "#contact"],
  ["FAQ", "#faqs"],
];

export default function Footer() {
  const year = new Date().getFullYear();

  const goTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/8 bg-[#111111] text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-14">
        <div className="grid gap-10 lg:grid-cols-[1fr_.8fr_.8fr]">
          <div className="max-w-md">
            <div className="flex items-center gap-3">
              <img src={logo} alt="AV" className="h-12 w-12 rounded-xl object-cover" />
              <div>
                <p className="font-black">Avinash Sharma</p>
                <p className="text-xs font-bold uppercase tracking-[.14em] text-[#7CCBFF]">
                  Full Stack MERN Developer
                </p>
              </div>
            </div>

            <p className="mt-5 text-sm leading-6 text-[#9CA3AF]">
              Building responsive, production-ready web applications, SaaS platforms,
              ERP/CMS products and software experiences with React, Node.js, PostgreSQL
              and MongoDB.
            </p>

            <div className="mt-6 flex gap-2">
              <a
                href="mailto:itsavinash0@gmail.com"
                aria-label="Email"
                className="footer-social"
              >
                <Mail size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/avinash-sharma-3104a1364/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="footer-social"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://github.com/Avinash07x"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="footer-social"
              >
                <Github size={18} />
              </a>
              <a
                href="https://wa.me/919664007889"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="footer-social"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          <div>
            <p className="text-xs font-black uppercase tracking-[.16em] text-[#7CCBFF]">Navigation</p>
            <div className="mt-4 grid grid-cols-2 gap-x-5 gap-y-3">
              {links.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="group inline-flex w-fit items-center gap-1 text-sm font-semibold text-[#9CA3AF] transition hover:text-white"
                >
                  <span>{label}</span>
                  <span className="h-px w-0 bg-[#45B7FF] transition-all duration-300 group-hover:w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-black uppercase tracking-[.16em] text-[#7CCBFF]">Contact</p>
            <div className="mt-4 space-y-3 text-sm text-[#9CA3AF]">
              <a href="mailto:itsavinash0@gmail.com" className="block transition hover:text-white">
                itsavinash0@gmail.com
              </a>
              <a href="tel:+919664007889" className="block transition hover:text-white">
                +91 96640 07889
              </a>
              <p>Jaipur, Rajasthan, India</p>
            </div>

            <button
              type="button"
              onClick={goTop}
              className="mt-6 inline-flex h-11 items-center gap-2 rounded-full border border-white/12 px-4 text-sm font-black text-white transition hover:-translate-y-0.5 hover:border-[#45B7FF] hover:text-[#7CCBFF]"
            >
              Back to top <ArrowUp size={16} />
            </button>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/8 pt-6 text-xs text-[#6B7280] sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Avinash Sharma. All rights reserved.</p>
          <p>React.js · Tailwind CSS · Framer Motion</p>
        </div>
      </div>
    </footer>
  );
}
