import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaMobileAlt, FaChartLine } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

const SERVICES = [
  {
    id: 1,
    title: "Responsive Web Design",
    subtitle: "Mobile & Desktop Friendly",
    description:
      "Crafting visually stunning websites that adapt seamlessly to any device, ensuring smooth user experience everywhere.",
    tag: "Design",
    icon: <FaLaptopCode className="w-6 h-6 text-indigo-600" />,
  },
  {
    id: 2,
    title: "Progressive Web Apps",
    subtitle: "Fast, Reliable, Engaging",
    description:
      "Building high-performance web apps that work offline, load instantly, and provide app-like experiences.",
    tag: "Web Apps",
    icon: <FaMobileAlt className="w-6 h-6 text-pink-500" />,
  },
  {
    id: 3,
    title: "Marketing & Analytics",
    subtitle: "SEO, Funnels & Insights",
    description:
      "Optimizing pages for search engines, tracking user behavior, and improving conversion rates using smart analytics.",
    tag: "Marketing",
    icon: <FaChartLine className="w-6 h-6 text-green-500" />,
  },
  {
    id: 4,
    title: "LMS & CMS Solutions",
    subtitle: "Learning & Content Management",
    description:
      "Custom Learning Management Systems and CMS platforms — easy to manage, scalable, and optimized for engaging user experiences.",
    tag: "Education",
    icon: <FaLaptopCode className="w-6 h-6 text-blue-500" />,
  },
];

export default function ServicesShowcase({ contactHref = "mailto:rishabhpal326@gmail.com" }) {
  return (
    <section id="services" className="px-6 py-16 mx-auto max-w-7xl">
      {/* Header */}
      <div className="flex flex-col items-start justify-between gap-6 mb-10 md:flex-row md:items-center">
        <div>
          <h2 className="text-4xl font-extrabold text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text">
            Work Experience
          </h2>
          <p className="max-w-xl mt-2 text-gray-600">
            Creating beautiful, performant websites and apps with modern UI, responsive layouts, and clean architecture.
          </p>
        </div>
        
<a
  href={contactHref}
  className="px-5 py-2.5 rounded-xl text-white bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition flex items-center gap-2"
>
  Hire Me
  <FaArrowRight className="w-4 h-4 ml-1" />
</a>
      </div>

      {/* Cards Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7"
      >
        {SERVICES.map((service) => (
          <motion.div
            key={service.id}
            variants={cardVariant}
            whileHover={{ scale: 1.05, translateY: -6 }}
            className="relative p-6 transition border shadow-lg rounded-2xl bg-gradient-to-br from-white/70 to-white/50 border-white/30 backdrop-blur-md hover:shadow-2xl"
          >
            {/* Icon */}
            <div className="flex items-center justify-center mb-4 shadow w-14 h-14 rounded-xl bg-gradient-to-tr from-indigo-50 to-purple-50">
              {service.icon}
            </div>

            {/* Title & Subtitle */}
            <h3 className="text-lg font-semibold text-slate-900">{service.title}</h3>
            <p className="text-sm text-gray-500">{service.subtitle}</p>

            {/* Description */}
            <p className="mt-3 text-sm leading-relaxed text-gray-700">{service.description}</p>

            {/* Footer */}
            <div className="flex items-center justify-between mt-6 text-sm">
              <a href={contactHref} className="font-medium text-indigo-600 hover:underline">
                Get this made →
              </a>
              <span className="text-xs text-gray-400">2–3 weeks</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
