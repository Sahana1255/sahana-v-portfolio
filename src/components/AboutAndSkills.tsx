import React from 'react';
import { User, Cpu, ShieldCheck, Briefcase, Calendar } from 'lucide-react';
import { Education } from './Education';
import { motion } from 'framer-motion';

export const AboutAndSkills: React.FC = () => {
  const categorizedSkills = {
    "Cyber Security": ["SOC Operations", "Threat Monitoring", "Incident Response", "Log Analysis", "SIEM", "Network Security", "Wireshark", "Nmap"],
    "Frontend": ["React", "Vite", "JavaScript", "HTML", "CSS", "UI/UX Design"],
    "Common & Others": ["Python", "Linux", "Git", "GitHub", "SEO", "Problem Solving", "Team Collaboration"]
  };

  const experience = {
    role: "Intern - MoarDigital360 Pvt Ltd",
    company: "Web Development & Digital Marketing",
    period: "2023",
    points: [
      "Developed and optimized website content to improve user engagement and readability.",
      "Implemented SEO strategies, enhancing search visibility and driving organic traffic.",
      "Designed responsive and visually appealing web pages using modern web development tools.",
      "Collaborated with a professional team, gaining hands-on experience in real-world workflows and project execution.",
    ]
  };

  return (
    <section id="about" className="py-8 border-t border-gray-150 dark:border-zinc-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

          {/* LEFT: About Me + Education */}
          <div className="lg:col-span-5 rounded-xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-950/40 p-5 backdrop-blur-md relative overflow-hidden group">
            <div className="absolute -top-3 -right-3 w-16 h-16 bg-blue-500/10 rounded-full blur-xl pointer-events-none group-hover:bg-blue-500/20 transition duration-300" />

            <div className="flex items-center gap-2 mb-3">
              <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-blue-100 dark:bg-zinc-900 text-blue-600 dark:text-cyber-accent border border-blue-200 dark:border-zinc-800 shadow-sm">
                <User className="h-4 w-4" />
                <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/5 dark:from-white/5 to-transparent pointer-events-none" />
              </div>
              <h2 className="text-sm font-bold tracking-wider text-gray-900 dark:text-white uppercase font-sans">About Me</h2>
            </div>

            <p className="text-gray-600 dark:text-zinc-300 leading-relaxed text-left font-sans text-sm md:text-base lg:text-[15.5px]">
              Aspiring SOC L1 Analyst and Cyber Security Blue Team enthusiast with hands-on experience in threat monitoring, incident response, and SIEM. Built a full-stack URL Threat Evaluation and Risk Scoring System integrating security checks and machine learning to detect and classify potential threats. Additionally experienced as a Frontend Developer, building responsive web interfaces using React, Vite, and modern UI/UX design principles.
            </p>

            <div className="mt-4 border-t border-gray-100 dark:border-zinc-800/40 pt-4">
              <Education />
            </div>
          </div>

          {/* RIGHT: Skills + Relevant Experience */}
          <div className="lg:col-span-7 rounded-xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-950/40 p-5 backdrop-blur-md relative overflow-hidden group">
            <div className="absolute -top-3 -right-3 w-16 h-16 bg-cyber-accent/10 rounded-full blur-xl pointer-events-none group-hover:bg-cyber-accent/20 transition duration-300" />

            {/* Skills */}
            <div className="flex items-center gap-2 mb-3">
              <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-100 dark:bg-zinc-900 text-emerald-600 dark:text-cyber-accent border border-emerald-200 dark:border-zinc-800 shadow-sm">
                <Cpu className="h-4 w-4" />
                <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/5 dark:from-white/5 to-transparent pointer-events-none" />
              </div>
              <h2 className="text-sm font-bold tracking-wider text-gray-900 dark:text-white uppercase font-sans">Skills</h2>
            </div>

            <div className="space-y-3 text-left">
              {Object.entries(categorizedSkills).map(([category, items]) => (
                <div key={category}>
                  <h3 className="text-xs font-bold text-gray-500 dark:text-zinc-400 uppercase tracking-widest mb-1.5">{category}</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {items.map((skill, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-1.5 px-2.5 py-1 rounded border border-gray-200 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-900/40 text-gray-700 dark:text-zinc-300 font-mono text-[11px] lg:text-[12px] hover:border-blue-500 dark:hover:border-cyber-accent dark:hover:bg-cyber-accent/5 dark:hover:text-cyber-accent hover:text-blue-600 transition-all duration-300 cursor-default"
                      >
                        <ShieldCheck className="h-3 w-3 text-blue-500/80 dark:text-cyber-accent/80" />
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="mt-4 border-t border-gray-100 dark:border-zinc-800/40 pt-4">

              {/* Relevant Experience */}
              <div className="flex items-center gap-2 mb-3">
                <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-blue-100 dark:bg-zinc-900 text-blue-600 dark:text-cyber-accent border border-blue-200 dark:border-zinc-800 shadow-sm flex-shrink-0">
                  <Briefcase className="h-4 w-4" />
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/5 dark:from-white/5 to-transparent pointer-events-none" />
                </div>
                <h2 className="text-sm font-bold tracking-wider text-gray-900 dark:text-white uppercase font-sans">Relevant Experience</h2>
              </div>

              {/* Timeline */}
              <div className="relative border-l border-gray-200 dark:border-zinc-800/60 ml-3.5 pl-4">
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="relative group/exp"
                >
                  {/* Dot */}
                  <motion.div
                    animate={{ boxShadow: ["0px 0px 0px 0px rgba(0,102,255,0)", "0px 0px 8px 2px rgba(0,102,255,0.35)", "0px 0px 0px 0px rgba(0,102,255,0)"] }}
                    transition={{ repeat: Infinity, duration: 2.5 }}
                    className="absolute -left-[23px] top-1 w-2.5 h-2.5 rounded-full border border-white dark:border-zinc-950 bg-blue-600 dark:bg-cyber-accent shadow-sm group-hover/exp:scale-125 transition-transform duration-300"
                  />

                  {/* Header Row with Year on the Right */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1.5 text-left mb-1.5">
                    <div className="space-y-0.5">
                      <h3 className="text-xs font-bold text-gray-900 dark:text-white group-hover/exp:text-blue-600 dark:group-hover/exp:text-cyber-accent transition-colors duration-300 leading-tight">
                        {experience.role}
                      </h3>
                      <p className="text-[11px] text-gray-500 dark:text-zinc-400 font-semibold">{experience.company}</p>
                    </div>
                    <div className="sm:text-right flex-shrink-0 self-start">
                      <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[9px] font-mono font-bold bg-blue-50 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-900/30">
                        <Calendar className="h-2.5 w-2.5" />
                        {experience.period}
                      </span>
                    </div>
                  </div>

                  {/* Points */}
                  <ul className="space-y-1 text-[11px] text-gray-600 dark:text-zinc-400 list-disc list-outside pl-3.5">
                    {experience.points.map((pt, pIdx) => (
                      <li key={pIdx} className="leading-relaxed">{pt}</li>
                    ))}
                  </ul>
                </motion.div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
