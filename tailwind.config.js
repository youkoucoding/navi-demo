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
      colors: {
        'my-blue': '#ced7e1',
        'my-bg': '#ebe6d6',
        'my-card': '#ede0df',
        'my-white': '#6ea695',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
