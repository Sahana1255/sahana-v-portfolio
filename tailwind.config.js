/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: '#000000',
          card: '#08080c',
          cardLight: '#12121a',
          accent: '#00ff66', // Cybersecurity neon green
          accentBlue: '#0066ff',
          accentCyan: '#00f0ff',
          glow: 'rgba(0, 255, 102, 0.15)',
        }
      },
      fontFamily: {
        sans: ['"Times New Roman"', 'Times', 'serif'],
        mono: ['Fira Code', 'Courier New', 'monospace'],
      },
      boxShadow: {
        'neon-green': '0 0 8px rgba(0, 255, 102, 0.3), 0 0 20px rgba(0, 255, 102, 0.1)',
        'neon-green-strong': '0 0 15px rgba(0, 255, 102, 0.6), 0 0 30px rgba(0, 255, 102, 0.2)',
        'neon-cyan': '0 0 8px rgba(0, 240, 255, 0.3), 0 0 20px rgba(0, 240, 255, 0.1)',
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s infinite alternate',
        'pulse-glow-cyan': 'pulse-glow-cyan 2s infinite alternate',
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%': { boxShadow: '0 0 5px rgba(0, 255, 102, 0.2), 0 0 10px rgba(0, 255, 102, 0.1)' },
          '100%': { boxShadow: '0 0 15px rgba(0, 255, 102, 0.5), 0 0 25px rgba(0, 255, 102, 0.2)' },
        },
        'pulse-glow-cyan': {
          '0%': { boxShadow: '0 0 5px rgba(0, 240, 255, 0.2), 0 0 10px rgba(0, 240, 255, 0.1)' },
          '100%': { boxShadow: '0 0 15px rgba(0, 240, 255, 0.5), 0 0 25px rgba(0, 240, 255, 0.2)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
