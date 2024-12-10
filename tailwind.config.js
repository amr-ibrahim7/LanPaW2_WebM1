/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./**/*.html", "./**/*.js"],
  theme: {
    extend: {
      colors: {
        mainColor: "#1F1F1F",
        secondaryColor: "#494949",
      },
    },
  },
  plugins: [],
};
