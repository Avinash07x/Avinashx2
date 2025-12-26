import React from "react";
import Avinash from "../assets/Avinash-2.png";
import CV from "../assets/AVINASH_SHARMA.pdf"; // PDF inside src/assets

const Home = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center bg-gray-900 px-6 py-20"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT SIDE TEXT */}
          <div className="space-y-6 md:pr-6">
            <p className="text-purple-600 font-medium text-lg">Hello, I am</p>

            <h1 className="text-5xl md:text-6xl font-extrabold text-blue-500 leading-tight">
              Avinash Sharma
            </h1>

            <h3 className="text-2xl font-semibold text-gray-500">
              Full Stack MERN Developer
            </h3>

            <p className="text-gray-400 max-w-md leading-relaxed">
              I have been working as a developer building modern, responsive,
              and scalable web applications. I specialize in UI/UX, web
              development, and creating seamless user experiences.
            </p>

            {/* DOWNLOAD CV BUTTON */}
            <a
              href={CV} // Imported PDF
              download="Avinash-Sharma-CV.pdf"
              className="inline-block bg-purple-600 text-white px-6 py-3 rounded-xl text-lg font-medium shadow-lg hover:bg-blue-700 transition-all duration-300"
            >
              Download CV
            </a>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="flex justify-center md:justify-end shadow-xl rounded-2xl overflow-hidden">
            <img
              src={Avinash}
              alt="Avinash Sharma"
              className="w-[330px] md:w-[450px] drop-shadow-xl"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;



// import React from "react";
// import Avinash from "../assets/Avinash-2.png";
// import { Link } from "react-router-dom";
// import Contact from "./Contact";
// import About from "./About";
// import Skills from "./Skills";
// import Experience from "./Experience";
// import Projects from "./Projects";

// const Home = () => {
//   return (
//     <>
//       {/* HERO SECTION */}
//       <section
//         id="home"
//         className="min-h-screen flex items-center justify-center px-6 py-20"
//       >
//         <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

//           {/* LEFT TEXT AREA */}
//           <div className="space-y-6 md:pr-10">
//             <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
//               Hi,<br /> I'm{" "}
//               <span className="text-red-500">Avinash</span>
//             </h1>

//             <p className="text-xl text-gray-700 font-medium">
//               Full Stack Developer / UI Engineer
//             </p>

//             <div className="pt-4">
//               <Link
//                 to="/contact"
//                 className="inline-flex items-center gap-2 bg-red-500 text-white px-6 py-3 rounded-xl shadow-md hover:bg-red-600 transition-all duration-300 text-lg"
//               >
//                 Hire Me →
//               </Link>
//             </div>
//           </div>

//           {/* RIGHT SIDE IMAGE + INFO TEXT */}
//           <div className="relative flex flex-col items-center text-center md:text-left">
//             {/* IMAGE */}
//             <img
//               src={Avinash}
//               alt="Avinash Sharma"
//               className="w-80 md:w-[420px] rounded-2xl object-cover shadow-xl"
//             />

//             {/* SIDE DESCRIPTION LIKE SAMPLE */}
//             <div className="mt-6 space-y-3">
//               <p className="text-red-500 font-semibold">Expert On</p>

//               <h3 className="text-xl font-semibold text-gray-800 leading-relaxed">
//                 Based in India<br /> I’m a Full-Stack MERN Developer.
//               </h3>

//               <p className="text-gray-600 max-w-sm">
//                 Looking for a developer to build your product and grow your
//                 business?  
//                 Let’s shake hands and work together.
//               </p>

//               <Link
//                 to="/resume"
//                 className="text-red-500 underline underline-offset-4 hover:text-red-600 font-medium"
//               >
//                 Download CV ↓
//               </Link>
//             </div>
//           </div>

//         </div>
//       </section>

//       {/* OTHER SECTIONS BELOW */}
//       <About />
//       <Skills />
//       <Experience />
//       <Projects />
//       <Contact />
//     </>
//   );
// };

// export default Home;

