import React from "react";
import { motion } from "framer-motion";
import { Element } from "react-scroll";
import { Mail, Github, Linkedin, Send, MessageSquare } from "lucide-react";
import { FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const contactLinks = [
    { name: "WhatsApp", icon: <FaWhatsapp size={20} />, href: "https://wa.me/9318347595", color: "text-green-500" },
    { name: "Email", icon: <Mail size={20} />, href: "mailto:rishabhpal326@gmail.com", color: "text-violet-400" },
    // { name: "LinkedIn", icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/rishabhpal2024/", color: "text-blue-400" },
    { name: "Github", icon: <Github size={20} />, href: "https://github.com/Rishabh2024", color: "text-slate-200" },
  ];

  return (
    <Element name="contact" id="contact" className="section-padding bg-[#0a0a0c] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-violet-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left Side: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 italic">
              Let's <span className="text-gradient">Connect.</span>
            </h2>
            <p className="text-slate-400 text-lg mb-10 max-w-md">
              Have a project in mind or just want to say hi? I'm always open to discussing new opportunities and creative ideas.
            </p>

            <div className="space-y-6">
              {contactLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 group p-4 glass-card border-white/5 hover:border-violet-500/30 hover:bg-violet-500/5 transition-all max-w-sm"
                >
                  <div className={`${link.color} p-3 rounded-lg bg-white/5 transition-colors group-hover:bg-violet-500 group-hover:text-white`}>
                    {link.icon}
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 uppercase tracking-widest block">{link.name}</span>
                    <span className="text-white font-medium break-all">{link.href.replace('mailto:', '').replace('https://', '')}</span>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card p-8 md:p-12 border-white/10"
          >
            <div className="flex items-center gap-3 mb-8">
              <MessageSquare className="text-violet-400" />
              <h3 className="text-xl font-bold text-white">Send me a message</h3>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-5 py-4 bg-[#0a0a0c] border border-white/10 rounded-xl focus:border-violet-500 focus:outline-none transition-colors text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-5 py-4 bg-[#0a0a0c] border border-white/10 rounded-xl focus:border-violet-500 focus:outline-none transition-colors text-white"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Subject</label>
                <input
                  type="text"
                  placeholder="How can I help you?"
                  className="w-full px-5 py-4 bg-[#0a0a0c] border border-white/10 rounded-xl focus:border-violet-500 focus:outline-none transition-colors text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                <textarea
                  rows="4"
                  placeholder="Your message here..."
                  className="w-full px-5 py-4 bg-[#0a0a0c] border border-white/10 rounded-xl focus:border-violet-500 focus:outline-none transition-colors text-white resize-none"
                />
              </div>
              <button className="w-full flex items-center justify-center gap-2 px-8 py-5 bg-violet-600 hover:bg-violet-500 text-white font-bold rounded-xl transition-all shadow-xl shadow-violet-600/20 active:scale-95 group">
                Send Message
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </Element>
  );
};

export default Contact;
