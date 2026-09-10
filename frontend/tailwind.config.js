/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        /* Paleta oficial do brand book — Vavasati va vonekaka */
        gold: '#D4AF37',
        terracotta: '#A8645C',
        'dark-brown': '#3D1C02',
        beige: '#E8E1D3',
        /* Neutro de fundo (fora da paleta oficial, para legibilidade) */
        cream: '#FFF9F5',
        primary: {
          gold: '#D4AF37',
          terracotta: '#A8645C',
          'dark-brown': '#3D1C02',
          beige: '#E8E1D3',
        },
        /* Aliases legados → apontam para a paleta oficial */
        bronze: '#D4AF37',
        burgundy: '#3D1C02',
        ivory: '#FFF9F5',
        sand: '#E8E1D3',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Cinzel', 'serif'],
        body: ['Montserrat', '"Open Sans"', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Cinzel', 'serif'],
        sans: ['Montserrat', '"Open Sans"', 'system-ui', 'sans-serif'],
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
        'poster-in': 'poster-in 0.4s ease-out',
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
        'poster-in': {
          '0%': { transform: 'translateX(var(--poster-from, 24px))', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'benefit-shine': {
          '0%': {
            boxShadow: '0 0 0 0 rgba(212, 175, 55, 0)',
            borderColor: 'rgba(255, 249, 245, 0.15)',
          },
          '35%': {
            boxShadow:
              '0 0 28px 4px rgba(212, 175, 55, 0.55), 0 0 60px 12px rgba(168, 100, 92, 0.35)',
            borderColor: 'rgba(212, 175, 55, 0.95)',
          },
          '100%': {
            boxShadow: '0 0 0 0 rgba(212, 175, 55, 0)',
            borderColor: 'rgba(255, 249, 245, 0.15)',
          },
        },
      },
    },
  },
  plugins: [],
};
