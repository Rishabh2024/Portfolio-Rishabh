import React from "react";
import { projectData } from "../../data";
import ProjectCard from "./ProjectCard";
import { Element } from "react-scroll";

const Project = () => {
  return (
    <Element
      name="projects"
      className="grid gap-4 p-2 sm:p-4 md:p-6 lg:p-8 bg-myWhite place-items-center md:gap-6 rounded-b-3xl "
    >
      <h1 className="py-4 text-2xl font-semibold text-center text-myBlack md:text-4xl md:py-6">
        My Recent Work
      </h1>
      <div className="grid grid-cols-1 gap-6 p-4 md:grid-cols-2">
        {projectData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </Element>
  );
};

export default Project;
