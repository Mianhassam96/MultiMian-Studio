module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563eb',
          dark:    '#1e40af',
          light:   '#3b82f6',
        },
        accent: {
          cyan:   '#06b6d4',
          purple: '#8b5cf6',
          green:  '#10b981',
          red:    '#ef4444',
          yellow: '#f59e0b',
        },
        // legacy aliases kept for backward compatibility
        accentBlue:   '#0b3d91',
        accentGreen:  '#064e3b',
        accentRed:    '#7f1d1d',
        accentYellow: '#b45309',
        brand: {
          50:  '#f0f4ff',
          100: '#e0e9ff',
          500: '#06b6d4',
        },
        surface: {
          DEFAULT: '#ffffff',
          dark:    '#0d1530',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      fontSize: {
        'xs':   ['0.75rem',   { lineHeight: '1.5'  }],
        'sm':   ['0.9375rem', { lineHeight: '1.6'  }],
        'base': ['1.125rem',  { lineHeight: '1.75' }],
        'lg':   ['1.25rem',   { lineHeight: '1.75' }],
        'xl':   ['1.5rem',    { lineHeight: '1.5'  }],
        '2xl':  ['2rem',      { lineHeight: '1.3'  }],
        '3xl':  ['2.5rem',    { lineHeight: '1.2'  }],
        '4xl':  ['3rem',      { lineHeight: '1.1'  }],
        '5xl':  ['4rem',      { lineHeight: '1.05' }],
        '6xl':  ['5rem',      { lineHeight: '1'    }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      animation: {
        'gradient-x':  'gradient-x 15s ease infinite',
        'gradient-y':  'gradient-y 15s ease infinite',
        'gradient-xy': 'gradient-xy 12s ease infinite',
        'float':       'float 6s ease-in-out infinite',
        'float-slow':  'float 9s ease-in-out infinite',
        'fade-up':     'fade-up 0.6s ease forwards',
        'slide-left':  'slide-in-left 0.6s ease forwards',
        'slide-right': 'slide-in-right 0.6s ease forwards',
        'pulse-ring':  'pulse-ring 2s cubic-bezier(0.455,0.03,0.515,0.955) infinite',
        'shimmer':     'shimmer 1.5s infinite',
        'spin-slow':   'spin 8s linear infinite',
        'bounce-soft': 'bounce 2s ease-in-out infinite',
      },
      keyframes: {
        'gradient-y': {
          '0%, 100%': { 'background-size': '400% 400%', 'background-position': 'center top' },
          '50%':       { 'background-size': '200% 200%', 'background-position': 'center center' },
        },
        'gradient-x': {
          '0%, 100%': { 'background-size': '200% 200%', 'background-position': 'left center' },
          '50%':       { 'background-size': '200% 200%', 'background-position': 'right center' },
        },
        'gradient-xy': {
          '0%, 100%': { 'background-size': '400% 400%', 'background-position': 'left center' },
          '50%':       { 'background-size': '200% 200%', 'background-position': 'right center' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':       { transform: 'translateY(-12px)' },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-left': {
          from: { opacity: '0', transform: 'translateX(-30px)' },
          to:   { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-in-right': {
          from: { opacity: '0', transform: 'translateX(30px)' },
          to:   { opacity: '1', transform: 'translateX(0)' },
        },
        'pulse-ring': {
          '0%':   { transform: 'scale(0.95)', boxShadow: '0 0 0 0 rgba(37,99,235,0.5)' },
          '70%':  { transform: 'scale(1)',    boxShadow: '0 0 0 12px rgba(37,99,235,0)' },
          '100%': { transform: 'scale(0.95)', boxShadow: '0 0 0 0 rgba(37,99,235,0)' },
        },
        'shimmer': {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glass':  'var(--card-shadow)',
        'glow':   '0 0 30px rgba(37,99,235,0.35)',
        'glow-lg':'0 0 60px rgba(37,99,235,0.4)',
        'inner-glow': 'inset 0 0 20px rgba(37,99,235,0.15)',
      },
    },
  },
  plugins: [],
};
