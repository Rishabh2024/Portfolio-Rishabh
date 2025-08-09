import React from "react";
import { FaInstagram, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import { Element } from "react-scroll";

const Contact = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Element
      name="contact"
      className="grid gap-4 p-4 md:p-6 lg:p-8 bg-myWhite place-items-center md:gap-6 rounded-t-3xl "
    >
      <div>
        <img
          src="/images/handshake.svg"
          alt="handshake"
          width={150}
          className="p-4 rounded-full shadow-lg bg-myBg"
        />
      </div>
      <h1 className="text-2xl font-semibold text-center text-myBlack md:text-4xl ">
        Feel free to contact me <br />
        about your project
      </h1>
      <div className="flex flex-wrap items-center justify-center w-full gap-4 pt-6">
        <a
          href="https://www.linkedin.com/in/errishabhpal2024/"
          target="_blank"
          className="px-12 py-4 text-lg border-2 rounded-full shadow-lg font-otterco bg-myBlack text-myWhite border-myBg"
        >
          LinkedIn
        </a>
        <a
          href="https://wa.me/9318347595?text=Hello%2C%20I%20would%20like%20to%20get%20in%20touch%20with%20you!"
          target="_blank"
          className="px-12 py-4 text-lg border-2 rounded-full shadow-lg font-otterco bg-myWhite text-myBlack border-myBg"
        >
          Whatsapp
        </a>
      </div>
      <hr className="w-full h-[1px] bg-myBlack" />
      <footer className="flex flex-col items-center justify-between w-full md:flex-row">
        <p className="text-sm font-otterco">
          {" "}
          &copy; {currentYear} All rights reserved.
        </p>
        <ul className="flex items-center justify-end gap-2 mb-4">
          <li>
            <a
              href="https://www.linkedin.com/in/errishabhpal2024/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-myBlack "
            >
              <FaInstagram className="w-5 h-5" />
              <span className="text-base font-normal font-otterco">
                Instagram
              </span>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/errishabhpal2024/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-myBlack "
            >
              <FaLinkedinIn className="w-4 h-4" />
              <span className="text-base font-normal font-otterco">
                LinkedIn
              </span>
            </a>
          </li>
          <li>
            <a
              href="mailto:rishabhpal326@gmail.com"
              className="flex items-center space-x-2 text-myBlack "
            >
              <FaEnvelope className="w-4 h-4" />
              <span className="text-base font-normal font-otterco">Email</span>
            </a>
          </li>
        </ul>
      </footer>
    </Element>
  );
};

export default Contact;
