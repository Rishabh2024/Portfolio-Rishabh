import React from "react";
import { motion } from "framer-motion";
import { Element } from "react-scroll";
import { skillData } from "../../data";

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <Element name="services" className="section-padding bg-[#0a0a0c] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            My <span className="text-gradient">Specializations</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 max-w-2xl mx-auto"
          >
            Empowering businesses with scalable software solutions, high-performance web applications, 
            and custom management systems designed for growth.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skillData.map((skill, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="glass-card p-8 group hover:border-violet-500/50 hover:bg-violet-500/5 transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-violet-500/10 flex items-center justify-center mb-6 text-violet-400 group-hover:bg-violet-500 group-hover:text-white transition-all transform group-hover:rotate-6">
                <skill.icon size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{skill.skillName}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {skill.skillDescription}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Element>
  );
};

export default Skills;
