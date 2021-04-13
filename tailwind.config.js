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
      backgroundImage: theme => ({
        'hero': "url('https://images.unsplash.com/photo-1616020193910-5efb86d166e9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
