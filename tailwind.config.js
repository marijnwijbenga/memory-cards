require('dotenv').config();
const enablePurge = process.env.NODE_ENV || false;

module.exports = {
  prefix: '',
  purge: {
    enabled: enablePurge,
    content: ['./src/**/*.{html,ts,scss}'],
  },
  darkMode: 'class', // or 'media' or 'class'
  variants: {
    extend: {
      backgroundColor: ['active'],
      innerShadow: ['active'],
    },
  },
  plugins: [],
};
