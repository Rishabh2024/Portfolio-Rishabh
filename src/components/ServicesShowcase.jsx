import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

const SERVICES = [
  {
    id: 1,
    title: "LMS Landing Pages",
    subtitle: "Courses · Enrolments · Trackers",
    description:
      "Conversion-focused LMS landing pages — clear course flow, pricing, and enrolment CTAs. Mobile-first and accessible.",
    tag: "Education",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M2 7h20" />
        <path d="M5 7v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7" />
        <path d="M9 3v4" />
        <path d="M15 3v4" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Landing Pages",
    subtitle: "SaaS · Product · Campaign",
    description:
      "Sharply designed marketing pages with strong hero sections, social proof, and optimized CTAs for higher conversion.",
    tag: "Marketing",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <path d="M7 20v-4" />
        <path d="M17 20v-4" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Static & Dynamic Websites",
    subtitle: "Portfolio · Brochure · CMS",
    description:
      "Ultra-fast static sites or CMS powered platforms — SEO friendly, mobile-first, maintainable.",
    tag: "Websites",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="9" />
        <path d="M2 12h20" />
        <path d="M12 2v20" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Web Apps",
    subtitle: "Dashboards · Portals · Tools",
    description:
      "High-performance apps with clean code architecture and real-time capabilities where needed.",
    tag: "Applications",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 7h18" />
        <rect x="3" y="11" width="18" height="10" rx="2" />
      </svg>
    ),
  },
];

export default function ServicesShowcase({ contactHref = "mailto:rishabhpal326@gmail.com" }) {
  return (
    <section className="px-6 py-16 mx-auto max-w-7xl">
      {/* Header */}
      <div className="flex flex-col items-start justify-between gap-6 mb-10 md:flex-row md:items-center">
        <div>
          <h2 className="text-4xl font-extrabold text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text">
            What I Build
          </h2>
          <p className="max-w-xl mt-2 text-gray-600">
            LMS, Landing Pages, Websites & Web Apps — premium UI, animations, performance & clean architecture.
          </p>
        </div>

        <a
          href={contactHref}
          className="px-5 py-2.5 rounded-xl text-white bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition flex items-center gap-2"
        >
          Hire Me
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M14 5l7 7-7 7M3 12h18" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
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
            whileHover={{ scale: 1.03, translateY: -6 }}
            className="relative p-6 overflow-hidden transition border shadow-md rounded-2xl bg-gradient-to-br from-white/70 to-white/40 backdrop-blur-xl border-white/40 hover:shadow-xl"
          >
            {/* Icon */}
            <div className="flex items-center justify-center text-purple-700 shadow-sm w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50">
              {service.icon}
            </div>

            {/* Title / Subtitle */}
            <h3 className="mt-4 text-lg font-semibold text-slate-900">{service.title}</h3>
            <p className="text-sm text-gray-500">{service.subtitle}</p>

            {/* Description */}
            <p className="mt-3 text-sm leading-relaxed text-gray-700">
              {service.description}
            </p>

            {/* Footer */}
            <div className="flex items-center justify-between mt-6 text-sm">
              <a href={contactHref} className="font-medium text-indigo-600 hover:underline">
                Get this made →
              </a>
              <span className="text-xs text-gray-500">2–4 weeks</span>
            </div>

            {/* Gradient Overlay Effect */}
            <div className="absolute inset-0 transition opacity-0 group-hover:opacity-10 bg-gradient-to-br from-purple-300 via-pink-300 to-indigo-300" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
