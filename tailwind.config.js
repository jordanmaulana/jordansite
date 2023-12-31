/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/body_content.js"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        background: "#030E21",
        white: "#ffffff",
        grey: "#868490",

        // ...
      },
    },
  },
  plugins: [],
};
