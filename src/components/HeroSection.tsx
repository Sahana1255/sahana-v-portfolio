import React from 'react';
import { motion } from 'framer-motion';
import { Download, Terminal, Shield, Mail, Phone, MapPin } from 'lucide-react';
import profile from '../assets/profile.jpg';

export const HeroSection: React.FC = () => {
  // Animation variants for staggered load
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 15 }
    }
  } as const;

  return (
    <section id="home" className="pt-24 pb-16 md:py-24 relative overflow-hidden">
      {/* Background Neon Elements */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyber-accent/5 dark:bg-cyber-accent/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-blue-500/5 dark:bg-cyber-accentCyan/5 rounded-full blur-[80px] pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Cybersecurity Pill Tag */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-cyber-accent/30 bg-cyber-accent/5 dark:bg-cyber-accent/10">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyber-accent"></span>
              </span>
              <span className="text-xs font-mono font-bold tracking-widest text-cyber-accent uppercase">
                SOC | SECURITY | MONITOR | ANALYZE
              </span>
            </motion.div>

            {/* Name and Designation */}
            <div className="space-y-2">
              <motion.h1
                variants={itemVariants}
                className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white"
              >
                SAHANA V
              </motion.h1>
              <motion.div
                variants={itemVariants}
                className="flex items-center gap-2 text-2xl md:text-3xl font-mono text-blue-600 dark:text-cyber-accent font-bold"
              >
                <Terminal className="h-6 w-6 animate-pulse" />
                <span className="relative">
                  SOC Analyst L1
                  <span className="absolute -right-3 top-0 bottom-0 w-1 bg-current cursor-blink"></span>
                </span>
              </motion.div>
            </div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg text-gray-600 dark:text-zinc-400 max-w-xl leading-relaxed font-sans"
            >
              Cybersecurity enthusiast with a strong foundation in Security Operations, threat analysis, and incident response. Experienced in building responsive web interfaces and security tools. Passionate about monitoring, analyzing, and securing digital environments.
            </motion.p>

            {/* Call to Actions */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-2">
              <a
                href="#contact"
                className="flex items-center gap-2 px-5 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 dark:bg-cyber-accent dark:hover:bg-emerald-400 text-white dark:text-black font-semibold text-sm transition-all duration-300 dark:shadow-[0_0_15px_rgba(0,255,102,0.2)] dark:hover:shadow-[0_0_20px_rgba(0,255,102,0.4)]"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
              <a
                href="https://linkedin.com/in/sahana-v1255/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-lg border border-gray-300 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 hover:bg-gray-50 dark:hover:bg-zinc-900 text-gray-700 dark:text-zinc-300 font-semibold text-sm transition-all duration-300"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-blue-500 fill-current">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                LinkedIn
              </a>
              <a
                href="https://tryhackme.com/p/sahana_v"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-lg border border-gray-300 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 hover:bg-gray-50 dark:hover:bg-zinc-900 text-gray-700 dark:text-zinc-300 font-semibold text-sm transition-all duration-300"
              >
                <Shield className="h-4 w-4 text-red-500" />
                TryHackMe
              </a>
            </motion.div>

            {/* Quick Contact Info Row */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-y-3 gap-x-6 pt-6 text-sm font-medium text-gray-500 dark:text-zinc-500 border-t border-gray-200 dark:border-zinc-900"
            >
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-blue-500 dark:text-cyber-accent" />
                Tamil Nadu, Chennai
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-blue-500 dark:text-cyber-accent" />
                +91 7200317690
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-blue-500 dark:text-cyber-accent" />
                sahanav1255@gmail.com
              </div>
            </motion.div>
          </div>

          {/* Profile Picture Card - Rectangular Box */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 flex flex-col items-center justify-center"
          >
            <div className="relative group">
              {/* Outer Neon Glow Ring (Rectangular) */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyber-accent rounded-2xl blur-lg opacity-40 group-hover:opacity-70 transition duration-1000 group-hover:duration-200" />
              
              {/* Main Image Wrapper */}
              <div className="relative w-80 h-[360px] rounded-xl overflow-hidden bg-zinc-950 border-2 border-blue-500 dark:border-cyber-accent shadow-neon-green flex items-center justify-center">
                <img
                  src={profile}
                  alt="Sahana V Profile"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Float Decorative Badge (Available for Opportunities) */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-full border border-gray-200 dark:border-zinc-800 bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md flex items-center gap-2 shadow-lg transition-transform group-hover:scale-105 duration-300">
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyber-accent"></span>
                </span>
                <span className="text-xs font-mono font-extrabold text-gray-800 dark:text-zinc-200 whitespace-nowrap">
                  Available for Opportunities
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
