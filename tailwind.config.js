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
        'hero': "url('https://images.unsplash.com/photo-1458682625221-3a45f8a844c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2167&q=80')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
