import React from 'react';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDark, toggleTheme }) => {
  return (
    <div className="flex items-center p-1 rounded-full border border-gray-200 dark:border-zinc-800 bg-gray-100 dark:bg-zinc-950/60 backdrop-blur-md transition-all duration-300">
      {/* Light Mode Button */}
      <button
        onClick={() => {
          if (isDark) toggleTheme();
        }}
        className={`p-2 rounded-full transition-all duration-300 flex items-center justify-center ${
          !isDark
            ? 'bg-white text-blue-600 shadow-sm'
            : 'text-zinc-500 hover:text-zinc-300 hover:bg-zinc-900/40'
        }`}
        title="Light Mode"
        aria-label="Activate Light Mode"
      >
        <Sun className="h-4 w-4" />
      </button>

      {/* Dark Mode Button */}
      <button
        onClick={() => {
          if (!isDark) toggleTheme();
        }}
        className={`p-2 rounded-full transition-all duration-300 flex items-center justify-center ${
          isDark
            ? 'bg-cyber-accent/15 text-cyber-accent border border-cyber-accent/30 shadow-[0_0_8px_rgba(0,255,102,0.2)]'
            : 'text-gray-500 hover:text-gray-900 hover:bg-gray-200/50'
        }`}
        title="Dark Mode"
        aria-label="Activate Dark Mode"
      >
        <Moon className="h-4 w-4" />
      </button>
    </div>
  );
};
