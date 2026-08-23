import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";

export const easeOut = [0.16, 1, 0.3, 1];
export const fadeUp = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.62, ease: easeOut } } };
export const fadeLeft = { hidden: { opacity: 0, x: -28 }, visible: { opacity: 1, x: 0, transition: { duration: 0.62, ease: easeOut } } };
export const fadeRight = { hidden: { opacity: 0, x: 28 }, visible: { opacity: 1, x: 0, transition: { duration: 0.62, ease: easeOut } } };
export const scaleIn = { hidden: { opacity: 0, scale: 0.96 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.58, ease: easeOut } } };

export function AnimatedSection({ as = "div", children, className = "", delay = 0, amount = 0.16, once = true, direction = "up", ...props }) {
  const reduceMotion = useReducedMotion();
  const Component = motion[as] || motion.div;
  const variants = direction === "left" ? fadeLeft : direction === "right" ? fadeRight : direction === "scale" ? scaleIn : fadeUp;
  return <Component className={className} variants={reduceMotion ? undefined : variants} initial={reduceMotion ? false : "hidden"} whileInView={reduceMotion ? undefined : "visible"} viewport={{ once, amount }} transition={reduceMotion ? undefined : { delay }} {...props}>{children}</Component>;
}

export function StaggerContainer({ children, className = "", stagger = 0.08, amount = 0.12, ...props }) {
  const reduceMotion = useReducedMotion();
  return <motion.div className={className} initial={reduceMotion ? false : "hidden"} whileInView={reduceMotion ? undefined : "visible"} viewport={{ once: true, amount }} variants={reduceMotion ? undefined : { hidden: {}, visible: { transition: { staggerChildren: stagger, delayChildren: 0.04 } } }} {...props}>{children}</motion.div>;
}

export function StaggerItem({ children, className = "", direction = "up", ...props }) {
  const reduceMotion = useReducedMotion();
  const variants = direction === "left" ? fadeLeft : direction === "right" ? fadeRight : direction === "scale" ? scaleIn : fadeUp;
  return <motion.div className={className} variants={reduceMotion ? undefined : variants} {...props}>{children}</motion.div>;
}

export function SpotlightCard({ children, className = "", glow = "rgba(56,189,248,.14)", ...props }) {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  function handleMove(event) {
    if (reduceMotion || !ref.current || window.matchMedia("(pointer: coarse)").matches) return;
    const rect = ref.current.getBoundingClientRect();
    ref.current.style.setProperty("--spot-x", `${event.clientX - rect.left}px`);
    ref.current.style.setProperty("--spot-y", `${event.clientY - rect.top}px`);
  }
  return <motion.div ref={ref} onMouseMove={handleMove} whileHover={reduceMotion ? undefined : { y: -6, scale: 1.008 }} transition={{ type: "spring", stiffness: 260, damping: 24 }} className={`spotlight-card ${className}`} style={{ "--spot-glow": glow }} {...props}>{children}</motion.div>;
}

export function TiltCard({ children, className = "", max = 4, ...props }) {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const x = useMotionValue(0), y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [max, -max]), { stiffness: 200, damping: 24 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-max, max]), { stiffness: 200, damping: 24 });
  function handleMove(event) {
    if (reduceMotion || window.matchMedia("(pointer: coarse)").matches || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((event.clientX - rect.left) / rect.width - 0.5);
    y.set((event.clientY - rect.top) / rect.height - 0.5);
  }
  function reset() { x.set(0); y.set(0); }
  return <motion.div ref={ref} onMouseMove={handleMove} onMouseLeave={reset} style={reduceMotion ? undefined : { rotateX, rotateY, transformPerspective: 900, transformStyle: "preserve-3d" }} className={className} {...props}>{children}</motion.div>;
}

