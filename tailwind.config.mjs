// tailwind.config.mjs
// Versión: 2.0 | Paleta: B2B Conservador (Modo Claro)
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
        // --- Paleta V2.0 (B2B Conservador / Modo Claro) ---
        
        // Fondo Principal (Fondo de Página)
        'primary': '#F7F7F7', // Blanco Roto / Gris Muy Claro
        
        // Fondo Secundario (Fondo de Tarjetas / Secciones Destacadas)
        'secondary': '#FFFFFF', // Blanco Puro

        // Acento Principal (Títulos, Énfasis Básico)
        'accent': '#0077B6', // Azul de Confianza (Similar a LinkedIn)
        
        // Acento Secundario (CTAs, Botones Primarios, Bordes de Énfasis)
        'accent-secondary': '#1E3A8A', // Azul Marino Profundo (Navy)

        // Texto Principal (Sobre fondos claros)
        'text-base': '#1F2937', // Gris Oscuro (Legibilidad)
        
        // Texto Invertido (Sobre acentos)
        'text-inverted': '#FFFFFF', // Blanco
      },
      fontFamily: {
        // Mantener las tipografías pero el estilo visual cambia con la paleta
        'sans': ['Lato', 'sans-serif'],
        'serif': ['Space Grotesk', 'sans-serif'],
      },
      // Eliminado 'backdropBlur' ya que no se usará en el nuevo diseño
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}