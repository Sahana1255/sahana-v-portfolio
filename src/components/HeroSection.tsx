import React from 'react';
import { motion } from 'framer-motion';
import { Download, Terminal, Shield,Mail } from 'lucide-react';
import profile from '../assets/profile.png';
import designImage from '../assets/design.png';
import resumePdf from '../assets/sahana v- soc analyst.pdf';

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
    <section id="home" className="pt-24 pb-12 md:pt-24 md:pb-20 relative overflow-hidden">
      {/* Background Neon Elements */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyber-accent/5 dark:bg-cyber-accent/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-blue-500/5 dark:bg-cyber-accentCyan/5 rounded-full blur-[80px] pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full mx-auto px-4 sm:px-6 lg:px-8"
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
              className="text-xl md:text-2xl text-gray-600 dark:text-zinc-400 max-w-3xl leading-relaxed font-sans"
            >
Computer Science graduate with knowledge of cybersecurity principles, network security, and Security Operations Center (SOC) processes. Familiar with threat monitoring, incident analysis, vulnerability assessment, and basic incident handling through coursework, labs, and personal projects. Committed to continuous learning and professional growth in cybersecurity. Additionally experienced in frontend development, building responsive web applications using React, Vite, and modern UI/UX design principles.            </motion.p>

            {/* Call to Actions */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-2">
              <a
                href={resumePdf}
                download="Sahana_V_SOC_Analyst_Resume.pdf"
                className="flex items-center gap-2 px-5 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 dark:bg-cyber-accent dark:hover:bg-emerald-400 text-white dark:text-black font-semibold text-sm transition-all duration-300 dark:shadow-[0_0_15px_rgba(0,255,102,0.2)] dark:hover:shadow-[0_0_20px_rgba(0,255,102,0.4)]"
              >
                <Download className="h-4 w-4 group-hover:-translate-y-1 transition-transform" />
                Download Resume
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
              <a
                href="mailto:sahanav1255@gmail.com"
                className="flex items-center gap-2 px-5 py-3 rounded-lg border border-gray-300 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 hover:bg-gray-50 dark:hover:bg-zinc-900 text-gray-700 dark:text-zinc-300 font-semibold text-sm transition-all duration-300"
              >
                <Mail className="h-4 w-4 text-blue-500 dark:text-cyber-accent" />
                Email
              </a>
            </motion.div>


          </div>

          {/* Profile Picture Card and Bulb Design */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 flex items-center justify-start md:justify-center gap-4 sm:gap-8 relative"
          >
            {/* Profile Image */}
            <div className="relative group flex-shrink-0 -ml-4 lg:-ml-12">
              {/* Outer Neon Glow Ring (Rectangular) - Black in light mode, White in dark mode */}
              <div className="absolute -inset-1 bg-black dark:bg-white rounded-2xl blur-xl opacity-20 dark:opacity-10 group-hover:opacity-40 dark:group-hover:opacity-30 transition duration-1000 group-hover:duration-200" />

              {/* Main Image Wrapper */}
              <motion.div
                className="relative w-64 sm:w-72 h-[300px] sm:h-[340px] rounded-xl overflow-hidden bg-zinc-950 border border-gray-300 dark:border-zinc-800 shadow-xl flex items-center justify-center perspective-1000"
              >
                <img
                  src={profile}
                  alt="Sahana V Profile"
                  className="w-full h-full object-cover"
                />
              </motion.div>

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

            {/* Cyber Bulb Design */}
            <motion.div 
               className="relative w-40 sm:w-56 h-auto flex-shrink-0 mix-blend-multiply dark:mix-blend-screen invert hue-rotate-180 dark:invert-0 dark:hue-rotate-0 hidden sm:block"
               animate={{ y: [0, -10, 0] }}
               transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
               <img 
                 src={designImage} 
                 alt="Cyber Bulb" 
                 className="w-full h-full object-contain filter drop-shadow-xl"
               />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
