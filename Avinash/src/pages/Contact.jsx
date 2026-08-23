import React, { useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  Github,
  Linkedin,
  Mail,
  MessageCircle,
  Phone,
  Send,
  Sparkles,
  User,
} from "lucide-react";
import contactVisual from "../assets/contact1.gif";

const WHATSAPP_NUMBER = "919664007889";
const EMAIL = "itsavinash0@gmail.com";

export default function Contact() {
  const reduceMotion = useReducedMotion();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  const socials = useMemo(
    () => [
      ["Email", `mailto:${EMAIL}`, Mail, "social-email"],
      ["LinkedIn", "https://www.linkedin.com/in/avinash-sharma-3104a1364/", Linkedin, "social-linkedin"],
      ["GitHub", "https://github.com/Avinash07x", Github, "social-github"],
      ["WhatsApp", `https://wa.me/${WHATSAPP_NUMBER}`, MessageCircle, "social-whatsapp"],
    ],
    [],
  );

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    if (errors[name]) setErrors((current) => ({ ...current, [name]: "" }));
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      next.email = "Enter a valid email address.";
    }
    if (!form.message.trim()) next.message = "Please add a message.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const submit = (event) => {
    event.preventDefault();
    if (!validate()) {
      setStatus("error");
      window.setTimeout(() => setStatus(""), 650);
      return;
    }

    const message = [
      "Hi Avinash 👋",
      "",
      "I’m reaching out from your portfolio.",
      `Name: ${form.name.trim()}`,
      form.email.trim() ? `Email: ${form.email.trim()}` : "",
      form.phone.trim() ? `Phone: ${form.phone.trim()}` : "",
      "",
      "Message:",
      form.message.trim(),
    ]
      .filter(Boolean)
      .join("\n");

    setStatus("opening");
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
    window.setTimeout(() => setStatus(""), 1200);
  };

  const field =
    "w-full rounded-2xl border border-black/10 bg-[#F9FAFB] px-4 py-3.5 text-sm text-[#303030] outline-none transition placeholder:text-[#9CA3AF] focus:border-[#45B7FF] focus:bg-white focus:shadow-[0_0_0_4px_rgba(69,183,255,.08)]";

  return (
    <section id="contact" className="bg-[#F5F5F5] px-4 py-20 text-[#303030] sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mb-10 max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[.18em] text-[#168BD2]">
            <span className="h-px w-8 bg-[#45B7FF]" />
            Contact
          </div>
          <h2 className="mt-5 text-[clamp(2.7rem,5vw,5.5rem)] font-black leading-[.94] tracking-[-.055em]">
            Let&apos;s connect and build
            <span className="block text-[#45B7FF]">something useful.</span>
          </h2>
        </motion.div>

        <div className="grid overflow-hidden rounded-[32px] border border-black/8 bg-white shadow-[0_28px_80px_rgba(0,0,0,.08)] lg:grid-cols-[.82fr_1.18fr]">
          <motion.aside
            initial={reduceMotion ? false : { opacity: 0, x: -22 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            className="relative overflow-hidden bg-[#111111] p-6 text-white sm:p-8 lg:p-10"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(69,183,255,.18),transparent_34%)]" />
            <div className="relative">
              <div className="overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.03]">
                <img
                  src={contactVisual}
                  alt="Contact and collaboration visual"
                  className="aspect-[16/10] w-full object-cover opacity-90"
                  loading="lazy"
                />
              </div>

              <div className="mt-7 flex gap-3">
                {socials.map(([label, href, Icon, className]) => (
                  <motion.a
                    key={label}
                    whileHover={reduceMotion ? undefined : { y: -4, scale: 1.04 }}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    aria-label={label}
                    className={`contact-social-circle ${className}`}
                  >
                    <Icon size={25} strokeWidth={2} />
                  </motion.a>
                ))}
              </div>

              <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                <a
                  href={`mailto:${EMAIL}`}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#45B7FF] to-[#8B5CF6] px-5 text-sm font-black text-white transition hover:-translate-y-0.5"
                >
                  <Mail size={18} /> Send Email
                </a>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border-2 border-[#25D366] px-5 text-sm font-black text-[#25D366] transition hover:-translate-y-0.5 hover:bg-[#25D366] hover:text-[#111111]"
                >
                  <MessageCircle size={18} /> WhatsApp Me
                </a>
              </div>

              <div className="mt-8 border-t border-white/10 pt-6">
                <p className="text-xs font-black uppercase tracking-[.14em] text-[#7CCBFF]">Direct contact</p>
                <a href={`mailto:${EMAIL}`} className="mt-3 flex items-center gap-3 text-sm text-white/75 hover:text-white">
                  <Mail size={17} /> {EMAIL}
                </a>
                <a href={`tel:+919664007889`} className="mt-3 flex items-center gap-3 text-sm text-white/75 hover:text-white">
                  <Phone size={17} /> +91 96640 07889
                </a>
              </div>
            </div>
          </motion.aside>

          <motion.div
            animate={
              status === "error" && !reduceMotion
                ? { x: [0, -7, 7, -5, 5, 0] }
                : undefined
            }
            className="p-5 sm:p-8 lg:p-10"
          >
            <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[.14em] text-[#168BD2]">
                  <Sparkles size={14} /> Project / opportunity
                </div>
                <h3 className="mt-2 text-2xl font-black sm:text-3xl">Send a WhatsApp message</h3>
                <p className="mt-2 text-sm leading-6 text-[#6B7280]">
                  Share the role, project, collaboration or product idea and the message will be pre-filled in WhatsApp.
                </p>
              </div>
              <span className="inline-flex self-start rounded-full bg-[#45B7FF]/10 px-3 py-1.5 text-[10px] font-black uppercase tracking-[.12em] text-[#168BD2]">
                Open to opportunities
              </span>
            </div>

            <form onSubmit={submit} noValidate className="grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label>
                  <span className="mb-2 flex items-center gap-2 text-sm font-bold">
                    <User size={15} className="text-[#9CA3AF]" /> Your name *
                  </span>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={`${field} ${errors.name ? "!border-rose-400" : ""}`}
                  />
                  {errors.name ? <small className="mt-1.5 block text-rose-500">{errors.name}</small> : null}
                </label>

                <label>
                  <span className="mb-2 flex items-center gap-2 text-sm font-bold">
                    <Mail size={15} className="text-[#9CA3AF]" /> Email
                  </span>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className={`${field} ${errors.email ? "!border-rose-400" : ""}`}
                  />
                  {errors.email ? <small className="mt-1.5 block text-rose-500">{errors.email}</small> : null}
                </label>
              </div>

              <label>
                <span className="mb-2 flex items-center gap-2 text-sm font-bold">
                  <Phone size={15} className="text-[#9CA3AF]" /> Phone
                </span>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+91 ..."
                  className={field}
                />
              </label>

              <label>
                <span className="mb-2 flex items-center gap-2 text-sm font-bold">
                  <MessageCircle size={15} className="text-[#9CA3AF]" /> Message *
                </span>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={7}
                  placeholder="Tell me about your project, role or opportunity..."
                  className={`${field} min-h-44 resize-y ${errors.message ? "!border-rose-400" : ""}`}
                />
                {errors.message ? <small className="mt-1.5 block text-rose-500">{errors.message}</small> : null}
              </label>

              <div className="flex flex-col gap-4 border-t border-black/8 pt-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-2 text-xs text-[#6B7280]">
                  <CheckCircle2 size={15} className="text-[#45B7FF]" />
                  {status === "opening" ? "Opening WhatsApp…" : "Your message stays under your control."}
                </div>
                <button
                  type="submit"
                  className="group inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-[#303030] px-6 text-sm font-black text-white transition duration-300 hover:-translate-y-1 hover:bg-[#45B7FF] hover:shadow-[0_14px_36px_rgba(69,183,255,.24)]"
                >
                  <MessageCircle size={18} />
                  Send on WhatsApp
                  <Send size={15} className="transition group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
