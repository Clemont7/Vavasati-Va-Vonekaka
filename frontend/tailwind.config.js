/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Primary — brand book PDF (oficial)
        primary: {
          gold: '#D4AF37',
          terracotta: '#A8645C',
          'dark-brown': '#3D1C02',
          beige: '#E8E1D3',
        },
        // Secondary — extensão complementar 
        burgundy: '#5A0D1B',
        terracotta: '#8A4B32',
        bronze: '#B08A57',
        beige: '#F5F1E8',
        'dark-brown': '#3B2618',
        ivory: '#FAF8F4',
        sand: '#EADCC8',
      },
      fontFamily: {
        // PDF: Títulos — Playfair Display ou Cinzel
        display: ['"Playfair Display"', 'Cinzel', 'serif'],
        // PDF: Textos — Montserrat ou Open Sans
        body: ['Montserrat', '"Open Sans"', 'system-ui', 'sans-serif'],
      },
      spacing: {
        gutter: '24px',
      },
      maxWidth: {
        'container-max': '1200px',
      },
    },
  },
  plugins: [],
};
