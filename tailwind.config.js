/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"], // Add your custom font here
      },
      colors: {
        para: "#52525d",
        heading: "#30303c",
        darkGreen: "#8c8265",
        orange: "#ec7c47",
        title: "#ff5b2e",
        purple: "#838ae0",
        btnPrimary: "#ff5b2e",
        cream: "#fbf1ef",
      },
    },
  },
  plugins: [],
};
