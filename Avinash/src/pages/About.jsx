import React, { useEffect, useRef, useState } from "react";
import Abouts from "../assets/Aboutv2.webm"; 

const About = () => {
  const statsRef = useRef(null);
  const [startCount, setStartCount] = useState(false);
  const [projectCount, setProjectCount] = useState(0);

  // ✅ Trigger animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStartCount(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) observer.observe(statsRef.current);
  }, []);

  // ✅ Project counter animation
  useEffect(() => {
    if (!startCount) return;

    let start = 0;
    const target = 10;
    const interval = setInterval(() => {
      start += 1;
      setProjectCount(start);
      if (start >= target) clearInterval(interval);
    }, 120);

    return () => clearInterval(interval);
  }, [startCount]);

  return (
    <section id="about" className="py-20 bg-gray-900 relative">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* ✅ LEFT CONTENT */}
        <div className="space-y-8 text-center md:text-left">
          <h2 className="text-5xl font-bold text-blue-500 gradient-text">
            About Me
          </h2>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            I'm <span className="text-blue-400 font-semibold">Avinash Sharma</span>, 
            a dedicated <span className="text-purple-400 font-semibold">Full Stack Developer</span> 
            specializing in the <span className="text-green-400 font-semibold">MERN stack</span>.
          </p>

          <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
            My approach to development is focused on clean code, performance, and UI/UX.
          </p>

          {/* ✅ STATS */}
          <div ref={statsRef} className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">

            <div className="p-6 bg-blue-600 bg-opacity-10 rounded-xl border border-blue-600 shadow-md">
              <h3 className="text-4xl font-bold text-blue-400">Fresher</h3>
              <p className="text-sm text-gray-300 mt-2">Years Experience</p>
            </div>

            <div className="p-6 bg-purple-600 bg-opacity-10 rounded-xl border border-purple-600 shadow-md">
              <h3 className="text-4xl font-bold text-purple-400">
                {startCount ? projectCount : 0}+
              </h3>
              <p className="text-sm text-gray-300 mt-2">Projects Completed</p>
            </div>

            <div className="p-6 bg-green-600 bg-opacity-10 rounded-xl border border-green-600 shadow-md">
              <h3 className="text-4xl font-bold text-green-400">MERN</h3>
              <p className="text-sm text-gray-300 mt-2">MERN Stack Expertise</p>
            </div>

          </div>
        </div>

        {/* ✅ RIGHT SIDE VIDEO (WEBM FIXED ✅) */}
        <div className="flex justify-center">
          <div className="w-full max-w-md  overflow-hidden">
            <video
              src={Abouts}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
