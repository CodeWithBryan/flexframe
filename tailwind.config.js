/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      screens: {
        xs: '325px',
        sm: '480px',
        md: '768px',
        cmd: '850px',
        lg: '976px',
        xl: '1280px',
      },
      colors: {
        black: {
          1: '#000000',
          2: 'rgba(255, 255, 255, 0.04)',
        },
        red: {
          1: '#B61F24',
        },
        white: {
          1: '#FFF',
          2: '#CCCCCC',
          3: '#E2E4E9',
        },
        yellow: {
          1: '#FCB823',
        },
      },
      fontSize: {
        // Text series
        't-xs': ['.75rem', '1rem'],
        't-sm': ['.875rem', '1.25rem'],
        't-md': ['1rem', '1.5rem'],
        't-lg': ['1.125rem', '1.75rem'],
        't-xl': ['1.25rem', '1.875rem'],

        // Display series
        'd-xs': ['1.5rem', '2rem'],
        'd-sm': ['1.875rem', '2.375rem'],
        'd-md': ['2.25rem', '2.75rem'],
        'd-lg': ['3rem', '3.75rem'],
        'd-xl': ['3.75rem', '4.5rem'],
        'd-2xl': ['4.5rem', '5.5rem'],
      },
      fontWeight: {
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
      },
    },
  },
  plugins: [],
};
