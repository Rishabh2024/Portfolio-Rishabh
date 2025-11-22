import React from "react";
import { FaInstagram, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import { Element } from "react-scroll";

const Contact = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Element
      name="contact"
      className="grid gap-6 p-6 md:p-10 bg-myWhite rounded-t-3xl place-items-center"
    >
      {/* CONTACT ICON */}
      <div className="relative">
        <img
          src="/images/handshake.svg"
          alt="handshake"
          width={150}
          className="p-4 border rounded-full shadow-xl bg-myBg border-myBlack/10"
        />
        <span className="absolute inset-0 rounded-full blur-2xl bg-purple-300/30"></span>
      </div>

      {/* HEADING */}
      <h1 className="text-3xl font-semibold text-center md:text-5xl text-myBlack">
       Available for new 
        <br />
        <span className="text-transparent bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text">
          opportunities and collaborations
        </span>
      </h1>

      {/* CONTACT BUTTONS */}
      <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
  {/* LinkedIn Button */}
  <a
    href="https://www.linkedin.com/in/errishabhpal2024/"
    target="_blank"
    className="px-10 py-3 text-lg transition-all duration-300 border-2 border-[#0077B5] rounded-full shadow-lg font-otterco bg-[#0077B5] text-white hover:bg-transparent hover:text-[#0077B5]"
  >
    LinkedIn
  </a>

  {/* WhatsApp Button */}
  <a
    href="https://wa.me/9318347595?text=Hello%2C%20I%20would%20like%20to%20get%20in%20touch%20with%20you!"
    target="_blank"
    className="px-10 py-3 text-lg transition-all duration-300 border-2 border-[#25D366] rounded-full shadow-lg font-otterco bg-[#25D366] text-white hover:bg-transparent hover:text-[#25D366]"
  >
    WhatsApp
  </a>
</div>


      {/* SEPARATOR */}
      <hr className="w-full h-[1px] bg-myBlack/20 mt-6" />

      {/* FOOTER */}
      <footer className="flex flex-col items-center justify-between w-full p-4 md:flex-row bg-gradient-to-b from-black/40 via-black/10 to-black/60 rounded-b-3xl md:p-6">

  <p className="text-sm font-otterco text-myBlack/80">
    © {currentYear} All rights reserved.
  </p>

  {/* SOCIAL LINKS */}
  <ul className="flex gap-4 mt-4 md:mt-0">
    <li>
      <a
        href="https://www.instagram.com/"
        target="_blank"
        className="flex items-center gap-2 transition text-myBlack hover:text-purple-600"
      >
        <FaInstagram className="w-5 h-5" />
        <span className="font-otterco">Instagram</span>
      </a>
    </li>

    <li>
      <a
        href="https://www.linkedin.com/in/errishabhpal2024/"
        target="_blank"
        className="flex items-center gap-2 transition text-myBlack hover:text-blue-600"
      >
        <FaLinkedinIn className="w-4 h-4" />
        <span className="font-otterco">LinkedIn</span>
      </a>
    </li>

    <li>
      <a
        href="mailto:rishabhpal326@gmail.com"
        className="flex items-center gap-2 transition text-myBlack hover:text-red-600"
      >
        <FaEnvelope className="w-4 h-4" />
        <span className="font-otterco">Email</span>
      </a>
    </li>
  </ul>
</footer>

    </Element>
  );
};

export default Contact;
