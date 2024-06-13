/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    container: {
      screens: {
        sm: "600px",
        md: "728px",
        lg: "900px",
        xl: "1200px",
      },
    },
  },
  plugins: [],
};
