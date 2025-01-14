/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "brookies-primary": "#5f2f32",
        "brookies-secondary": "#e2b5c2",
      },
      animation: {
        marquee: "marquee 30s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(134%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },

  plugins: [require("daisyui")],
};
