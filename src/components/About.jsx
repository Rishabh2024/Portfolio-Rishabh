import React from "react";
import { motion } from "framer-motion";
import { Element } from "react-scroll";
import { Briefcase, FolderGit2, Users, User } from "lucide-react";

const About = () => {
  const stats = [
    { label: "Years Experience", value: "2+", icon: <Briefcase size={24} />, color: "text-violet-400" },
    { label: "Projects Completed", value: "20+", icon: <FolderGit2 size={24} />, color: "text-blue-400" },
    { label: "Happy Clients", value: "10+", icon: <Users size={24} />, color: "text-emerald-400" },
  ];

  return (
    <Element name="about" className="section-padding bg-[#0a0a0c] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-gradient-to-tr from-violet-600 to-blue-600 rounded-3xl rotate-6 blur-2xl opacity-20" />
              <div className="absolute inset-0 bg-violet-500/10 rounded-3xl -rotate-6 border border-violet-500/20" />
              <div className="relative w-full h-full glass-card flex items-center justify-center border-white/10">
                <User size={120} className="text-violet-500/50" />
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <div className="text-left">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold mb-6"
            >
              Building digital products <br />
              <span className="text-gradient">with purpose.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-400 text-lg mb-10 leading-relaxed"
            >
              Product-focused, data-driven <span className="text-white font-medium text-xl">Software Developer</span> with 2+ years of experience. 
              I specialize in building high-performance web applications using <span className="text-violet-400">React, Next.js, and Node.js</span>. 
              My focus is on creating scalable systems and AI-powered solutions that solve real-world problems.
            </motion.p>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="glass-card p-6 flex flex-col items-center sm:items-start text-center sm:text-left hover:border-white/20"
                >
                  <div className={`${stat.color} mb-3`}>
                    {stat.icon}
                  </div>
                  <h4 className="text-2xl font-bold text-white">{stat.value}</h4>
                  <p className="text-xs text-slate-500 uppercase tracking-widest">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default About;
