import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  points: string[];
}

export const RelevantExperience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      role: "Intern - MoarDigital360 Pvt Ltd",
      company: "Web Development & Digital Marketing",
      period: "2023",
      points: [
        "Developed and optimized website content to improve user engagement and readability.",
        "Implemented SEO strategies, enhancing search visibility and driving organic traffic.",
        "Designed responsive and visually appealing web pages using modern web development tools.",
        "Collaborated with a professional team, gaining hands-on experience in real-world workflows and project execution."
      ]
    }
  ];

  return (
    <div className="rounded-xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-950/40 p-6 sm:p-8 backdrop-blur-md relative overflow-hidden h-full text-left">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-0 w-24 h-24 bg-blue-500/5 rounded-full blur-xl pointer-events-none" />

      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-blue-100 dark:bg-zinc-900 text-blue-600 dark:text-cyber-accent border border-blue-200 dark:border-zinc-800 shadow-md">
          <Briefcase className="h-5 w-5" />
          <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/5 dark:from-white/5 to-transparent pointer-events-none" />
        </div>
        <h2 className="text-xl font-bold tracking-wider text-gray-900 dark:text-white uppercase font-sans">
          Relevant Experience
        </h2>
      </div>

      {/* Timeline Layout */}
      <div className="relative border-l border-gray-200 dark:border-zinc-800 ml-4 pl-6 space-y-8">
        {experiences.map((exp, idx) => (
          <div key={idx} className="relative group">
            {/* Timeline Dot */}
            <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full border-2 border-white dark:border-zinc-950 bg-blue-600 dark:bg-cyber-accent shadow-md group-hover:scale-125 transition-transform duration-300">
              <div className="absolute inset-1 rounded-full bg-white dark:bg-zinc-950 scale-0 group-hover:scale-100 transition-transform duration-300" />
            </div>

            {/* Date Badge */}
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-blue-50 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-900/30">
                <Calendar className="h-3 w-3" />
                {exp.period}
              </span>
            </div>

            {/* Card Content */}
            <div className="space-y-1">
              <h3 className="text-base font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyber-accent transition-colors duration-300">
                {exp.role}
              </h3>
              <p className="text-xs font-bold text-gray-500 dark:text-zinc-400">
                {exp.company}
              </p>
            </div>

            {/* Bullet Points */}
            <ul className="mt-3 space-y-2 text-xs md:text-sm text-gray-600 dark:text-zinc-400 list-disc list-outside pl-4">
              {exp.points.map((pt, pIdx) => (
                <li key={pIdx} className="leading-relaxed">
                  {pt}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
