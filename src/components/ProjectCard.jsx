import React from "react";

const ProjectCard = ({ project }) => {
  const { name, description, img, demoLink, githubLink } = project;
  console.log(name);

  return (
    <div className="overflow-hidden transition duration-300 transform border-2 border-gray-800 rounded-lg shadow-md bg-myWhite">
      <img
        src={img}
        alt={name}
        className="object-cover w-full pt-6 pl-6 pr-6 rounded-md aspect-video"
      />
      <div className="p-6">
        <h2 className="mb-2 text-lg font-bold text-myBlack font-otterco">
          {name}
        </h2>
        <p className="mb-4 text-lg text-myBlack font-otterco ">{description}</p>
        <div className="flex flex-wrap items-center justify-start w-full gap-3">
          <a
            href={demoLink}
            target="_blank"
            className="text-base px-12 py-4 font-otterco bg-myBlack text-myWhite rounded-full border-myBg border-[1px] "
          >
            Demo
          </a>
          <a
            href={githubLink}
            target="_blank"
            className="px-12 py-4 text-base border-2 rounded-full font-otterco bg-myWhite text-myBlack border-myBg "
          >
            Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
