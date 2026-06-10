import React from 'react';
import { Cpu, ShieldCheck } from 'lucide-react';
import { Education } from './Education';
import { RelevantExperience } from './RelevantExperience';
import { FeaturedProject } from './FeaturedProject';

export const AboutAndSkills: React.FC = () => {
  const categorizedSkills = {
    "Cyber Security": ["SOC Operations", "Threat Monitoring", "Incident Response", "Log Analysis", "SIEM", "Network Security", "Wireshark", "Nmap"],
    "Frontend": ["React", "Vite", "JavaScript", "HTML", "CSS", "UI/UX Design"],
    "Common & Others": ["Python", "Linux", "Git", "GitHub", "SEO", "Problem Solving", "Team Collaboration"]
  };

  return (
    <section id="experience" className="pt-8 pb-2 border-t border-gray-150 dark:border-zinc-900/50">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">

          {/* LEFT: Skills + Relevant Experience */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            
            {/* Skills Card */}
            <div className="rounded-xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-950/40 p-4 backdrop-blur-md relative overflow-hidden group">
              <div className="absolute -top-3 -right-3 w-16 h-16 bg-cyber-accent/10 rounded-full blur-xl pointer-events-none group-hover:bg-cyber-accent/20 transition duration-300" />
              <div className="flex items-center gap-3 mb-6">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-emerald-100 dark:bg-zinc-900 text-emerald-600 dark:text-cyber-accent border border-emerald-200 dark:border-zinc-800 shadow-md">
            <Cpu className="h-5 w-5" />
            <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/5 dark:from-white/5 to-transparent pointer-events-none" />
          </div>
          <h2 className="text-xl font-bold tracking-wider text-gray-900 dark:text-white uppercase font-sans">
            Skills
          </h2>
        </div>
              <div className="space-y-3 text-left">
                {Object.entries(categorizedSkills).map(([category, items]) => (
                  <div key={category}>
                    <h3 className="text-sm font-bold text-gray-500 dark:text-zinc-400 uppercase tracking-widest mb-2">{category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {items.map((skill, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded border border-gray-200 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-900/40 text-gray-700 dark:text-zinc-300 font-mono text-xs lg:text-sm hover:border-blue-500 dark:hover:border-cyber-accent dark:hover:bg-cyber-accent/5 dark:hover:text-cyber-accent hover:text-blue-600 transition-all duration-300 cursor-default"
                        >
                          <ShieldCheck className="h-3 w-3 text-blue-500/80 dark:text-cyber-accent/80" />
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>



            {/* Relevant Experience Component */}
            <RelevantExperience />

          </div>

          {/* RIGHT: Featured Project + Education */}
          <div className="lg:col-span-7 flex flex-col gap-4" id="projects">
            <FeaturedProject />
            
            {/* Education Card */}
            <div className="rounded-xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-950/40 p-4 backdrop-blur-md relative overflow-hidden group flex-1 flex flex-col justify-start">
              <Education />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
