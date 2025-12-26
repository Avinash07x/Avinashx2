import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What technologies do you specialize in?",
    answer:
      "I specialize in React.js, Tailwind CSS, JavaScript, Node.js, Express.js, MongoDB, and modern UI/UX practices."
  },
  {
    question: "Do you build responsive websites?",
    answer:
      "Yes. All my projects are fully responsive and optimized for mobile, tablet, and desktop devices."
  },
  {
    question: "Do you provide backend development as well?",
    answer:
      "Yes. I build secure REST APIs using Node.js, Express.js, MongoDB, authentication (JWT), and payment integrations."
  },
  {
    question: "Are your projects SEO optimized?",
    answer:
      "Yes. I follow SEO best practices including semantic HTML, performance optimization, and accessibility."
  },
  {
    question: "Can I see live demos of your work?",
    answer:
      "Yes. Live demos are available in the Projects section, along with GitHub repositories."
  }
];

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-24 bg-gray-900">
      <div className="max-w-4xl mx-auto px-5">
        {/* Heading */}
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-gray-400 mb-14">
          Common questions about my skills, workflow, and development process
        </p>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-800 border border-gray-700 rounded-2xl overflow-hidden transition-all duration-300"
            >
              {/* Question */}
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex justify-between items-center text-left px-6 py-5 text-white font-semibold text-lg"
              >
                {faq.question}
                <ChevronDown
                  className={`w-6 h-6 transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180 text-purple-400" : ""
                  }`}
                />
              </button>

              {/* Answer */}
              <div
                className={`px-6 overflow-hidden transition-all duration-300 ${
                  activeIndex === index
                    ? "max-h-40 pb-6 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-300 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faqs;
