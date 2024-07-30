// tailwind.config.js
module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        'custom': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      },
      backdropBlur: {
        'custom': '6.5px',
      },
      backgroundColor: {
        'custom-rgba': 'rgba(255, 255, 255, 0.15)',
      },
      borderColor: {
        'custom-rgba': 'rgba(255, 255, 255, 0.18)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
