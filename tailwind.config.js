module.exports = {
  prefix: "",
  purge: {
    content: ["./src/**/*.{html,ts}"],
  },
  darkMode: "class", // or 'media' or 'class'
  variants: {
    extend: {
      backgroundColor: ["active"],
      innerShadow: ["active"],
    },
  },
  plugins: [],
};
