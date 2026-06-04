import React, { useState } from 'react';
import { Award, ArrowUpRight, ArrowDown, Calendar, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Certification {
  title: string;
  issuer: string;
  category: string;
  issued: string;
  credentialId: string;
  featured: boolean;
  badge?: string; // Optional badge like 'Elite'
  verified?: boolean; // Optional green checkmark shield
}

export const Certifications: React.FC = () => {
  const [showAll, setShowAll] = useState(false);

  const certifications: Certification[] = [
    {
      title: "SOC Level 1 Certificate",
      issuer: "TryHackMe",
      category: "Cybersecurity",
      issued: "February 2026",
      credentialId: "THM-B4OMPX1OKH",
      featured: true,
      verified: true
    },
    {
      title: "Cyber Security 101 Certificate",
      issuer: "TryHackMe",
      category: "Cybersecurity",
      issued: "December 2025",
      credentialId: "THM-FCPNU96DQC",
      featured: true,
      verified: true
    },
    {
      title: "Pre Security Certificate",
      issuer: "TryHackMe",
      category: "Cybersecurity",
      issued: "December 2025",
      credentialId: "THM-YSJBNP6OBK",
      featured: true,
      verified: true
    },
    {
      title: "Ethical Hacking",
      issuer: "NPTEL (IIT Kharagpur)",
      category: "Cybersecurity",
      issued: "October 2025",
      credentialId: "NPTEL-ETH-HACK",
      featured: true,
      badge: "Elite"
    },
    {
      title: "Cyber Security & Ethical Hacking",
      issuer: "CodTech IT Solutions",
      category: "Cybersecurity",
      issued: "January 2026",
      credentialId: "CODTECH-CS-EH",
      featured: true,
      verified: true
    },
    {
      title: "Advent of Cyber 2025",
      issuer: "TryHackMe",
      category: "Cybersecurity",
      issued: "December 2025",
      credentialId: "THM-5KADCRR2GM",
      featured: false,
      verified: true
    },
    {
      title: "Azure for Data Engineering",
      issuer: "Microsoft",
      category: "Cloud & Data Engineering",
      issued: "November 2024",
      credentialId: "HJN4SLO45BBJ",
      featured: true,
      verified: true
    },
    {
      title: "Python for Data Science, AI & Development",
      issuer: "IBM | Coursera",
      category: "Data Science",
      issued: "July 2024",
      credentialId: "Q63U4K72QCDN",
      featured: false
    },
    {
      title: "Data Visualization with Python",
      issuer: "IBM",
      category: "Data Science",
      issued: "October 2024",
      credentialId: "course-v1:CognitiveClass DV0101EN v2",
      featured: true
    },
    {
      title: "Data Visualization with R",
      issuer: "IBM",
      category: "Data Science",
      issued: "October 2024",
      credentialId: "course-v1:CognitiveClass DV0151EN v1",
      featured: true
    },
    {
      title: "Introduction to Cloud",
      issuer: "IBM",
      category: "Cloud Computing",
      issued: "March 2024",
      credentialId: "course-v1:IBMDeveloperSkillsNetwork CC0101EN v1",
      featured: true
    },
    {
      title: "Data Analysis with Python",
      issuer: "IBM",
      category: "Data Science",
      issued: "April 2023",
      credentialId: "course-v1:CognitiveClass DA0101EN v1",
      featured: true
    }
  ];

  // Show featured cards (and include Data Visualization with R + NPTEL + CodTech) by default
  const displayedCerts = showAll
    ? certifications
    : certifications.filter(
        (c) => c.featured
      );

  // Custom Inline Logo Renderers
  const renderIssuerLogo = (issuer: string) => {
    const lowerIssuer = issuer.toLowerCase();

    if (lowerIssuer.includes('tryhackme')) {
      return (
        <div className="flex items-center justify-center h-14">
          <svg viewBox="0 0 170 100" className="h-full w-auto text-zinc-900 dark:text-white">
            {/* Cloud Outline */}
            <path d="M 40 46 L 15 46 A 12 12 0 0 1 12 24 A 18 18 0 0 1 45 12 A 15 15 0 0 1 73 24 A 10 10 0 0 1 68 42" stroke="#c21818" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            
            {/* Numbers */}
            <g fontFamily="monospace" fontWeight="900" fontSize="13" letterSpacing="-0.5">
              <text x="42" y="38" fill="#c21818">10</text>
              <text x="64" y="38" fill="#c21818">10</text>
              
              <text x="42" y="52" fill="currentColor">1110</text>
              
              <text x="41" y="64" fill="#c21818">0101</text>
              <text x="69" y="64" fill="currentColor" fontSize="10">01</text>
              
              <text x="41" y="75" fill="currentColor" fontSize="9">01</text>
              <text x="56" y="75" fill="#c21818" fontSize="11">010</text>
              
              <text x="50" y="86" fill="#c21818" fontSize="9">01</text>
            </g>
            
            {/* Try Hack Me Text */}
            <g fontFamily="sans-serif" fontWeight="900" fontSize="31" letterSpacing="-0.5">
              <text x="86" y="34" fill="currentColor">Try</text>
              <text x="86" y="62" fill="#c21818">Hack</text>
              <text x="86" y="90" fill="currentColor">Me</text>
            </g>
          </svg>
        </div>
      );
    }

    if (lowerIssuer.includes('microsoft')) {
      return (
        <div className="flex items-center justify-center gap-2 h-12">
          <div className="grid grid-cols-2 gap-0.5 w-6 h-6 flex-shrink-0">
            <div className="bg-[#f25f22] w-2.5 h-2.5"></div>
            <div className="bg-[#7fba00] w-2.5 h-2.5"></div>
            <div className="bg-[#00a4ef] w-2.5 h-2.5"></div>
            <div className="bg-[#ffb900] w-2.5 h-2.5"></div>
          </div>
          <span className="font-sans font-black text-gray-900 dark:text-zinc-200 text-xs tracking-tight uppercase">
            Microsoft
          </span>
        </div>
      );
    }

    if (lowerIssuer.includes('nptel')) {
      return (
        <div className="flex items-center justify-center h-16">
          <svg viewBox="0 0 100 45" className="h-full w-auto fill-none" stroke="currentColor" strokeWidth="1.5">
            {/* NPTEL Circle Radial Ring */}
            <circle cx="50" cy="16" r="9" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="1,1" />
            <path d="M 50 7 L 50 25 M 41 16 L 59 16 M 44 10 L 56 22 M 44 22 L 56 10" stroke="#b91c1c" strokeWidth="1" />
            {/* NPTEL Bold Red Text */}
            <text x="50" y="38" fontSize="11" fontFamily="sans-serif" fontWeight="950" fill="#b91c1c" stroke="none" textAnchor="middle">NPTEL</text>
          </svg>
        </div>
      );
    }

    if (lowerIssuer.includes('codtech')) {
      return (
        <div className="flex items-center justify-center h-16">
          <svg viewBox="0 0 100 45" className="h-full w-auto fill-current text-[#e05a00]">
            {/* CT text */}
            <text x="18" y="24" fontSize="24" fontFamily="sans-serif" fontWeight="900" fontStyle="italic" fill="white" className="fill-gray-900 dark:fill-white">C</text>
            <text x="35" y="24" fontSize="24" fontFamily="sans-serif" fontWeight="900" fontStyle="italic" fill="#e05a00">T</text>
            {/* Gear Outline */}
            <circle cx="64" cy="12" r="3" stroke="#e05a00" strokeWidth="1.5" fill="none" />
            <circle cx="72" cy="18" r="2" stroke="#e05a00" strokeWidth="1.5" fill="none" />
            {/* CODTECH */}
            <text x="50" y="38" fontSize="8" fontFamily="sans-serif" fontWeight="900" fontStyle="italic" fill="#e05a00" textAnchor="middle">CODTECH</text>
          </svg>
        </div>
      );
    }

    // IBM
    return (
      <div className="relative flex items-center justify-center h-12 select-none">
        <span className="font-sans font-black text-4xl tracking-wider text-[#4182FF] uppercase relative">
          IBM
          {/* Stripes */}
          <span className="absolute left-0 right-0 top-[20%] h-[7%] bg-[#08080c] transition-colors" />
          <span className="absolute left-0 right-0 top-[38%] h-[7%] bg-[#08080c] transition-colors" />
          <span className="absolute left-0 right-0 top-[56%] h-[7%] bg-[#08080c] transition-colors" />
          <span className="absolute left-0 right-0 top-[74%] h-[7%] bg-[#08080c] transition-colors" />
        </span>
      </div>
    );
  };

  return (
    <section id="certifications" className="py-16 border-t border-gray-150 dark:border-zinc-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex flex-col text-left">
            <div className="flex items-center gap-3">
              <div className="relative flex items-center justify-center w-8 h-8">
                <ShieldCheck className="h-6 w-6 text-blue-500 dark:text-blue-400" />
              </div>
              <h2 className="text-xl font-bold tracking-wider text-gray-900 dark:text-white uppercase font-sans">
                CERTIFICATIONS <span className="text-emerald-500">•</span>
              </h2>
            </div>
            <p className="text-sm text-gray-500 dark:text-zinc-400 ml-11 -mt-1">
              Professional certifications & achievements
            </p>
          </div>
          
          <button
            onClick={() => setShowAll(!showAll)}
            className="flex items-center gap-1 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors border border-blue-500/30 hover:border-blue-500/60 px-4 py-2 rounded-lg bg-blue-500/5"
          >
            {showAll ? 'Show Featured' : 'View All Certifications'}
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>

        {/* Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 items-stretch justify-center"
        >
          <AnimatePresence mode="popLayout">
            {displayedCerts.map((cert) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={cert.credentialId}
                className="group relative rounded-xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-[#08080c]/60 p-5 pt-7 backdrop-blur-md hover:border-blue-500 dark:hover:border-cyber-accent dark:hover:shadow-[0_0_12px_rgba(0,255,102,0.1)] transition-all duration-300 flex flex-col justify-between items-center text-center min-h-[195px] card-3d overflow-hidden"
              >
                {/* Red "Elite" Badge Banner at top center */}
                {cert.badge && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 px-4 py-0.5 rounded-b-md bg-[#8c1d1d] text-white text-[9px] font-extrabold uppercase tracking-widest shadow-sm z-10 select-none">
                    {cert.badge}
                  </div>
                )}

                {/* Green Verified Shield Badge at top right */}
                {cert.verified && (
                  <div className="absolute top-4 right-4 text-emerald-500 z-10 select-none" title="Verified Credential">
                    <ShieldCheck className="h-4 w-4" />
                  </div>
                )}

                {/* Corner accent glow */}
                <div className="absolute top-0 right-0 w-12 h-12 bg-blue-500/5 dark:bg-cyber-accent/5 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                
                {/* Centered Brand Logo */}
                <div className="w-full flex items-center justify-center pb-4 border-b border-gray-100 dark:border-zinc-800 h-20">
                  {renderIssuerLogo(cert.issuer)}
                </div>

                {/* Centered Certificate Title & Issuer */}
                <div className="py-5 flex-1 flex flex-col items-center justify-center space-y-1.5 px-2">
                  <h3 className="text-[13px] font-bold text-gray-900 dark:text-zinc-100 group-hover:text-blue-400 transition-colors duration-300 leading-snug">
                    {cert.title}
                  </h3>
                  <span className="text-[12px] font-medium text-blue-500 dark:text-blue-400">
                    {cert.issuer.replace(' (IIT Kharagpur)', '').replace(' IT Solutions', '')}
                  </span>
                </div>

                {/* Centered Date Info at Bottom with Calendar icon */}
                <div className="w-full pt-4 border-t border-gray-50 dark:border-zinc-800 space-y-1">
                  <div className="flex items-center justify-center gap-1.5 text-[11px] font-medium text-gray-400 dark:text-zinc-400 tracking-tight">
                    <Calendar className="h-3.5 w-3.5 text-gray-400 dark:text-zinc-500" />
                    Issued {cert.issued.split(' ')[0].slice(0, 3)} {cert.issued.split(' ')[1]}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Footer Stats block */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 border border-zinc-800 bg-[#08080c]/60 rounded-xl p-6">
          <div className="flex items-center gap-4 justify-center md:justify-start md:pl-10 md:border-r border-zinc-800">
            <div className="w-10 h-10 rounded-full bg-zinc-800/50 flex items-center justify-center border border-zinc-700">
              <ShieldCheck className="h-5 w-5 text-zinc-300" />
            </div>
            <div className="text-left">
              <div className="text-sm font-bold text-white flex items-center gap-1">
                <span className="text-emerald-500">10+</span> Certifications
              </div>
              <div className="text-xs text-zinc-400">Continuous Learning</div>
            </div>
          </div>
          <div className="flex items-center gap-4 justify-center md:border-r border-zinc-800">
            <div className="w-10 h-10 rounded-full bg-zinc-800/50 flex items-center justify-center border border-zinc-700">
              <Award className="h-5 w-5 text-yellow-500" />
            </div>
            <div className="text-left">
              <div className="text-sm font-bold text-white">Always Learning</div>
              <div className="text-xs text-zinc-400">Always Improving</div>
            </div>
          </div>
          <div className="flex items-center gap-4 justify-center md:pr-10">
            <div className="w-10 h-10 rounded-full bg-zinc-800/50 flex items-center justify-center border border-zinc-700">
              {/* Target icon approximated with concentric circles since Target is not imported */}
              <svg viewBox="0 0 24 24" className="h-5 w-5 text-blue-500 fill-none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <circle cx="12" cy="12" r="6"></circle>
                <circle cx="12" cy="12" r="2"></circle>
                <line x1="22" y1="2" x2="12" y2="12"></line>
                <path d="M 22 2 L 15 2 L 22 9 Z" fill="currentColor" stroke="none" />
              </svg>
            </div>
            <div className="text-left">
              <div className="text-sm font-bold text-white">Goal Focused</div>
              <div className="text-xs text-zinc-400">Building a secure digital future</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
