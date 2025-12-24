import React from "react";
import { Element } from "react-scroll";

const Hero = () => {
  return (
    <Element
      name="home"
      className="relative grid gap-4 p-4 pt-24 overflow-x-hidden md:pt-28 place-items-center md:gap-6 rounded-b-3xl"
    >
      {/* 🔥 FULL BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: "url('/images/banner.png')",
        }}
      ></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/60 rounded-b-3xl"></div>

      {/* Actual Content */}
      <div className="relative z-10">
        <div className="relative mx-auto w-fit">
          <img
            src="/images/Rishabh.jpg"
            width={160}
            alt="Rishabh"
            className="border-4 rounded-full shadow-lg border-myWhite"
          />
          <p className="absolute px-6 py-3 text-xs font-semibold rounded-full shadow-lg font-otterco bg-myWhite top-16 -right-24 animate-slideIn">
            Hi, I am Rishabh 👋🏼
          </p>
        </div>

        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-center text-white md:text-5xl">
          Gen AI Developer 
        </h1>

        <div className="py-6 text-center">
  <a
    download="Software-Developer.pdf"
    href="/Software-Developer.pdf"
    className="px-12 py-4 text-lg text-white transition-all duration-300 rounded-full shadow-xl font-otterco bg-gradient-to-r from-purple-600 to-blue-600 animate-pulse hover:scale-105"
  >
    Resume
  </a>
</div>

      </div>
    </Element>
  );
};

export default Hero;
