import React from 'react';
import { Mail, Phone, MapPin, Shield, ShieldAlert, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="relative border-t border-gray-200 dark:border-zinc-900 bg-gray-50/50 dark:bg-black/50 py-12 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyber-accent/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-0 left-10 w-60 h-60 bg-blue-500/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand Info */}
          <div className="md:col-span-4 text-left space-y-4">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-6 w-6 text-blue-600 dark:text-cyber-accent" />
              <span className="text-xl font-extrabold tracking-wider text-gray-900 dark:text-white font-sans">
                SAHANA V
              </span>
            </div>
            <p className="text-xs font-mono font-bold text-blue-600 dark:text-cyber-accent uppercase tracking-widest">
              SOC Analyst L1
            </p>
            <p className="text-sm text-gray-500 dark:text-zinc-400 max-w-xs">
              Monitoring threats. Analyzing risks. Securing digital assets for tomorrow.
            </p>
          </div>

          {/* Contact Details List */}
          <div className="md:col-span-4 text-left space-y-3">
            <h4 className="text-xs font-mono font-extrabold text-gray-400 dark:text-zinc-500 uppercase tracking-widest pb-1 border-b border-gray-200 dark:border-zinc-900/60 max-w-[100px]">
              Contact
            </h4>
            <ul className="space-y-2 text-xs md:text-sm font-medium text-gray-600 dark:text-zinc-400">
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-blue-500 dark:text-cyber-accent flex-shrink-0" />
                <a href="tel:+917200317690" className="hover:text-blue-600 dark:hover:text-cyber-accent transition-colors">+91 7200317690</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-blue-500 dark:text-cyber-accent flex-shrink-0" />
                <a href="mailto:sahanav1255@gmail.com" className="hover:text-blue-600 dark:hover:text-cyber-accent transition-colors">sahanav1255@gmail.com</a>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4 text-blue-500 dark:text-cyber-accent flex-shrink-0" />
                <span>Tamil Nadu, Chennai</span>
              </li>
              <li className="flex items-center gap-2.5">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-blue-500 dark:text-cyber-accent flex-shrink-0">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                <a href="https://linkedin.com/in/sahana-v-1255" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-cyber-accent transition-colors">linkedin.com/in/sahana-v1255/</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Shield className="h-4 w-4 text-blue-500 dark:text-cyber-accent flex-shrink-0" />
                <a href="https://tryhackme.com/p/sahana_v" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-cyber-accent transition-colors">tryhackme.com/p/sahana_v</a>
              </li>
            </ul>
          </div>

          {/* Socials Connect and Glowing Lock Badge */}
          <div className="md:col-span-4 flex flex-col items-start md:items-end justify-between gap-6 h-full">
            <div className="space-y-3 w-full md:text-right">
              <h4 className="text-xs font-mono font-extrabold text-gray-400 dark:text-zinc-500 uppercase tracking-widest pb-1 border-b border-gray-200 dark:border-zinc-900/60 max-w-[100px] md:ml-auto">
                Let's Connect
              </h4>
              <div className="flex items-center gap-3 md:justify-end">
                <a
                  href="https://linkedin.com/in/sahana-v1255"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 text-blue-500 hover:bg-blue-50 dark:hover:bg-zinc-800/80 transition-colors flex items-center justify-center"
                  aria-label="LinkedIn Profile"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
                <a
                  href="https://github.com/sahana-v"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 text-gray-800 dark:text-zinc-200 hover:bg-gray-50 dark:hover:bg-zinc-800/80 transition-colors flex items-center justify-center"
                  aria-label="GitHub Profile"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                </a>
                <a
                  href="https://tryhackme.com/p/sahana_v"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 text-red-500 hover:bg-red-50 dark:hover:bg-zinc-800/80 transition-colors"
                  aria-label="TryHackMe Profile"
                >
                  <Shield className="h-4 w-4" />
                </a>
                <a
                  href="mailto:sahanav1255@gmail.com"
                  className="p-2 rounded bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 text-gray-600 dark:text-zinc-400 hover:bg-gray-50 dark:hover:bg-zinc-800/80 transition-colors"
                  aria-label="Email Address"
                >
                  <Mail className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Glowing Neon Security Badge Illustration */}
            <div className="group relative flex items-center justify-center p-3 rounded-xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 shadow-md md:ml-auto select-none">
              <svg viewBox="0 0 100 100" className="w-16 h-16 text-blue-600 dark:text-cyber-accent fill-none transition-all duration-500 group-hover:scale-105">
                {/* Shield Path */}
                <path
                  d="M50,15 L80,25 L80,55 C80,72 67,85 50,89 C33,85 20,72 20,55 L20,25 Z"
                  stroke="currentColor"
                  strokeWidth="4"
                  className="drop-shadow-[0_0_8px_rgba(0,255,102,0.5)]"
                />
                {/* Keyhole Padlock Icon inside */}
                <rect x="38" y="48" width="24" height="18" rx="2" stroke="currentColor" strokeWidth="4" />
                <path d="M44,48 L44,40 C44,35 56,35 56,40 L56,48" stroke="currentColor" strokeWidth="4" />
                <circle cx="50" cy="56" r="2.5" fill="currentColor" />
                <line x1="50" y1="58.5" x2="50" y2="62" stroke="currentColor" strokeWidth="2" />
              </svg>
              {/* Pulse glow background */}
              <div className="absolute inset-0 rounded-xl bg-cyber-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>

          </div>

        </div>

        {/* Bottom copyright details */}
        <div className="mt-12 pt-6 border-t border-gray-200 dark:border-zinc-900/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono font-medium text-gray-400 dark:text-zinc-500">
          <span>&copy; {new Date().getFullYear()} Sahana V. All rights reserved.</span>
          <span className="flex items-center gap-1">
            Designed for Security <ShieldAlert className="h-3.5 w-3.5 text-blue-500 dark:text-cyber-accent" />
          </span>
        </div>
      </div>
    </footer>
  );
};
