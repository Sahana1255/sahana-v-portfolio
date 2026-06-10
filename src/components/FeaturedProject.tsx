import React from 'react';
import { Star, Calendar, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

export const FeaturedProject: React.FC = () => {
  const projects = [
    {
      title: "AI-Powered Smart Campus Information Kiosk",
      period: "2026",
      link: { label: "Campus Kiosk", url: "https://kiosk.balajibalamurugan.com/" },
      points: [
        "Contributed to the development of a multilingual AI-powered campus information kiosk designed to provide instant access to institutional information using RAG and Large Language Models. Designed and developed responsive frontend interfaces using modern web technologies, ensuring an intuitive user experience for students, parents, faculty, and visitors.",
        "Collaborated with team members to integrate frontend components with backend services and AI-powered information retrieval systems.",
      ]
    },
    {
      title: "URL Threat Evaluation and Risk Scoring System",
      period: "2025",
      link: { label: "URL Checker", url: "https://github.com/Sahana1255/url-checker" },
      points: [
        "Developed a URL Security Checker Tool using Python, Flask, and CLI tools (OpenSSL, WHOIS, PowerShell) to perform SSL validation, phishing detection, ASCII/Unicode checks, and port scanning with Python-nmap.",
        "Collaborated with a teammate on a lightweight ML module for phishing risk scoring and site classification (Safe, Suspicious, Dangerous)."
      ]
    },
    {
      title: "Frontend Developer - ERP/CRM",
      period: "2024 - 2025",
      link: { label: "Srishty About Us", url: "https://srishty.bharathuniv.ac.in/about-us" },
      points: [
        "Developed and maintained responsive user interfaces for ERP/CRM platform serving 10,000+ students & staff using React + Vite.",
        "Built reusable UI components, improving development efficiency and consistency across modules."
      ]
    }
  ];

  return (
    <div className="rounded-xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-950/40 p-5 sm:p-6 backdrop-blur-md relative overflow-hidden text-left">
      <div className="absolute top-0 right-0 w-32 h-32 bg-cyber-accent/5 rounded-full blur-2xl pointer-events-none" />

      {/* Header */}
      <div className="flex items-center gap-3 mb-5">
        <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-emerald-100 dark:bg-zinc-900 text-emerald-600 dark:text-cyber-accent border border-emerald-200 dark:border-zinc-800 shadow-md">
          <Star className="h-5 w-5 fill-current" />
          <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/5 dark:from-white/5 to-transparent pointer-events-none" />
        </div>
        <div className="space-y-0.5">
          <h2 className="text-xl font-bold tracking-wider text-gray-900 dark:text-white uppercase font-sans">
            Featured Projects
          </h2>
        </div>
      </div>

      <div className="space-y-5">
        {/* Timeline Layout */}
        <div className="relative ml-4 pl-6 space-y-5">
          {/* Glow-gradient timeline line */}
          <div className="absolute left-0 top-3 bottom-3 w-[2px] bg-gradient-to-b from-red-500 via-red-500/20 to-transparent" />

          {projects.map((proj, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative group"
            >
              {/* Enhanced red pulsing Timeline Dot */}
              <div className="absolute -left-[32px] top-2 z-10">
                <div className="relative flex items-center justify-center">
                  <div className="absolute w-4 h-4 rounded-full bg-red-500/40 animate-ping" />
                  <div className="w-3.5 h-3.5 rounded-full bg-red-600 border border-white dark:border-zinc-950 shadow-[0_0_8px_rgba(239,68,68,0.8)] transition-all duration-300 group-hover:scale-125" />
                  <div className="absolute w-1.5 h-1.5 rounded-full bg-white transition-all duration-300 group-hover:scale-150" />
                </div>
              </div>

              <div className="p-4 rounded-xl border-2 border-gray-300 dark:border-zinc-700 bg-gray-50/50 dark:bg-[#0c0c10] hover:border-gray-400 dark:hover:border-zinc-600 transition-colors shadow-sm mt-1 sm:mt-0">
                {/* Header Row: Title + Date Badge + Link */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 text-left">
                  <div className="flex items-start gap-2 flex-wrap min-w-0">
                    <h3 className="text-base font-bold text-gray-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-cyber-accent transition-colors duration-300 leading-tight">
                      {proj.title}
                    </h3>
                    {proj.link && (
                      <a
                        href={proj.link.url}
                        target="_blank"
                        rel="noreferrer"
                        onClick={e => e.stopPropagation()}
                        className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md border border-emerald-200 dark:border-emerald-900/40 bg-emerald-50 dark:bg-emerald-950/20 text-emerald-600 dark:text-emerald-400 font-mono text-[10px] hover:bg-emerald-100 dark:hover:bg-emerald-950/40 transition-all duration-200 flex-shrink-0 self-start mt-0.5"
                      >
                        {proj.link.label} <ExternalLink className="h-2.5 w-2.5" />
                      </a>
                    )}
                  </div>
                  <div className="flex-shrink-0 self-start sm:text-right">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-900/30">
                      <Calendar className="h-2.5 w-2.5" />
                      {proj.period}
                    </span>
                  </div>
                </div>

                {/* Bullet Points */}
                <ul className="mt-3 space-y-2 text-xs md:text-sm text-gray-600 dark:text-zinc-400 list-disc list-outside pl-4">
                  {proj.points.map((pt, pIdx) => (
                    <li key={pIdx} className="leading-relaxed">
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>


      </div>
    </div>
  );
};
