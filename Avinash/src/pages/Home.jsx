import React from "react";
import { motion } from "framer-motion";
import profileImg from "../assets/Avinash-2.png";
import CV from "../assets/AvinashCV.pdf";

const Home = ({ name, role, description }) => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gray-900 px-6 py-20"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <p className="text-purple-500 text-lg font-medium">
            Hello, I am
          </p>

          <h1 className="text-5xl md:text-6xl font-extrabold text-blue-500">
            {name}
          </h1>

          <h3 className="text-2xl font-semibold text-gray-400">
            {role}
          </h3>

          <p className="text-gray-400 max-w-md leading-relaxed">
            {description}
          </p>

          <motion.a
            href={CV}
            download="Avinash-Sharma-CV.pdf"
            whileHover={{ scale: 1.95 }}
            whileTap={{ scale: 1.35 }}
            className="inline-block bg-purple-600 text-white px-6 py-3 rounded-xl text-lg font-medium shadow-lg hover:bg-blue-700 transition"
          >
            Download CV
          </motion.a>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="flex justify-center md:justify-end"
        >
          <img
            src={profileImg}
            alt={name}
            className="w-[320px] md:w-[450px] rounded-2xl shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Home;