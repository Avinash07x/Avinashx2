import React from "react";
import { Mail, Linkedin, Github } from "lucide-react";
import Whatsapp from "../assets/whatsapp.png"; // WhatsApp icon
import { Link } from "react-router-dom";

const Contact = () => {
  const socials = [
    { href: "mailto:itsavinash0@gmail.com", icon: Mail, bg: "from-blue-500 to-purple-600" },
    { href: "https://www.linkedin.com/in/avinash-sharma", icon: Linkedin, bg: "from-blue-700 to-blue-400" },
    { href: "https://github.com/Avinash07x", icon: Github, bg: "from-gray-800 to-gray-600" },
    { href: "https://wa.me/919664007889", icon: Whatsapp, bg: "from-green-500 to-green-400" },
  ];

  return (
    <section id="contact" className="py-24 bg-gray-900">
      <div className="max-w-6xl mx-auto px-5 text-center space-y-12">

        {/* Heading */}
        <h2 className="text-5xl md:text-6xl font-bold text-blue-500 gradient-text">
          Let's Connect
        </h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          I'm always open to discussing new opportunities, projects, or collaborations.  
          Feel free to reach out via email, WhatsApp, or social media.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center flex-wrap gap-6">
          {socials.map((social, idx) => (
            <a
              key={idx}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-14 h-14 md:w-20 md:h-20 rounded-full flex items-center justify-center bg-gradient-to-r ${social.bg} text-white shadow-lg transform hover:scale-110 transition-transform duration-300`}
            >
              {typeof social.icon === "string" ? (
                <img src={social.icon} alt="icon" className="w-8 h-8 md:w-10 md:h-10" />
              ) : (
                <social.icon className="w-8 h-8 md:w-10 md:h-10" />
              )}
            </a>
          ))}
        </div>

        {/* Call-to-Action Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6">
          <a
            href="mailto:itsavinash0@gmail.com"
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
          >
            Send Email
          </a>
          <Link
            href="https://wa.me/919664007889"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-green-500 text-green-500 px-8 py-3 rounded-full font-semibold hover:bg-green-500 hover:text-white hover:-translate-y-1 transition-all duration-300"
          >
            WhatsApp Me
          </Link>
        </div>

        {/* Short Message / Footer Note */}
        <p className="text-gray-400 text-sm mt-10">
          I'll try to respond as soon as possible. Let's build something amazing together!
        </p>

      </div>
    </section>
  );
};

export default Contact;
