import React from "react";
import { motion } from "framer-motion";
import { Element } from "react-scroll";
import { Download, ArrowRight } from "lucide-react";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <Element name="home" className="relative flex items-center min-h-screen pt-20 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-violet-600/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full" />

      <div className="grid items-center w-full grid-cols-1 gap-12 px-6 mx-auto max-w-7xl md:px-12 lg:px-24 lg:grid-cols-2">
        {/* Left Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="z-10 text-center lg:text-left"
        >
          <motion.div
  variants={itemVariants}
  className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-semibold border rounded-full border-violet-500/30 bg-violet-500/10 text-violet-400 mt-[22px] md:mt-0"
>
            <span className="relative flex w-2 h-2">
              <span className="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping bg-violet-400"></span>
              <span className="relative inline-flex w-2 h-2 rounded-full bg-violet-500"></span>
            </span>
            Available for new projects
          </motion.div>

          <motion.h1 variants={itemVariants} className="mb-6 text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
            I build digital <br />
            <span className="text-gradient">experiences</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="max-w-xl mx-auto mb-10 text-lg text-slate-400 lg:mx-0">
            Hi, I'm <span className="font-semibold text-white">Rishabh Pal</span>. A passionate Software Developer
            focused on creating high-performance, human-centric web applications with clean code.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
            <a
              // href="/Resume.pdfff"
              download
              className="flex items-center gap-2 px-8 py-4 font-bold text-white transition-all shadow-xl group bg-violet-600 hover:bg-violet-500 rounded-2xl shadow-violet-600/20 active:scale-95"
            >
              Download CV
              <Download size={20} className="group-hover:translate-y-0.5 transition-transform" />
            </a>
            <button className="flex items-center gap-2 px-8 py-4 font-bold text-white transition-all border group bg-white/5 hover:bg-white/10 rounded-2xl border-white/10 active:scale-95">
              View Work
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>
        </motion.div>

        {/* Right Visual Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            {/* Animated rings */}
            <div className="absolute inset-0 p-4 animate-spin-slow">
              <div className="w-full h-full border-2 border-dashed rounded-full border-violet-500/30" />
            </div>

            <div className="absolute inset-0 p-8">
              <div className="relative z-10 w-full h-full overflow-hidden border-2 rounded-3xl border-white/10 group">
                <img
                  src="/images/Rishabh.jpg"
                  alt="Rishabh Pal"
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-violet-900/40 to-transparent" />
              </div>
            </div>

            {/* Floating Badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute z-20 px-4 py-2 -top-4 -right-4 glass-card border-violet-500/20"
            >
              <span className="text-xl">🚀</span>
            </motion.div>
          
          </div>
        </motion.div>
      </div>
    </Element>
  );
};

export default Hero;
