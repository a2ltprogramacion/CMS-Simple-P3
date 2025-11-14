// tailwind.config.mjs
// Versión: 1.5 | Paleta: Cián + Índigo
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        // --- Paleta V1.5 (Tech / Premium) ---
        
        // Fondo Principal (Casi Negro)
        'primary': '#0D0D1F', 
        
        // Fondo Secundario (Azul Oscuro para tarjetas base)
        'secondary': '#1A1A2E', 
        
        // Acento Principal (Héroe: CTAs, Enlaces)
        'accent': '#00BFFF', // Azul Eléctrico (Cián)
        
        // Acento Secundario (Soporte: Textos, Botones Secundarios)
        'accent-secondary': '#7F5AF0', // Índigo Digital (Púrpura)

        // Texto Principal (Sobre fondos oscuros)
        'text-base': '#E0E0E0', // Gris Claro
        
        // Texto Invertido (Sobre fondos claros/neón)
        'text-inverted': '#0D0D1F', // Casi Negro
      },
      fontFamily: {
        'sans': ['Lato', 'sans-serif'],
        'serif': ['Space Grotesk', 'sans-serif'],
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}