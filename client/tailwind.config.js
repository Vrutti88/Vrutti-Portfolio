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
          darkest: 'var(--bg-darkest)',
          primary: 'var(--bg-primary)',
          card: 'var(--bg-card)',
          surface: 'var(--bg-surface)',
          elevated: 'var(--bg-elevated)',
          border: 'var(--border-muted)',
          'border-bright': 'var(--border-bright)',
        },
        brand: {
          green: 'var(--green)',
          'green-bright': 'var(--green-bright)',
          'green-dark': '#00B347',
          'green-glow': 'var(--green-glow)',
          purple: 'var(--purple)',
          'purple-glow': 'var(--purple-glow)',
          cyan: 'var(--cyan)',
          'cyan-glow': 'var(--cyan-glow)',
        },
        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          muted: 'var(--text-muted)',
          accent: 'var(--green)',
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
        'card-glow': '0 0 0 1px var(--border-bright), 0 8px 24px rgba(0, 0, 0, 0.4)',
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
