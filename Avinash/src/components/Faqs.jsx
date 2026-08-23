import React, { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  ChevronDown,
  Code2,
  Database,
  Gauge,
  Layers3,
  MessageCircleQuestion,
  ShieldCheck,
} from "lucide-react";

const faqs = [
  {
    question: "What technologies do you specialize in?",
    answer:
      "My core stack includes React.js, JavaScript, Tailwind CSS, Node.js, Express.js, PostgreSQL and MongoDB. I also work with JWT/OAuth/OTP authentication, Socket.IO, Razorpay, REST APIs, Electron, reporting libraries and modern motion tooling.",
  },
  {
    question: "What kind of products have you worked on?",
    answer:
      "I have hands-on experience across SaaS platforms, ERP systems, CMS-driven websites, multi-tenant publishing products, healthcare dashboards, travel platforms and Windows desktop applications.",
  },
  {
    question: "Do you handle backend development and databases?",
    answer:
      "Yes. I build Node.js/Express.js APIs, authentication and authorization flows, PostgreSQL and MongoDB data workflows, validation, file uploads, role-based permissions and integrations.",
  },
  {
    question: "Do you build responsive and performance-focused interfaces?",
    answer:
      "Yes. I design for mobile, tablet and desktop, and use practical performance techniques such as lazy loading, code splitting, optimized media and reusable component architecture.",
  },
  {
    question: "Have you worked on real-time or payment features?",
    answer:
      "Yes. My project work includes Socket.IO based real-time features and Razorpay payment/subscription integrations, together with secure server-side workflows.",
  },
  {
    question: "Are you available for full-time roles or project collaboration?",
    answer:
      "Yes. I am open to relevant full-stack/software development opportunities and product-focused collaborations where I can contribute across frontend, backend and delivery.",
  },
];

const features = [
  [Code2, "Frontend", "Responsive React interfaces"],
  [Database, "Data", "PostgreSQL & MongoDB"],
  [ShieldCheck, "Security", "Auth & role-based access"],
  [Gauge, "Performance", "Fast production delivery"],
];

export default function Faqs() {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(0);

  return (
    <section id="faqs" className="bg-white px-4 py-20 text-[#303030] sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:gap-14">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: -22 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="lg:sticky lg:top-28 lg:self-start"
          >
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#45B7FF]/10 text-[#168BD2]">
              <MessageCircleQuestion size={22} />
            </span>
            <div className="mt-6 text-xs font-black uppercase tracking-[.18em] text-[#168BD2]">FAQ</div>
            <h2 className="mt-3 text-[clamp(2.6rem,4.6vw,4.8rem)] font-black leading-[.96] tracking-[-.05em]">
              Common questions,
              <span className="block text-[#45B7FF]">clear answers.</span>
            </h2>
            <p className="mt-5 max-w-md text-sm leading-6 text-[#6B7280]">
              A quick overview of my stack, product experience, workflow and availability.
            </p>

            <a
              href="#contact"
              className="mt-7 inline-flex h-12 items-center rounded-full bg-[#303030] px-5 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[#45B7FF]"
            >
              Ask something else
            </a>
          </motion.div>

          <div>
            <div className="overflow-hidden rounded-[28px] border border-black/8 bg-[#F9FAFB]">
              {faqs.map((faq, index) => {
                const open = active === index;
                return (
                  <div key={faq.question} className="border-b border-black/8 last:border-b-0">
                    <button
                      type="button"
                      onClick={() => setActive(open ? null : index)}
                      className="flex w-full items-center gap-4 px-5 py-5 text-left sm:px-6"
                    >
                      <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full text-xs font-black transition ${open ? "bg-[#45B7FF] text-white" : "bg-white text-[#6B7280]"}`}>
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="flex-1 text-sm font-black sm:text-base">{faq.question}</span>
                      <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border transition ${open ? "rotate-180 border-[#45B7FF] text-[#168BD2]" : "border-black/10 text-[#6B7280]"}`}>
                        <ChevronDown size={17} />
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {open ? (
                        <motion.div
                          initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
                          transition={{ duration: 0.28 }}
                          className="overflow-hidden"
                        >
                          <p className="px-[4.75rem] pb-6 text-sm leading-6 text-[#6B7280] sm:pr-8">
                            {faq.answer}
                          </p>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {features.map(([Icon, title, text]) => (
                <div key={title} className="flex items-center gap-3 rounded-[20px] border border-black/8 bg-white p-4 shadow-sm">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#45B7FF]/10 text-[#168BD2]">
                    <Icon size={18} />
                  </span>
                  <div>
                    <p className="text-sm font-black">{title}</p>
                    <p className="text-xs text-[#9CA3AF]">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
