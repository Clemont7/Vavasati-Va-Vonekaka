/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          gold: '#D4AF37',
          terracotta: '#A8645C',
          'dark-brown': '#3D1C02',
          beige: '#E8E1D3',
        },
        burgundy: '#5A0D1B',
        terracotta: '#8A4B32',
        bronze: '#B08A57',
        cream: '#FFF9F5',
        beige: '#F5F1E8',
        'dark-brown': '#3B2618',
        ivory: '#FAF8F4',
        sand: '#EADCC8',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['Inter', 'Montserrat', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'Montserrat', 'system-ui', 'sans-serif'],
      },
      spacing: {
        gutter: '24px',
        header: '4.5rem',
      },
      maxWidth: {
        'container-max': '1200px',
      },
      animation: {
        marquee: 'marquee 26s linear infinite',
        'pulse-soft': 'pulse-soft 2.5s ease-in-out infinite',
        'panel-in': 'panel-in 0.28s ease-out',
        'modal-in': 'modal-in 0.28s ease-out',
        'benefit-shine': 'benefit-shine 1.8s ease-in-out',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'pulse-soft': {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.25' },
          '50%': { transform: 'scale(1.15)', opacity: '0.1' },
        },
        'panel-in': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        'modal-in': {
          '0%': { transform: 'scale(0.96)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'benefit-shine': {
          '0%': {
            boxShadow: '0 0 0 0 rgba(176, 138, 87, 0)',
            borderColor: 'rgba(255, 249, 245, 0.15)',
          },
          '35%': {
            boxShadow:
              '0 0 28px 4px rgba(212, 175, 55, 0.55), 0 0 60px 12px rgba(176, 138, 87, 0.35)',
            borderColor: 'rgba(212, 175, 55, 0.95)',
          },
          '100%': {
            boxShadow: '0 0 0 0 rgba(176, 138, 87, 0)',
            borderColor: 'rgba(255, 249, 245, 0.15)',
          },
        },
      },
    },
  },
  plugins: [],
};
