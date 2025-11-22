import React from "react";
import { projectData } from "../../data";
import ProjectCard from "./ProjectCard";
import { Element } from "react-scroll";

const Project = () => {
  return (
    <Element
      name="projects"
      className="relative p-4 sm:p-6 bg-myWhite rounded-b-3xl"
    >
      {/* Section Title */}
      <div className="mb-6 text-center">
        <h1 className="text-2xl font-semibold md:text-4xl text-myBlack">
          My Recent Work
        </h1>

        {/* Gradient Underline */}
        <span className="block h-[3px] w-16 mx-auto mt-2 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></span>

        <p className="max-w-md mx-auto mt-2 text-xs md:text-sm text-myBlack/70">
          A quick look at my latest projects built using modern technologies.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 gap-4 px-1 md:grid-cols-2 place-items-center md:px-4">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="opacity-0 animate-fadeInUp"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <ProjectCard project={project} />
          </div>
        ))}
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

export default Project;
