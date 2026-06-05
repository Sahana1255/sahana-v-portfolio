import React from 'react';
import { Star, Calendar, ExternalLink } from 'lucide-react';

export const FeaturedProject: React.FC = () => {
  const projects = [
    {
      title: "AI-Powered Smart Campus Information Kiosk",
      period: "2026",
      points: [
        "Developed a multilingual AI-powered campus information kiosk using RAG and Gemma 2 to provide instant access to institutional information.",
        "Implemented semantic search using Qdrant Vector Database for efficient retrieval of information from PDFs, documents, and knowledge repositories.",
        "Built a scalable web application using Node.js, Python, and MongoDB, enabling access for students, parents, faculty, and visitors.",
        "Designed the system with multilingual support and modular architecture to support future campus-wide deployment and expansion."
      ]
    },
    {
      title: "URL Threat Evaluation and Risk Scoring System",
      period: "2025",
      points: [
        "Developed a URL Security Checker Tool using Python, Flask, and CLI tools (OpenSSL, WHOIS, PowerShell) to perform SSL validation, phishing detection, ASCII/Unicode checks, and port scanning with Python-nmap.",
        "Collaborated with a teammate on a lightweight ML module for phishing risk scoring and site classification (Safe, Suspicious, Dangerous)."
      ]
    },
    {
      title: "Frontend Developer - ERP/CRM",
      period: "2024 - 2025",
      points: [
        "Developed and maintained responsive user interfaces for ERP/CRM platform serving 10,000+ students & staff using React + Vite.",
        "Built reusable UI components, improving development efficiency and consistency across modules."
      ]
    }
  ];

  const projectLinks = [
    { title: "URL Checker", url: "https://github.com/Sahana1255/url-checker" },
    { title: "Srishty About Us", url: "https://srishty.bharathuniv.ac.in/about-us" },
    { title: "Campus Kiosk", url: "https://kiosk.balajibalamurugan.com/" }
  ];

  return (
    <div className="rounded-xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-950/40 p-6 sm:p-8 backdrop-blur-md relative overflow-hidden h-full text-left">
      <div className="absolute top-0 right-0 w-32 h-32 bg-cyber-accent/5 rounded-full blur-2xl pointer-events-none" />

      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
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

      <div className="space-y-8">
        {/* Timeline Layout */}
        <div className="relative border-l border-gray-200 dark:border-zinc-800 ml-4 pl-6 space-y-8">
          {projects.map((proj, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Dot */}
              <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full border-2 border-white dark:border-zinc-950 bg-emerald-500 dark:bg-cyber-accent shadow-md group-hover:scale-125 transition-transform duration-300">
                <div className="absolute inset-1 rounded-full bg-white dark:bg-zinc-950 scale-0 group-hover:scale-100 transition-transform duration-300" />
              </div>

              {/* Date Badge */}
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-900/30">
                  <Calendar className="h-3 w-3" />
                  {proj.period}
                </span>
              </div>

              {/* Card Content */}
              <div className="space-y-1">
                <h3 className="text-base font-bold text-gray-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-cyber-accent transition-colors duration-300">
                  {proj.title}
                </h3>
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
          ))}
        </div>

        {/* Project Links */}
        <div className="pt-6 border-t border-gray-200 dark:border-zinc-800/50">
          <div className="text-xs font-mono font-bold text-gray-500 dark:text-zinc-500 uppercase tracking-widest mb-3">
            Project Links
          </div>
          <div className="flex flex-wrap gap-3">
            {projectLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-950/40 text-gray-700 dark:text-zinc-300 font-mono text-xs hover:border-emerald-500 dark:hover:border-cyber-accent hover:text-emerald-600 dark:hover:text-cyber-accent transition-all duration-300 shadow-sm"
              >
                {link.title} <ExternalLink className="h-3 w-3" />
              </a>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
