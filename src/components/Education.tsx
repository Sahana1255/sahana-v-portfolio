import React from 'react';
import { Calendar, GraduationCap } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <div id="education" className="w-full">
      <div className="w-full">
        <div className="rounded-xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-950/40 p-6 sm:p-8 backdrop-blur-md relative overflow-hidden group">
          {/* Background Highlight */}
          <div className="absolute top-1/2 -right-4 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl pointer-events-none group-hover:bg-blue-500/10 transition duration-300" />
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            
            {/* Institution and Major */}
            <div className="flex items-start gap-4 text-left">
              {/* Sticker Icon */}
              <div className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-blue-100 dark:bg-zinc-900 text-blue-600 dark:text-cyber-accent border border-blue-200 dark:border-zinc-800 shadow-md group-hover:scale-105 transition-transform duration-300 flex-shrink-0">
                <GraduationCap className="h-6 w-6" />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/5 dark:from-white/5 to-transparent pointer-events-none" />
              </div>
              
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono font-bold text-blue-600 dark:text-cyber-accent uppercase tracking-widest bg-blue-50 dark:bg-blue-950/30 px-2 py-0.5 rounded border border-blue-100 dark:border-blue-900/30">
                    Education
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  Bharath Institute of Higher Education and Research
                </h3>
                <p className="text-sm font-semibold text-gray-600 dark:text-zinc-300">
                  Bachelor of Technology - Computer Science
                </p>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs font-mono font-medium text-gray-500 dark:text-zinc-500 pt-1">
                  <span>CGPA: 9.1/10</span>
                  <span className="hidden sm:inline">•</span>
                  <span>Percentage: 91.1%</span>
                </div>
              </div>
            </div>

            {/* Date period */}
            <div className="flex md:flex-col items-center md:items-end justify-between md:justify-center border-t md:border-t-0 border-gray-100 dark:border-zinc-900 pt-4 md:pt-0">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-mono font-bold bg-blue-50 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-900/30">
                <Calendar className="h-3.5 w-3.5" />
                2022 - 2026
              </span>
            </div>

          </div>
        </div>

        <div className="rounded-xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-950/40 p-6 sm:p-8 backdrop-blur-md relative overflow-hidden group mt-6">
          <div className="absolute top-1/2 -right-4 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl pointer-events-none group-hover:bg-blue-500/10 transition duration-300" />
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            
            <div className="flex items-start gap-4 text-left">
              <div className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-blue-100 dark:bg-zinc-900 text-blue-600 dark:text-cyber-accent border border-blue-200 dark:border-zinc-800 shadow-md group-hover:scale-105 transition-transform duration-300 flex-shrink-0">
                <GraduationCap className="h-6 w-6" />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/5 dark:from-white/5 to-transparent pointer-events-none" />
              </div>
              
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono font-bold text-blue-600 dark:text-cyber-accent uppercase tracking-widest bg-blue-50 dark:bg-blue-950/30 px-2 py-0.5 rounded border border-blue-100 dark:border-blue-900/30">
                    Education
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  Bharath Institute of Higher Education and Research
                </h3>
                <p className="text-sm font-semibold text-gray-600 dark:text-zinc-300">
                  Master of Technology - Computer Science
                </p>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs font-mono font-medium text-gray-500 dark:text-zinc-500 pt-1">
                  <span>Currently Pursuing</span>
                </div>
              </div>
            </div>

            <div className="flex md:flex-col items-center md:items-end justify-between md:justify-center border-t md:border-t-0 border-gray-100 dark:border-zinc-900 pt-4 md:pt-0">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-mono font-bold bg-blue-50 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-900/30">
                <Calendar className="h-3.5 w-3.5" />
                Currently Pursuing
              </span>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
