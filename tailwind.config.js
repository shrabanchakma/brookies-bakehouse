/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "brookies-primary": "#5f2f32", // Custom Blue color
        "brookies-secondary": "#e2b5c2", // Custom Green color
      },
    },
  },
  plugins: [require("daisyui")],
};
