/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#3e9d24",
          light: "#e8f5e5",
          dark: "#2c7a17",
        },
        secondary: {
          DEFAULT: "#facc15",
          hover: "#fef08a",
        },
      },
    },
  },
  plugins: [],
};
