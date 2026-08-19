/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          darkest: 'rgb(var(--bg-darkest) / <alpha-value>)',
          primary: 'rgb(var(--bg-primary) / <alpha-value>)',
          card: 'rgb(var(--bg-card) / <alpha-value>)',
          surface: 'rgb(var(--bg-surface) / <alpha-value>)',
          elevated: 'rgb(var(--bg-elevated) / <alpha-value>)',
          border: 'rgb(var(--border-muted) / <alpha-value>)',
          'border-bright': 'rgb(var(--border-bright) / <alpha-value>)',
        },
        brand: {
          green: 'rgb(var(--green) / <alpha-value>)',
          'green-bright': 'rgb(var(--green-bright) / <alpha-value>)',
          'green-dark': '#00B347',
          'green-glow': 'var(--green-glow)',
          purple: 'rgb(var(--purple) / <alpha-value>)',
          'purple-glow': 'var(--purple-glow)',
          cyan: 'rgb(var(--cyan) / <alpha-value>)',
          'cyan-glow': 'var(--cyan-glow)',
        },
        text: {
          primary: 'rgb(var(--text-primary) / <alpha-value>)',
          secondary: 'rgb(var(--text-secondary) / <alpha-value>)',
          muted: 'rgb(var(--text-muted) / <alpha-value>)',
          accent: 'rgb(var(--green) / <alpha-value>)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Manrope', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Space Mono"', 'monospace'],
      },
      boxShadow: {
        'glow-sm': '0 0 10px var(--green-glow)',
        'glow-md': '0 0 20px var(--green-glow)',
        'glow-lg': '0 0 35px var(--green-glow)',
        'glow-purple': '0 0 20px var(--purple-glow)',
        'glow-cyan': '0 0 20px var(--cyan-glow)',
        'card-glow': '0 0 0 1px var(--border-bright), 0 8px 24px rgba(0, 0, 0, 0.12)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'glow-line': 'glowLine 3s ease infinite',
        'blink': 'blink 1s step-end infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        glowLine: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        }
      }
    },
  },
  plugins: [],
}
