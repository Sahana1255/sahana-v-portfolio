import { useState, useEffect } from 'react';
import { ShieldCheck, Menu, X, ArrowUp } from 'lucide-react';
import { ThemeToggle } from './components/ThemeToggle';
import { HeroSection } from './components/HeroSection';
import { StatsSection } from './components/StatsSection';
import { AboutAndSkills } from './components/AboutAndSkills';

import { Certifications } from './components/Certifications';
import { Footer } from './components/Footer';

function App() {
  const [isDark, setIsDark] = useState(true); // Default to Dark mode as requested
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Show/hide scroll-to-top button based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Synchronize dark class on document element
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      root.style.backgroundColor = '#000000';
    } else {
      root.classList.remove('dark');
      root.style.backgroundColor = '#ffffff';
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 ${isDark ? 'bg-black text-white dark' : 'bg-white text-zinc-900'
      }`}>

      {/* Sticky Header Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200/50 dark:border-zinc-900/60 bg-white/80 dark:bg-black/80 backdrop-blur-md transition-colors duration-300">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <a href="#home" className="flex items-center gap-2">
              <ShieldCheck className="h-6 w-6 text-blue-600 dark:text-cyber-accent" />
              <span className="font-extrabold text-lg tracking-wider font-sans">
                SAHANA V
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className="text-sm font-semibold text-gray-600 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-cyber-accent transition-colors font-sans"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Theme Toggle & Mobile Menu Trigger */}
            <div className="flex items-center gap-4">
              <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-lg border border-gray-200 dark:border-zinc-800 text-gray-500 dark:text-zinc-400 hover:bg-gray-150 dark:hover:bg-zinc-900/50 transition-colors"
                aria-label="Toggle Navigation Menu"
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200/80 dark:border-zinc-900/80 bg-white dark:bg-black py-4 px-6 space-y-3 transition-all duration-300 ease-in-out text-left shadow-lg">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-sm font-bold text-gray-700 hover:text-blue-600 dark:text-zinc-300 dark:hover:text-cyber-accent py-1.5 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* Main Container Grid */}
      <main className="cyber-grid min-h-screen">

        {/* Hero Banner Section */}
        <HeroSection />

        {/* 3D Dashboard Stats Metrics */}
        <StatsSection />

        {/* About Me & Categorised Skills Grid */}
        <AboutAndSkills />



        {/* Grid of Certifications */}
        <Certifications />

      </main>

      {/* Brand Footer & Contact Info */}
      <Footer />

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-8 right-8 z-50 p-3 rounded-full bg-blue-600 hover:bg-blue-700 dark:bg-cyber-accent dark:hover:bg-emerald-400 text-white dark:text-black shadow-lg dark:shadow-[0_0_15px_rgba(0,255,102,0.3)] transition-all duration-300 cursor-pointer ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Scroll to top"
        id="scroll-to-top-btn"
      >
        <ArrowUp className="h-5 w-5" />
      </button>

    </div>
  );
}

export default App;
