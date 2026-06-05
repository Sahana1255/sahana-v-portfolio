import React from 'react';
import { User, Cpu, ShieldCheck } from 'lucide-react';
import { Education } from './Education';

export const AboutAndSkills: React.FC = () => {
  const categorizedSkills = {
    "Cyber Security": ["SOC Operations", "Threat Monitoring", "Incident Response", "Log Analysis", "SIEM", "Network Security", "Wireshark", "Nmap"],
    "Frontend": ["React", "Vite", "JavaScript", "HTML", "CSS", "UI/UX Design"],
    "Common": ["Python", "Linux", "Git", "GitHub", "SEO"],
    "Others": ["Problem Solving", "Team Collaboration"]
  };

  return (
    <section id="about" className="py-16 border-t border-gray-150 dark:border-zinc-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* About Me Section */}
          <div className="lg:col-span-6 rounded-xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-950/40 p-6 sm:p-8 backdrop-blur-md relative overflow-hidden group">
            {/* 3D Sticker Style Icon */}
            <div className="absolute -top-3 -right-3 w-16 h-16 bg-blue-500/10 rounded-full blur-xl pointer-events-none group-hover:bg-blue-500/20 transition duration-300" />
            
            <div className="flex items-center gap-3 mb-6">
              <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-blue-100 dark:bg-zinc-900 text-blue-600 dark:text-cyber-accent border border-blue-200 dark:border-zinc-800 shadow-md">
                <User className="h-5 w-5" />
                {/* 3D shadow depth overlay */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/5 dark:from-white/5 to-transparent pointer-events-none" />
              </div>
              <h2 className="text-xl font-bold tracking-wider text-gray-900 dark:text-white uppercase font-sans">
                About Me
              </h2>
            </div>

            <p className="text-gray-600 dark:text-zinc-300 leading-relaxed text-left font-sans text-sm md:text-base">
              Aspiring SOC L1 Analyst and Cyber Security Blue Team enthusiast with hands-on experience in threat monitoring, incident response, and SIEM. Built a full-stack URL Threat Evaluation and Risk Scoring System integrating security checks and machine learning to detect and classify potential threats. Additionally experienced as a Frontend Developer, building responsive web interfaces using React, Vite, and modern UI/UX design principles.
            </p>

            <div className="mt-8 border-t border-gray-100 dark:border-zinc-800 pt-8">
              <Education />
            </div>
          </div>

          {/* Skills Section */}
          <div className="lg:col-span-6 rounded-xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-950/40 p-6 sm:p-8 backdrop-blur-md relative overflow-hidden group">
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

            {/* Skills Tag Grid */}
            <div className="space-y-4 text-left">
              {Object.entries(categorizedSkills).map(([category, items]) => (
                <div key={category}>
                  <h3 className="text-sm font-bold text-gray-800 dark:text-zinc-200 mb-2">{category}</h3>
                  <div className="flex flex-wrap gap-2.5 justify-start">
                    {items.map((skill, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-gray-200 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-900/40 text-gray-700 dark:text-zinc-300 font-mono text-xs hover:border-blue-500 dark:hover:border-cyber-accent dark:hover:bg-cyber-accent/5 dark:hover:text-cyber-accent hover:text-blue-600 hover:shadow-[0_0_8px_rgba(0,102,255,0.1)] dark:hover:shadow-[0_0_8px_rgba(0,255,102,0.15)] transition-all duration-300 cursor-default"
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

        </div>
      </div>
    </section>
  );
};
