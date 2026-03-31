import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, animateScroll as scroll } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'services' },
    { name: 'Contact', to: 'contact' },
  ];

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  const mobileMenuVariants = {
    closed: { x: '100%', opacity: 0 },
    open: { 
      x: 0, 
      opacity: 1,
      transition: { type: 'spring', stiffness: 300, damping: 30 }
    }
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-4 px-6 md:px-12' : 'py-6 px-6 md:px-12'
      }`}
    >
      <div className={`max-w-7xl mx-auto flex items-center justify-between glass-card px-6 py-4 ${
        scrolled ? 'shadow-2xl' : 'shadow-none'
      }`}>
        {/* Logo */}
        <div 
          onClick={() => scroll.scrollToTop()} 
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="relative">
            <img
              src="/images/logo.webp"
              width={40}
              alt="logo"
              className="rounded-full border-2 border-violet-500/50 group-hover:border-violet-500 transition-colors"
            />
            <div className="absolute inset-0 rounded-full bg-violet-500/20 blur-md group-hover:bg-violet-500/40 transition-all" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white hidden sm:block">
            Rishabh <span className="text-violet-400">Pal</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth={true}
              duration={500}
              spy={true}
              offset={-100}
              activeClass="active-link"
              className="relative text-sm font-medium text-slate-300 hover:text-white transition-colors cursor-pointer group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-violet-500 transition-all group-hover:w-full" />
            </Link>
          ))}
          <Link
            to="contact"
            smooth={true}
            className="px-5 py-2.5 bg-violet-600 hover:bg-violet-500 text-white text-sm font-semibold rounded-full transition-all shadow-lg shadow-violet-600/20 active:scale-95 cursor-pointer"
          >
            Hire Me
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2 hover:bg-white/5 rounded-lg transition-colors"
          onClick={() => setIsOpen(true)}
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
            />
            <motion.div
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-0 right-0 bottom-0 w-[280px] bg-[#0a0a0c] z-[70] shadow-2xl p-8 flex flex-col items-center gap-12"
            >
              <button 
                className="self-end text-slate-400 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <X size={28} />
              </button>
              
              <div className="flex flex-col items-center gap-8 mt-12 w-full">
                {menuItems.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    smooth={true}
                    offset={-80}
                    onClick={() => setIsOpen(false)}
                    className="text-2xl font-bold text-slate-300 hover:text-violet-400 transition-colors cursor-pointer"
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  to="contact"
                  smooth={true}
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center py-4 bg-violet-600 text-white font-bold rounded-xl shadow-xl shadow-violet-600/20 active:scale-95"
                >
                  Hire Me
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
