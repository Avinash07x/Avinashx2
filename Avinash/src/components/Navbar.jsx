import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { HashLink } from "react-router-hash-link";
import { Download, Menu, X } from "lucide-react";

import logo from "../assets/AV.png";
import homeGif from "../assets/home1.gif";
import aboutGif from "../assets/about1.gif";
import skillsGif from "../assets/Skills1.gif";
import experienceGif from "../assets/Experience1.gif";
import projectsGif from "../assets/project1.gif";
import contactGif from "../assets/contact1.gif";
import resumePdf from "../assets/Avinash_Sharma_Full_Stack_MERN_Developer_Resume.pdf";

const OFFSET = 76;

const menuItems = [
  { name: "Home", id: "home", icon: homeGif },
  { name: "About", id: "about", icon: aboutGif },
  { name: "Skills", id: "skills", icon: skillsGif },
  { name: "Experience", id: "experience", icon: experienceGif },
  { name: "Projects", id: "projects", icon: projectsGif },
  { name: "Contact", id: "contact", icon: contactGif },
];

export default function Navbar() {
  const reduceMotion = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const sectionIds = useMemo(() => menuItems.map((item) => item.id), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const nodes = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const current = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              Math.abs(a.boundingClientRect.top) -
              Math.abs(b.boundingClientRect.top),
          )[0];
        if (current?.target?.id) setActive(current.target.id);
      },
      { rootMargin: "-30% 0px -58% 0px", threshold: 0.01 },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [sectionIds]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const go = (event, id) => {
    event.preventDefault();
    setOpen(false);
    const target = document.getElementById(id);
    if (!target) return;

    window.scrollTo({
      top:
        target.getBoundingClientRect().top +
        window.scrollY -
        OFFSET,
      behavior: reduceMotion ? "auto" : "smooth",
    });
    window.history.replaceState(null, "", `/#${id}`);
  };

  return (
    <>
      <motion.header
        initial={reduceMotion ? false : { opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        className={`portfolio-nav fixed inset-x-0 top-0 z-50 ${
          scrolled ? "is-scrolled" : ""
        }`}
      >
        <div className="mx-auto flex h-[72px] items-center justify-between px-4 sm:px-6 lg:px-8">
          <HashLink
            to="/#home"
            onClick={(e) => go(e, "home")}
            className="group flex items-center"
            aria-label="Avinash Sharma home"
          >
            <img
              src={logo}
              alt="AV — Avinash Sharma"
              className="h-12 w-12 rounded-xl object-cover transition-transform duration-300 group-hover:scale-[1.04]"
            />
          </HashLink>

          <nav className="hidden items-center gap-4 md:flex" aria-label="Main navigation">
            {menuItems.map((item) => (
              <HashLink
                key={item.id}
                to={`/#${item.id}`}
                onClick={(e) => go(e, item.id)}
                className={`nav-icon group relative grid h-11 w-11 place-items-center transition ${
                  active === item.id
                    ? "border-[#45B7FF]/45"
                    : "border-transparent"
                }`}
                aria-label={item.name}
                aria-current={active === item.id ? "page" : undefined}
              >
                <img
                  src={item.icon}
                  alt=""
                  className="h-7 w-7 rounded-full object-contain grayscale-[.25] transition duration-300 group-hover:scale-110 group-hover:grayscale-0"
                />
                <span className="nav-tooltip pointer-events-none absolute top-[calc(100%+10px)] whitespace-nowrap rounded-lg bg-[#111111] px-3 py-1.5 text-[11px] font-bold text-white opacity-0 shadow-xl transition duration-200 group-hover:translate-y-0 group-hover:opacity-100">
                  {item.name}
                </span>
              </HashLink>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href={resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center gap-2 rounded-full border border-[#303030] px-4 text-sm font-bold text-[#303030] transition duration-300 hover:-translate-y-0.5 hover:border-[#45B7FF] hover:text-[#168BD2]"
            >
              <Download size={16} />
              Resume
            </a>
            <HashLink
              to="/#contact"
              onClick={(e) => go(e, "contact")}
              className="inline-flex h-11 items-center rounded-full bg-[#303030] px-5 text-sm font-black text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#45B7FF] hover:shadow-[0_12px_34px_rgba(69,183,255,.25)]"
            >
              Let&apos;s Connect
            </HashLink>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid h-11 w-11 place-items-center rounded-full border border-black/10 bg-white text-[#303030] md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open ? (
          <>
            <motion.button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-black/25 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.div
              className="fixed inset-x-4 top-[82px] z-50 rounded-[24px] border border-black/10 bg-white p-3 shadow-[0_24px_80px_rgba(0,0,0,.16)] md:hidden"
              initial={reduceMotion ? false : { opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: -8, scale: 0.98 }}
            >
              <div className="grid gap-1">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: reduceMotion ? 0 : index * 0.04 }}
                  >
                    <HashLink
                      to={`/#${item.id}`}
                      onClick={(e) => go(e, item.id)}
                      className={`flex items-center gap-3 rounded-2xl px-3 py-3 ${
                        active === item.id
                          ? "bg-[#45B7FF]/10 text-[#168BD2]"
                          : "text-[#303030]"
                      }`}
                    >
                      <img src={item.icon} alt="" className="h-9 w-9 rounded-full object-contain" />
                      <span className="font-bold">{item.name}</span>
                      {active === item.id ? (
                        <span className="ml-auto h-2 w-2 rounded-full bg-[#45B7FF]" />
                      ) : null}
                    </HashLink>
                  </motion.div>
                ))}
              </div>

              <div className="mt-3 grid grid-cols-2 gap-2 border-t border-black/8 pt-3">
                <a
                  href={resumePdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl border border-[#303030] font-bold text-[#303030]"
                >
                  <Download size={16} /> Resume
                </a>
                <HashLink
                  to="/#contact"
                  onClick={(e) => go(e, "contact")}
                  className="inline-flex h-12 items-center justify-center rounded-2xl bg-[#303030] font-black text-white"
                >
                  Connect
                </HashLink>
              </div>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </>
  );
}
