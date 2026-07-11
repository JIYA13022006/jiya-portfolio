/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0B1120',
          light: '#121A2E',
          lighter: '#1A2338',
        },
        paper: {
          DEFAULT: '#F6F7FB',
          card: '#FFFFFF',
          line: '#E4E7F0',
        },
        accent: {
          violet: '#7C9CFF',
          gold: '#F2C94C',
          mint: '#6EE7B7',
          rose: '#F27C8D',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(11, 17, 32, 0.28)',
        glow: '0 0 40px -8px rgba(124, 156, 255, 0.45)',
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        blink: 'blink 1s step-start infinite',
        float: 'float 6s ease-in-out infinite',
        'fade-up': 'fadeUp 0.6s ease forwards',
      },
      keyframes: {
        blink: {
          '50%': { opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
