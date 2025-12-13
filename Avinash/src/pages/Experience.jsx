import React, { useState } from "react";
import { Briefcase, X } from "lucide-react";
import certificate2 from "../assets/Appreciation Certificate.png";
import certificate1 from "../assets/Avinash Internship Certificate.png";

const experiences = [
  {
    role: "Full Stack Developer Intern",
    company: "Site Worx Infotech",
    period: "Feb 2025 - Jul 2025",
    responsibilities: [
      'Led a team of interns in the end-to-end development of "Digital Cloud Keepers"',
      "Built responsive frontend using React.js and Tailwind CSS",
      "Developed backend functionalities with Node.js and integrated live chat support",
      "Oversaw task distribution, team coordination, and quality assurance",
      "Implemented modern development standards and best practices",
    ],
  },
];

const Experience = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="experience" className="py-24 bg-gray-900">
      <div className="max-w-6xl mx-auto px-5 text-center">
        <h2 className="text-5xl md:text-6xl font-bold text-blue-500 gradient-text mb-16">
          Work Experience
        </h2>

        <div className="grid md:grid-cols-1 gap-10">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <Briefcase className="w-8 h-8 text-blue-500" />
                  <div className="text-left">
                    <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                    <p className="text-gray-400">{exp.company}</p>
                  </div>
                </div>
                <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                  {exp.period}
                </span>
              </div>
              <ul className="space-y-3 text-gray-300 pl-4">
                {exp.responsibilities.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="text-blue-500 mt-1">▶</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Certificates Section */}
        <h2 className="text-4xl md:text-5xl font-bold gradient-text mt-20 mb-10">
          Certificate
        </h2>
        <div className="flex flex-wrap justify-center gap-12">
          {[certificate1, certificate2].map((cert, index) => (
            <div
              key={index}
              className="w-[520px] bg-gray-800 rounded-2xl p-4 border border-gray-700 overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
              onClick={() => setSelectedCert(cert)}
            >
              <img
                src={cert}
                alt={`Certificate ${index + 1}`}
                className="rounded-xl w-full h-auto"
              />
            </div>
          ))}
        </div>

        {/* Fullscreen Modal */}
        {selectedCert && (
          <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
            <button
              className="absolute top-5 right-5 text-white text-3xl"
              onClick={() => setSelectedCert(null)}
            >
              <X />
            </button>
            <img
              src={selectedCert}
              alt="Full Certificate"
              className="max-w-full max-h-full rounded-xl shadow-2xl"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Experience;
