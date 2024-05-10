/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        purple: {
          50: '#f5e1ff',
          100: '#d7b9ff',
          200: '#b189ff',
          300: '#9261e6',
          400: '#7440cc',
          500: '#5c2db3',
          600: '#4a2599',
          700: '#3a1e7d',
          800: '#2c1664',
          900: '#1e0e4c',
        },
        green: {
          50: '#e6fff0',
          100: '#b3ffd1',
          200: '#80ffb0',
          300: '#4dff8e',
          400: '#26ff75',
          500: '#00ff59',
          600: '#00e64a',
          700: '#00b339',
          800: '#00802b',
          900: '#00551f',
        },
        blue: {
          50: '#e6f2ff',
          100: '#b3d1ff',
          200: '#80adff',
          300: '#4d89ff',
          400: '#2673ff',
          500: '#0059ff',
          600: '#004dd1',
          700: '#003f99',
          800: '#003366',
          900: '#002233',
        },
        white: '#ffffff',
      },
      spacing: {
        // Espaçamentos personalizados podem ser definidos aqui...
      },
      minHeight: {
        // Altura mínima personalizada pode ser definida aqui...
        '0': '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        'full': '100%',
        'screen': '100vh',
      },
      minWidth: {
        // Largura mínima personalizada pode ser definida aqui...
        '0': '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        'full': '100%',
        'screen': '100vw',
      },
      maxHeight: {
        // Altura máxima personalizada pode ser definida aqui...
        'full': '100%',
        'screen': '100vh',
      },
      maxWidth: {
        // Largura máxima personalizada pode ser definida aqui...
        'full': '100%',
        'screen': '100vw',
      },
    },
  },
  plugins: [],
}