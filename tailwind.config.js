/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/app/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#0B1220",
          cyan: "#00CFFF",
          white: "#FFFFFF",
        },
      },
    },
  },
  plugins: [],
};
