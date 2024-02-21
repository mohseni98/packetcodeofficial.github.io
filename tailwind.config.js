/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      cursor: {
        'fancy': 'url("/assets/icons/cursor_custom.svg"), auto',
        'fancyp': 'url("/assets/icons/pointer.svg"), pointer',
      },
      colors: {
        'gray-50': '#F6F6F6',
        'gray-100': '#EEEEEE',
        'gray-200': '#E6E6E6',
        'gray-300': '#DDDDDD',
        'gray-400': '#CCCCCC',
        'gray-500': '#999999',
        'gray-600': '#888888',
        'gray-700': '#777777',
        'gray-750': '#666666',
        'gray-800': '#555555',
        'gray-850': '#444444',
        'gray-900': '#333333',
        'gray-950': '#222222',
        'gray-1000': '#101010',
      },
      padding: {
        '17': '68px',
        '18': '72px',
        '19': '76px',
      },
      borderRadius: {
        '4xl': '32px'
      },
      boxShadow: {
        '20': ' 0 0 20px 0px rgb(0 0 0 / 0.2);'
      },
    },

    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        wl: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
      screens: {
        sm: '540px',
        md: '720px',
        lg: '960px',
        xl: '1140px',
        '2xl': '1320px',
      },
    },
    fontFamily: {
      'ephesis': ['Ephesis', 'sf-pro'],
      'PlayfairDisplay': ['Playfair Display', 'sf-pro']
    },
    screens: {
      sm: '540px',
      md: '720px',
      lg: '960px',
      xl: '1140px',
      '2xl': '1320px',
    },


  },
  plugins: [],
}
