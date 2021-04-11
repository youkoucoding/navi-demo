module.exports = {
  // mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'japan-maru': ['Kosugi Maru'],
        'japan-mincho': ['Shippori Mincho'],
        'china': ['Noto Serif SC'],
        'nunito': ['Nunito'],
        'mont': ['Montserrat'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
