/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateRows: {
        0: "0fr",
        1: "1fr",
      },
    },
  },
  plugins: [],
};
