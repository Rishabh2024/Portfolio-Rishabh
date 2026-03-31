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
    <Element name="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-violet-600/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center lg:text-left z-10"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-400 text-sm font-semibold mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
            </span>
            Available for new projects
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
            I build digital <br />
            <span className="text-gradient">experiences</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-lg text-slate-400 mb-10 max-w-xl mx-auto lg:mx-0">
            Hi, I'm <span className="text-white font-semibold">Rishabh Pal</span>. A passionate Software Developer
            focused on creating high-performance, human-centric web applications with clean code.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <a
              // href="/Resume.pdfff"
              download
              className="group flex items-center gap-2 px-8 py-4 bg-violet-600 hover:bg-violet-500 text-white font-bold rounded-2xl transition-all shadow-xl shadow-violet-600/20 active:scale-95"
            >
              Download CV
              <Download size={20} className="group-hover:translate-y-0.5 transition-transform" />
            </a>
            <button className="group flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-2xl transition-all border border-white/10 active:scale-95">
              View Work
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
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
            <div className="absolute inset-0 animate-spin-slow p-4">
              <div className="w-full h-full rounded-full border-2 border-dashed border-violet-500/30" />
            </div>

            <div className="absolute inset-0 p-8">
              <div className="w-full h-full rounded-3xl overflow-hidden border-2 border-white/10 relative z-10 group">
                <img
                  src="/images/Rishabh.jpg"
                  alt="Rishabh Pal"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-violet-900/40 to-transparent" />
              </div>
            </div>

            {/* Floating Badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 glass-card px-4 py-2 border-violet-500/20 z-20"
            >
              <span className="text-xl">🚀</span>
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-6 -left-6 glass-card px-4 py-2 border-blue-500/20 z-20"
            >
              <span className="text-sm font-bold text-blue-400">#Developer</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </Element>
  );
};

export default Hero;
