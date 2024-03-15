/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./container/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)"],
        rubik: ["var(--font-rubik)"],
        federo: ["var(--font-federo)"],
        public: ["var(--font-public)"],
        merienda: ["var(--font-merienda)"],
        condensed: ["var(--font-robotoCondensed)"],
        notoSans: ["var(--font-notoSans)"],
      },
      colors: {
        primary: "#4169E1",
        secondary: "#000000",
        heading: "#1f1f1f",
        subheading: "#9e9e9e",
        gray: "#5A5A5A",
        background: "#FFFFFF",
        lightwhite: "#F5F5F5",
        liteblack: "4D4D4D",
        lightGray: "#AFAFAF",
        watermark: "#EBEBEB",
        bghover: "#19181D",
        bordercolor: "#DBE0E5",
      },
      screens: {"2xl": "1636px"},
    },
  },
  plugins: [],
};
