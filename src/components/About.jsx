import React from "react";
import { Element } from "react-scroll";
import { FaBriefcase, FaProjectDiagram, FaSmile, FaUserTie } from "react-icons/fa";

const About = () => {
  return (
    <Element
      name="about"
      className="relative px-6 py-20 bg-gradient-to-b from-indigo-50 via-white to-white rounded-b-3xl"
    >
      {/* Section Title */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-extrabold text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text">
          About Me
        </h1>
        <span className="block w-20 h-1 mx-auto mt-3 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></span>
        <p className="max-w-xl mx-auto mt-4 text-gray-600">
          I am Rishabh Pal, a passionate Software Developer building high-quality websites and applications with modern UI, responsive layouts, and clean architecture.
        </p>
      </div>

      {/* Content */}
      <div className="flex flex-col items-center max-w-6xl gap-12 mx-auto md:flex-row">
        {/* Icon instead of Avatar */}
        <div className="relative flex-shrink-0">
          <div className="flex items-center justify-center w-48 h-48 text-6xl text-indigo-600 transition-transform duration-500 transform border-4 border-indigo-500 rounded-full shadow-xl bg-gradient-to-tr from-purple-200 via-pink-200 to-indigo-200 hover:scale-105">
            <FaUserTie />
          </div>
        </div>

        {/* Description + Stats */}
        <div className="flex-1 space-y-8">
          {/* Description */}
          <p className="text-lg leading-relaxed text-gray-700 opacity-0 animate-fadeInUp" style={{ animationDelay: "0.2s" }}>
            I specialize in building modern, responsive web applications using React, Next.js, and Node.js GoLang. My goal is to deliver seamless user experiences with clean code and visually appealing designs.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6">
            <div className="flex flex-col items-center p-4 transition bg-white shadow rounded-xl hover:shadow-lg">
              <FaBriefcase className="w-6 h-6 mb-2 text-indigo-500" />
              <p className="text-2xl font-bold text-indigo-600">2+</p>
              <p className="text-sm text-gray-500">Year Experience</p>
            </div>
            <div className="flex flex-col items-center p-4 transition bg-white shadow rounded-xl hover:shadow-lg">
              <FaProjectDiagram className="w-6 h-6 mb-2 text-green-500" />
              <p className="text-2xl font-bold text-green-600">20+</p>
              <p className="text-sm text-gray-500">Projects Completed</p>
            </div>
            <div className="flex flex-col items-center p-4 transition bg-white shadow rounded-xl hover:shadow-lg">
              <FaSmile className="w-6 h-6 mb-2 text-pink-500" />
              <p className="text-2xl font-bold text-pink-600">10+</p>
              <p className="text-sm text-gray-500">Happy Clients</p>
            </div>
          </div>
        </div>
      </div>

      {/* Fade Animation */}
      <style>{`
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp {
          animation: fadeInUp .6s ease forwards;
        }
      `}</style>
    </Element>
  );
};

export default About;
