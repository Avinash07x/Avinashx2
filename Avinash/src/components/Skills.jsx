import React, { useRef } from "react";

// ✅ Skill Logos
import htmlLogo from "../assets/html.png";
import cssLogo from "../assets/css.png";
import jsLogo from "../assets/javascript.png";
import reactLogo from "../assets/react.png";
import reduxLogo from "../assets/redux.png";
import bootstrapLogo from "../assets/bootstrap.png";
import tailwindLogo from "../assets/tdlogo.png";
import muiLogo from "../assets/mui.png";
import nodeLogo from "../assets/node.png";
import expressLogo from "../assets/express.png";
import middleware from "../assets/middleware.png";
import restapi from "../assets/rest api.png";
import mongoLogo from "../assets/mongodb.png";
import mongoose from "../assets/mongoose.png";
import jwtLogo from "../assets/jwt.png";
import gitLogo from "../assets/git.png";
import githubLogo from "../assets/github.png";
import postmanLogo from "../assets/postman.png";
import lucide from "../assets/logo.svg";
import googlefonts from "../assets/google-fonts.png";
import vite from "../assets/vite.png";
import vercelLogo from "../assets/Vercel.png";

const Skills = () => {
  const canvasRef = useRef(null);

  // ✅ Skills Data
  const skills = {
    frontend: [
      { name: "HTML5", logo: htmlLogo },
      { name: "CSS3", logo: cssLogo },
      { name: "JavaScript", logo: jsLogo },
      { name: "React.js", logo: reactLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
      { name: "Tailwind CSS", logo: tailwindLogo },
      { name: "Material UI", logo: muiLogo },
    ],
    backend: [
      { name: "Node.js", logo: nodeLogo },
      { name: "Express.js", logo: expressLogo },
      { name: "Middleware", logo: middleware },
      { name: "REST API", logo: restapi },
      { name: "MongoDB", logo: mongoLogo },
      { name: "Mongoose", logo: mongoose },
      { name: "JWT Auth", logo: jwtLogo },
    ],
    tools: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Google Fonts", logo: googlefonts },
      { name: "Lucide Icons", logo: lucide },
      { name: "Vite", logo: vite },
      { name: "Vercel", logo: vercelLogo },
    ],
  };

  const categories = [
    {
      title: "Frontend Development",
      items: skills.frontend,
      color: "from-blue-500 to-purple-500",
    },
    {
      title: "Backend & Database",
      items: skills.backend,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Tools & Technologies",
      items: skills.tools,
      color: "from-green-500 to-teal-500",
    },
  ];

  return (
    <section
      id="skills"
      className="relative min-h-screen bg-gray-900 overflow-hidden"
    >
      {/* ✅ Decorative Canvas (DOES NOT BLOCK CLICKS) */}
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
      />

      {/* ✅ Content */}
      <div className="relative z-10 py-24 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-5 text-center">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-14 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            Technical Skills
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {categories.map((cat, idx) => (
              <div
                key={idx}
                className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8
                           shadow-[0px_0px_20px_rgba(0,0,0,0.4)]
                           hover:shadow-[0px_0px_35px_rgba(80,80,255,0.5)]
                           transition-all hover:-translate-y-2 duration-300"
              >
                <h3 className="text-2xl font-semibold text-white mb-6">
                  {cat.title}
                </h3>

                <div className="flex flex-wrap justify-center gap-3">
                  {cat.items.map((skill, index) => (
                    <div
                      key={index}
                      className={`flex items-center gap-2 px-4 py-2 rounded-full
                                  bg-gradient-to-r ${cat.color} text-white
                                  shadow-md hover:shadow-xl
                                  transition-all duration-300 hover:scale-105`}
                    >
                      <img
                        src={skill.logo}
                        alt={skill.name}
                        className="w-5 h-5 object-contain"
                      />
                      <span className="font-medium">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
