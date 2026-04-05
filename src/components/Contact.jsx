"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Element } from "react-scroll";
import { Mail, Github, Send, MessageSquare, CheckCircle2 } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import toast from "react-hot-toast";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const contactLinks = [
    {
      name: "WhatsApp",
      icon: <FaWhatsapp size={20} />,
      href: "https://wa.me/9318347595",
      color: "text-green-500",
    },
    {
      name: "Email",
      icon: <Mail size={20} />,
      href: "mailto:rishabhpal326@gmail.com",
      color: "text-violet-400",
    },
    {
      name: "Github",
      icon: <Github size={20} />,
      href: "https://github.com/Rishabh2024",
      color: "text-slate-200",
    },
  ];

  const playSound = () => {
    const audio = new Audio("https://www.soundjay.com/button/beep-07.wav");
    audio.volume = 0.35;
    audio.play().catch(() => {});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbz_MBF5EAXQxEiAxTxjrCwShUk0OdY0RJtz9USznWCb5pslt60iPMXFcuXj1j-yxeFPHA/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      playSound();

      toast.custom(
        (t) => (
          <div
            className={`${
              t.visible ? "animate-enter" : "animate-leave"
            } max-w-md w-full rounded-2xl border border-white/15 bg-white/10 backdrop-blur-xl shadow-2xl text-white px-4 py-4 flex items-start gap-3`}
          >
            <div className="mt-0.5">
              <motion.div
                initial={{ scale: 0.6, opacity: 0, rotate: -15 }}
                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                transition={{ duration: 0.35 }}
                className="flex items-center justify-center w-10 h-10 border rounded-full bg-emerald-500/20 border-emerald-400/30"
              >
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              </motion.div>
            </div>

          <div className="flex-1 min-w-0">
  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-400/20 mb-2">
    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
    <span className="text-[11px] sm:text-xs font-medium tracking-wide text-emerald-300 uppercase">
      Success
    </span>
  </div>

  <p className="text-sm font-semibold leading-snug text-white sm:text-base">
    Message sent successfully
  </p>

  <p className="mt-1 text-xs leading-relaxed break-words sm:text-sm text-slate-300">
    Thanks! Your message has been delivered successfully. I’ll get back to you soon.
  </p>
</div>

            <button
              onClick={() => toast.dismiss(t.id)}
              className="text-sm transition text-slate-300 hover:text-white"
            >
              ✕
            </button>
          </div>
        ),
        { duration: 3500, position: "top-right" }
      );

      e.target.reset();
    } catch (error) {
      console.error("Error submitting form:", error);

      toast.custom(
        (t) => (
          <div
            className={`${
              t.visible ? "animate-enter" : "animate-leave"
            } max-w-md w-full rounded-2xl border border-red-400/20 bg-red-500/10 backdrop-blur-xl shadow-2xl text-white px-4 py-4 flex items-start gap-3`}
          >
            <div className="flex items-center justify-center w-10 h-10 border rounded-full bg-red-500/20 border-red-400/30">
              <span className="text-lg text-red-300">!</span>
            </div>

            <div className="flex-1">
              <p className="font-semibold text-white">Something went wrong</p>
              <p className="mt-1 text-sm text-slate-300">
                Please try again after a moment.
              </p>
            </div>

            <button
              onClick={() => toast.dismiss(t.id)}
              className="text-sm transition text-slate-300 hover:text-white"
            >
              ✕
            </button>
          </div>
        ),
        { duration: 3500, position: "top-right" }
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Element
      name="contact"
      id="contact"
      className="section-padding bg-[#0a0a0c] relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-violet-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Left Side: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="mb-6 text-3xl italic font-bold md:text-5xl">
              Let's <span className="text-gradient">Connect.</span>
            </h2>

            <p className="max-w-md mb-10 text-lg text-slate-400">
              Have a project in mind or just want to say hi? I'm always open to
              discussing new opportunities and creative ideas.
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
                  className="flex items-center max-w-sm gap-4 p-4 transition-all group glass-card border-white/5 hover:border-violet-500/30 hover:bg-violet-500/5"
                >
                  <div
                    className={`${link.color} p-3 rounded-lg bg-white/5 transition-colors group-hover:bg-violet-500 group-hover:text-white`}
                  >
                    {link.icon}
                  </div>

                  <div>
                    <span className="block text-xs tracking-widest uppercase text-slate-500">
                      {link.name}
                    </span>
                    <span className="font-medium text-white break-all">
                      {link.href
                        .replace("mailto:", "")
                        .replace("https://", "")}
                    </span>
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
            className="p-8 glass-card md:p-12 border-white/10"
          >
            <div className="flex items-center gap-3 mb-8">
              <MessageSquare className="text-violet-400" />
              <h3 className="text-xl font-bold text-white">
                Send me a message
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label className="block mb-2 text-sm font-medium text-slate-400">
                    Name
                  </label>
                  <input
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    required
                    className="w-full px-5 py-4 bg-[#0a0a0c] border border-white/10 rounded-xl focus:border-violet-500 focus:outline-none transition-colors text-white"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-slate-400">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    required
                    className="w-full px-5 py-4 bg-[#0a0a0c] border border-white/10 rounded-xl focus:border-violet-500 focus:outline-none transition-colors text-white"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-slate-400">
                  Subject
                </label>
                <input
                  name="subject"
                  type="text"
                  placeholder="How can I help you?"
                  required
                  className="w-full px-5 py-4 bg-[#0a0a0c] border border-white/10 rounded-xl focus:border-violet-500 focus:outline-none transition-colors text-white"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-slate-400">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Your message here..."
                  required
                  className="w-full px-5 py-4 bg-[#0a0a0c] border border-white/10 rounded-xl focus:border-violet-500 focus:outline-none transition-colors text-white resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="relative flex items-center justify-center w-full gap-2 px-8 py-5 font-bold text-white transition-all shadow-xl bg-violet-600 hover:bg-violet-500 rounded-xl shadow-violet-600/20 active:scale-95 group disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <span className="inline-block w-5 h-5 border-2 rounded-full border-white/30 border-t-white animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send
                      size={18}
                      className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </Element>
  );
};

export default Contact;