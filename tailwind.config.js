const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
    ],
    safelist: [
      'bg-orange-100',
      'bg-blue-800',
      'text-blue-800',
      'bg-green-100',
      'bg-transparent',
      'text-green-200',
      'duration-100',
      'duration-400',
      'duration-600',
      'list-inside',
    ],
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors: {
      ...colors,
      alt: {
        DEFAULT: '#D0D3CA',
      },
      orange: {
        DEFAULT: '#F26124',
        50: '#FCDED1',
        100: '#F8F0E8',
        200: '#F9B498',
        300: '#F79971',
        400: '#F47D4B',
        500: '#F26124',
        600: '#D1470C',
        700: '#9D3509',
        800: '#682306',
        900: '#331103',
      },
      blue: {
        DEFAULT: '#31334D',
        50: '#93A7BA',
        100: '#8599B1',
        200: '#687D9F',
        300: '#556285',
        400: '#434969',
        500: '#31334D',
        600: '#1C1B2B',
        700: '#060508',
        800: '#000000',
        900: '#000000',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Poppins', 'system-ui'],
        serif: ['ui-serif', 'Georgia'],
        mono: ['ui-monospace', 'SFMono-Regular'],
        display: ['Poppins'],
        body: ['Poppins'],
      },

      // that is animation class
      animation: {
        fadeUp: 'fadeUp 0.3s ease-in-out',
        fadeIn: 'fadeIn 0.3s ease-in-out',
      },

      // that is actual animation
      keyframes: () => ({
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0px)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      }),
    },
  },
  variants: {
    typography: ['dark'],
  },
  plugins: [require('@tailwindcss/typography')],
};
