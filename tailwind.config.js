/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "custom-light": "#f0f0f0",
        "custom-dark": "#202020",
      },
      width: {
        "sm-screen": "calc(100% - 1rem)", // Adjust this value as needed
      },
    },
  },
  variants: {
    extend: {
      display: ["responsive"],
    },
  },
  plugins: [],
};
