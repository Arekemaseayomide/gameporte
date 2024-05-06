/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        md: "3rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6.25rem",
      },
    },
    screens: {
      xxs: "300px",
      xs: "475px",
      sm: "639px",
      md: "770px",
      td: "992px" /*tabdisplay */,
      lg: "1025px",
      xl: "1279px",
      "2xl": "1439px",
      "3xl": "1919px",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      ffontFamily: {
        'modelica': ['Bw Modelica', 'sans-serif'],
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
