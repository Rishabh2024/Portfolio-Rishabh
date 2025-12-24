import React from "react";
import { skillData } from "../../data";
import SkillCard from "./SkillCard";
import { Element } from "react-scroll";

const Skills = () => {
  return (
    <Element
      name="skills"
      className="relative p-6 sm:p-8 bg-myBg rounded-t-3xl"
    >
      {/* SECTION HEADLINE */}
      <div className="mb-10 text-center">
        <h1 className="relative inline-block text-3xl font-semibold md:text-5xl text-myBlack">
          My Skills

          {/* Gradient Underline */}
          <span className="block h-[4px] w-20 mx-auto mt-3 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></span>
        </h1>

        <p className="max-w-xl mx-auto mt-4 text-sm text-myBlack/80 md:text-base">
       Building production-grade AI-powered solutions.
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4 md:gap-8 place-items-center">
        {skillData.map((skill, index) => (
          <div
            key={index}
            className="opacity-0 animate-fadeInUp"
            style={{ animationDelay: `${index * 0.12}s` }}
          >
            <SkillCard skill={skill} />
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
          animation: fadeInUp 0.6s ease forwards;
        }
      `}</style>
    </Element>
  );
};

export default Skills;
