import { useEffect } from "react";

const SELECTOR = "section[id]";

const ScrollEffects = () => {
  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const sections = Array.from(
      document.querySelectorAll(SELECTOR),
    );

    sections.forEach((section) => {
      section.classList.add("portfolio-scroll-section");
    });

    if (reduceMotion || !("IntersectionObserver" in window)) {
      sections.forEach((section) => {
        section.classList.add("portfolio-scroll-visible");
      });
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add(
            "portfolio-scroll-visible",
          );
          observer.unobserve(entry.target);
        });
      },
      {
        rootMargin: "0px 0px -8% 0px",
        threshold: 0.06,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return null;
};

export default ScrollEffects;
