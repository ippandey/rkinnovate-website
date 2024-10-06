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
        // Custom colors based on your provided palette
        primary: "#032b44ff",
        charcoal: "#203c4dff",
        charcoal2: "#2e4551ff",
        charcoal3: "#3c4d55ff",
        davysGray: "#595e5eff",
        dimGray: "#756f66ff",
        para: "#52525d",
        heading: "#30303c",
        darkGreen: "#8c8265",
        purple: "#838ae0",
        lightGrey: "#756f6633",
        grey: "#f7f7f7",
        // You can also add gradient colors if you need them
        gradientTop: "linear-gradient(0deg, #032b44ff, #203c4dff, #2e4551ff, #3c4d55ff, #595e5eff, #756f66ff)",
        gradientRight: "linear-gradient(90deg, #032b44ff, #203c4dff, #2e4551ff, #3c4d55ff, #595e5eff, #756f66ff)",
        gradientBottom: "linear-gradient(180deg, #032b44ff, #203c4dff, #2e4551ff, #3c4d55ff, #595e5eff, #756f66ff)",
        gradientLeft: "linear-gradient(270deg, #032b44ff, #203c4dff, #2e4551ff, #3c4d55ff, #595e5eff, #756f66ff)",
        gradientTopRight: "linear-gradient(45deg, #032b44ff, #203c4dff, #2e4551ff, #3c4d55ff, #595e5eff, #756f66ff)",
        gradientBottomRight: "linear-gradient(135deg, #032b44ff, #203c4dff, #2e4551ff, #3c4d55ff, #595e5eff, #756f66ff)",
        gradientTopLeft: "linear-gradient(225deg, #032b44ff, #203c4dff, #2e4551ff, #3c4d55ff, #595e5eff, #756f66ff)",
        gradientBottomLeft: "linear-gradient(315deg, #032b44ff, #203c4dff, #2e4551ff, #3c4d55ff, #595e5eff, #756f66ff)",
        gradientRadial: "radial-gradient(#032b44ff, #203c4dff, #2e4551ff, #3c4d55ff, #595e5eff, #756f66ff)",
      },
    },
  },
  plugins: [],
};
