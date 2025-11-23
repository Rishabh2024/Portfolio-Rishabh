import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, animateScroll as scroll, Events } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState('home');

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => closeMenu();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Track which section is active
    Events.scrollEvent.register('begin', (to) => setActive(to));
    Events.scrollEvent.register('end', (to) => setActive(to));
    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  const sections = ["home", "about", "services", "contact"];

  return (
    <header className="fixed z-50 w-full border-b shadow-lg backdrop-blur-lg bg-black/40 border-white/10">
      <div className="flex items-center justify-between px-6 py-4 mx-auto max-w-7xl md:px-12">

        {/* Logo */}
        <div onClick={() => scroll.scrollToTop()} className="flex items-center gap-2 cursor-pointer">
          <img
            src="/images/logo.webp"
            width={42}
            alt="logo"
            className="rounded-full border-2 border-purple-500 shadow-[0_0_15px_rgba(147,51,234,0.5)]"
          />
          <span className="text-lg font-semibold tracking-wide text-white">Rishabh Pal</span>
        </div>

        {/* Mobile Icon */}
        <div className="z-50 md:hidden" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={26} className="text-white" /> : <FaBars size={26} className="text-white" />}
        </div>

        {/* Menu */}
        <ul
          className={`fixed md:static top-0 right-0 w-[70%] md:w-auto h-full md:h-auto 
          bg-black/80 md:bg-transparent  
          flex flex-col md:flex-row items-center md:space-x-10 space-y-8 md:space-y-0 
          transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} 
          md:translate-x-0 transition-transform duration-300 ease-in-out 
          pt-24 md:pt-0`}
        >
          {sections.map((item) => (
            <li key={item}>
              <Link
                to={item}
                smooth={true}
                duration={500}
                spy={true}          // Track active link
                offset={-80}        // Adjust for fixed header
                onClick={closeMenu}
                className={`text-lg font-medium tracking-wide transition-all duration-300 cursor-pointer
                  ${active === item
                    ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#9333ea] via-[#6366f1] to-[#3b82f6]'
                    : 'text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#9333ea] via-[#6366f1] to-[#3b82f6]'}`
                }
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
