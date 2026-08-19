/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          darkest: '#030609',
          primary: '#05080D',
          card: '#080B10',
          surface: '#0D1117',
          elevated: '#161B22',
          border: '#21262D',
          'border-bright': '#30363D',
        },
        brand: {
          green: '#00FF66',
          'green-bright': '#39FF88',
          'green-dark': '#00B347',
          'green-glow': 'rgba(0, 255, 102, 0.25)',
          purple: '#A855F7',
          'purple-glow': 'rgba(168, 85, 247, 0.25)',
          cyan: '#00F0FF',
          'cyan-glow': 'rgba(0, 240, 255, 0.25)',
        },
        text: {
          primary: '#F0F6FC',
          secondary: '#8B949E',
          muted: '#484F58',
          accent: '#00FF66',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Manrope', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Space Mono"', 'monospace'],
      },
      boxShadow: {
        'glow-sm': '0 0 10px rgba(0, 255, 102, 0.25)',
        'glow-md': '0 0 20px rgba(0, 255, 102, 0.35)',
        'glow-lg': '0 0 35px rgba(0, 255, 102, 0.45)',
        'glow-purple': '0 0 20px rgba(168, 85, 247, 0.35)',
        'glow-cyan': '0 0 20px rgba(0, 240, 255, 0.35)',
        'card-glow': '0 0 0 1px rgba(48, 54, 61, 0.8), 0 8px 24px rgba(0, 0, 0, 0.6)',
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
