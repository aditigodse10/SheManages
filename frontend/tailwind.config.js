/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      "custom-gradient": "linear-gradient(180deg, #fde1ff, #e1ffea22 60%)",
    },
  },
  plugins: [require("daisyui")],
};
