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

      <div className="flex flex-col md:flex-row md:items-start gap-3 md:gap-0">
        {educationData.map((edu, idx) => (
          <React.Fragment key={idx}>
            {idx > 0 && (
              <>
                <div className="hidden md:block w-px bg-gray-200 dark:bg-zinc-800 mx-4 self-stretch" />
                <div className="md:hidden border-t border-gray-100 dark:border-zinc-800/40" />
              </>
            )}
            <div className="flex-1 flex flex-col sm:flex-row sm:items-start justify-between gap-2 text-left min-w-0">
              <div className="space-y-0.5 min-w-0">
                <h3 className="text-sm font-bold text-gray-900 dark:text-white leading-snug">
                  {edu.degree} <span className="mx-1 text-gray-400 dark:text-zinc-500">—</span> <span className="font-mono text-xs text-gray-600 dark:text-zinc-400">{edu.details}</span>
                </h3>
                <p className="text-[11px] text-gray-600 dark:text-zinc-400 mt-0.5">
                  {edu.institution}
                </p>
              </div>
              <div className="sm:text-right flex-shrink-0 self-start">
                <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[9px] font-mono font-bold bg-blue-50 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-900/30">
                  <Calendar className="h-2.5 w-2.5" />
                  {edu.period}
                </span>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
