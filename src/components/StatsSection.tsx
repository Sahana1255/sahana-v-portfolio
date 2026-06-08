import React from 'react';
import { GraduationCap, Trophy, Users, Code, FolderGit } from 'lucide-react';

interface StatItem {
  icon: React.ReactNode;
  value: string;
  label: string;
  sublabel: string;
  colorClass: string;
}

export const StatsSection: React.FC = () => {
  const stats: StatItem[] = [
    {
      icon: <GraduationCap className="h-6 w-6" />,
      value: "9.1 /10",
      label: "CGPA",
      sublabel: "B.Tech CSE",
      colorClass: "from-blue-500/20 to-blue-600/5 dark:from-blue-500/10 dark:to-transparent"
    },
    {
      icon: <Trophy className="h-6 w-6" />,
      value: "10+",
      label: "Certifications",
      sublabel: "Professional & Technical",
      colorClass: "from-amber-500/20 to-amber-600/5 dark:from-amber-500/10 dark:to-transparent"
    },
    {
      icon: <Users className="h-6 w-6" />,
      value: "10,000+",
      label: "Users Served",
      sublabel: "ERP/CRM Platform",
      colorClass: "from-cyber-accent/20 to-emerald-600/5 dark:from-cyber-accent/10 dark:to-transparent"
    },
    {
      icon: <Code className="h-6 w-6" />,
      value: "2+",
      label: "Professional Experiences",
      sublabel: "Frontend & Security",
      colorClass: "from-indigo-500/20 to-indigo-600/5 dark:from-indigo-500/10 dark:to-transparent"
    },
    {
      icon: <FolderGit className="h-6 w-6" />,
      value: "1",
      label: "Major Project",
      sublabel: "Security Tool",
      colorClass: "from-rose-500/20 to-rose-600/5 dark:from-rose-500/10 dark:to-transparent"
    }
  ];

  return (
    <section className="pt-2 pb-8 relative">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`relative overflow-hidden group rounded-xl p-5 border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-950/60 backdrop-blur-md transition-all duration-300 hover:scale-[1.03] hover:shadow-lg dark:hover:shadow-[0_0_15px_rgba(0,255,102,0.05)] hover:border-blue-500 dark:hover:border-cyber-accent flex flex-col justify-between min-h-[140px] text-left`}
            >
              {/* Corner Glow Highlight */}
              <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${stat.colorClass} blur-xl rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />

              {/* Icon Frame */}
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-lg bg-gray-100 dark:bg-zinc-900/80 text-blue-600 dark:text-cyber-accent group-hover:bg-blue-600 group-hover:text-white dark:group-hover:bg-cyber-accent dark:group-hover:text-black transition-all duration-300">
                  {stat.icon}
                </div>
              </div>

              {/* Text */}
              <div className="mt-4 space-y-1">
                <div className="text-2xl lg:text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white font-mono">
                  {stat.value}
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-700 dark:text-zinc-300">
                    {stat.label}
                  </div>
                  <div className="text-[10px] text-gray-500 dark:text-zinc-500">
                    {stat.sublabel}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
