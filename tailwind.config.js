/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      spacing: {
        '4.5': '1.125rem',
        '5.5': '1.375rem',
        '6.5': '1.625rem',
        '7.5': '1.875rem',
        '8.5': '2.125rem',
        '18': '4.5rem',
      },
      colors: {
        mint: {
          50:  '#ecfbf6',
          100: '#d4f5ea',
          200: '#a8ecd5',
          300: '#74dfbb',
          400: '#46cfa1',
          500: '#2bbf8b',
          600: '#1fa376',
          700: '#1a8261',
          800: '#18674e',
          900: '#0f3f30',
        },
        orange: {
          50:  '#fff4ec',
          100: '#ffe4d0',
          200: '#ffc89c',
          300: '#ffa861',
          400: '#ff8a33',
          500: '#f97316',
          600: '#e05a00',
          700: '#b04500',
          800: '#7a2f00',
        },
        ink: {
          DEFAULT: '#0f1916',
          soft: '#5a6661',
          mute: '#8b9591',
        },
        line: {
          DEFAULT: '#e6e9e8',
          strong: '#d2d7d5',
        },
        canvas: {
          DEFAULT: '#f6f8f7',
          soft: '#fbfcfc',
        },
        dark: {
          DEFAULT: '#0a1f1a',
          2: '#07251f',
          3: '#04332a',
          soft: '#0f2a23',
        },
      },
      fontFamily: {
        sans: ['Montserrat', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'soft-sm': '0 1px 2px rgba(15,25,22,0.04), 0 1px 1px rgba(15,25,22,0.03)',
        'soft':    '0 6px 18px rgba(15,25,22,0.06), 0 2px 4px rgba(15,25,22,0.04)',
        'soft-lg': '0 24px 60px rgba(15,25,22,0.10), 0 8px 18px rgba(15,25,22,0.05)',
        'soft-xl': '0 40px 80px rgba(15,25,22,0.18), 0 12px 24px rgba(15,25,22,0.08)',
        'mint':       '0 8px 20px rgba(43,191,139,0.25)',
        'mint-hover': '0 12px 28px rgba(43,191,139,0.35)',
        'mint-glow':  '0 30px 60px rgba(43,191,139,0.22), 0 12px 24px rgba(15,25,22,0.18)',
        'orange':       '0 8px 20px rgba(249,115,22,0.25)',
        'orange-hover': '0 12px 28px rgba(249,115,22,0.35)',
        'orange-badge': '0 8px 18px rgba(249,115,22,0.32)',
        'mockup':       '0 40px 80px rgba(0,0,0,0.35), 0 8px 24px rgba(0,0,0,0.18)',
        'card-elev':    '0 12px 30px rgba(43,191,139,0.18)',
      },
      borderRadius: {
        'rsm':  '8px',
        'rmd':  '12px',
        'rlg':  '16px',
        'rxl':  '22px',
        'r2xl': '28px',
      },
      maxWidth: {
        'container': '1200px',
      },
    },
  },
  plugins: [],
};
