import React from "react";
import { Element } from "react-scroll";

const Hero = () => {
  return (
    <Element
      name={"home"}
      className="grid gap-4 p-4 pt-24 overflow-x-hidden md:pt-28 bg-myBg place-items-center md:gap-6 rounded-b-3xl "
    >
      <div className="relative z-0 w-fit ">
        <img
          src="/images/Rishabh.jpg"
          width={160}
          alt="Rishabh"
          className="border-4 rounded-full shadow-lg border-myWhite"
        />
        <p className="absolute px-6 py-3 text-xs font-semibold rounded-full shadow-lg font-otterco bg-myWhite top-16 -right-24 animate-slideIn">
          Rishabh Pal 👋🏼
        </p>
      </div>
      <div>
        <h1 className="text-3xl font-semibold tracking-tight text-center text-gradient md:text-5xl">
          Software Developer
        </h1>
      </div>
      <div className="py-6">
        <a
          download="Software-Developer.pdf"
          href="/Software-Developer.pdf"
          className="px-12 py-4 text-lg rounded-full shadow-lg font-otterco bg-myBlack text-myWhite"
        >
          Resume
        </a>
      </div>
    </Element>
  );
};

export default Hero;