export function MagneticButton({ children, className = "", strength = 10, ...props }) {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const x = useMotionValue(0), y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 310, damping: 22 }), sy = useSpring(y, { stiffness: 310, damping: 22 });
  function handleMove(event) {
    if (reduceMotion || window.matchMedia("(pointer: coarse)").matches || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set(((event.clientX - rect.left) / rect.width - 0.5) * strength);
    y.set(((event.clientY - rect.top) / rect.height - 0.5) * strength);
  }
  function reset() { x.set(0); y.set(0); }
  return <motion.div ref={ref} onMouseMove={handleMove} onMouseLeave={reset} style={reduceMotion ? undefined : { x: sx, y: sy }} className={className} {...props}>{children}</motion.div>;
}

export function AnimatedCounter({ to = 0, suffix = "", duration = 1.2, className = "" }) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  useEffect(() => {
    if (reduceMotion) { setValue(to); return; }
    const node = ref.current; if (!node) return;
    let frame = 0, started = false;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || started) return;
      started = true; const begin = performance.now();
      const tick = (now) => { const p = Math.min(1, (now - begin) / (duration * 1000)); const e = 1 - Math.pow(1 - p, 3); setValue(Math.round(to * e)); if (p < 1) frame = requestAnimationFrame(tick); };
      frame = requestAnimationFrame(tick); observer.disconnect();
    }, { threshold: 0.45 });
    observer.observe(node);
    return () => { observer.disconnect(); cancelAnimationFrame(frame); };
  }, [to, duration, reduceMotion]);
  return <span ref={ref} className={className}>{value}{suffix}</span>;
}

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    let raf = 0;
    const update = () => { raf = 0; const total = document.documentElement.scrollHeight - window.innerHeight; setProgress(total > 0 ? window.scrollY / total : 0); };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update(); window.addEventListener("scroll", onScroll, { passive: true }); window.addEventListener("resize", onScroll);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); };
  }, []);
  return <span aria-hidden="true" className="fixed left-0 top-0 z-[100] h-[2px] bg-gradient-to-r from-emerald-400 via-cyan-400 to-indigo-400" style={{ width: `${progress * 100}%` }} />;
}

export function CustomCursor() {
  const dotRef = useRef(null), ringRef = useRef(null), rafRef = useRef(0);
  const target = useRef({ x: -100, y: -100 }), ring = useRef({ x: -100, y: -100 });
  const [enabled, setEnabled] = useState(false);
  const reduceMotion = useReducedMotion();
  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)");
    const updateEnabled = () => setEnabled(fine.matches && !reduceMotion); updateEnabled(); fine.addEventListener?.("change", updateEnabled);
    if (!fine.matches || reduceMotion) return () => fine.removeEventListener?.("change", updateEnabled);
    const move = (event) => { target.current.x = event.clientX; target.current.y = event.clientY; if (dotRef.current) dotRef.current.style.transform = `translate3d(${event.clientX}px,${event.clientY}px,0)`; };
    const loop = () => { ring.current.x += (target.current.x - ring.current.x) * 0.16; ring.current.y += (target.current.y - ring.current.y) * 0.16; if (ringRef.current) ringRef.current.style.transform = `translate3d(${ring.current.x}px,${ring.current.y}px,0)`; rafRef.current = requestAnimationFrame(loop); };
    const over = (event) => document.documentElement.classList.toggle("cursor-interactive", Boolean(event.target.closest("a,button,[data-cursor='interactive']")));
    window.addEventListener("pointermove", move, { passive: true }); document.addEventListener("pointerover", over, { passive: true }); rafRef.current = requestAnimationFrame(loop);
    return () => { fine.removeEventListener?.("change", updateEnabled); window.removeEventListener("pointermove", move); document.removeEventListener("pointerover", over); cancelAnimationFrame(rafRef.current); };
  }, [reduceMotion]);
  if (!enabled) return null;
  return <><span ref={ringRef} className="portfolio-cursor-ring" aria-hidden="true"/><span ref={dotRef} className="portfolio-cursor-dot" aria-hidden="true"/></>;
}
