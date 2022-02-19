module.exports = {
  daisyui: {
    themes: false,
  },
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'cornflower-blue': {
          DEFAULT: '#7B61FF',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#FBFAFF',
          300: '#D0C7FF',
          400: '#A694FF',
          500: '#7B61FF',
          600: '#502EFF',
          700: '#2900FA',
          800: '#2100C7',
          900: '#180094',
        },
        emerald: {
          DEFAULT: '#44CC5A',
          50: '#D4F3D9',
          100: '#C4EFCB',
          200: '#A4E6AF',
          300: '#84DD93',
          400: '#64D576',
          500: '#44CC5A',
          600: '#2EAA42',
          700: '#227E31',
          800: '#165120',
          900: '#0A250F',
        },
        mercury: {
          DEFAULT: '#E8E8E8',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#FFFFFF',
          300: '#FFFFFF',
          400: '#FCFCFC',
          500: '#E8E8E8',
          600: '#CCCCCC',
          700: '#B0B0B0',
          800: '#949494',
          900: '#787878',
        },
        silver: {
          DEFAULT: '#C4C4C4',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#FFFFFF',
          300: '#EDEDED',
          400: '#D8D8D8',
          500: '#C4C4C4',
          600: '#A8A8A8',
          700: '#8C8C8C',
          800: '#707070',
          900: '#545454',
        },
        background_light: {
          DEFAULT: '#f7f7f7',
        },
      },
      fontFamily: {
        sans: 'Montserrat, sans-serif',
      },
    },
  },
  variants: {
    extend: {},
  },
  // eslint-disable-next-line global-require
  plugins: [require('daisyui')],
};
