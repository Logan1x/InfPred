module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      // colors: {
      //   "sweet-pink": "#ffa3ab",
      // },
      maxWidth: {
        "3/4": "75%",
        "39/50": "79%",
      },
      height: {
        page: "80vh;",
      },
      minHeight: {
        page: "80vh;",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
