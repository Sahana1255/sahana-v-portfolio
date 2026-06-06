import React from 'react';
import { Calendar, GraduationCap } from 'lucide-react';

export const Education: React.FC = () => {
  const educationData = [
    {
      degree: "Bachelor of Technology - Computer Science",
      institution: "Bharath Institute of Higher Education and Research",
      period: "2022 - 2026",
      details: "CGPA: 9.1/10 • Percentage: 91.1%"
    },
    {
      degree: "Higher Secondary School Certificate",
      institution: "Zion Matriculation Higher Secondary School, Selaiyur",
      period: "2022",
      details: "State Board of School Examination"
    }
  ];

  return (
    <div id="education" className="w-full">
      <div className="flex items-center gap-2 mb-3">
        <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-blue-100 dark:bg-zinc-900 text-blue-600 dark:text-cyber-accent border border-blue-200 dark:border-zinc-800 shadow-sm flex-shrink-0">
          <GraduationCap className="h-4 w-4" />
        </div>
        <h2 className="text-sm font-bold tracking-wider text-gray-900 dark:text-white uppercase font-sans">Education</h2>
      </div>

      <div className="space-y-3">
        {educationData.map((edu, idx) => (
          <div key={idx} className="relative flex flex-col sm:flex-row sm:items-start justify-between gap-2 border-b border-gray-100 dark:border-zinc-800/40 pb-2.5 last:border-0 last:pb-0 text-left">
            <div className="space-y-0.5">
              <h3 className="text-xs font-bold text-gray-900 dark:text-white leading-snug">
                {edu.degree}
              </h3>
              <p className="text-[11px] text-gray-600 dark:text-zinc-400">
                {edu.institution}
              </p>
              <p className="text-[10px] font-mono text-gray-500 dark:text-zinc-500">
                {edu.details}
              </p>
            </div>
            <div className="sm:text-right flex-shrink-0 self-start">
              <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[9px] font-mono font-bold bg-blue-50 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-900/30">
                <Calendar className="h-2.5 w-2.5" />
                {edu.period}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
