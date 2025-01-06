/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: {
        "primary-100": "#1A1A1A",
        "primary-200": "#333333",
        "primary-300": "#4D4D4D",
        "primary-400": "#666666",
        "primary-500": "#808080",
      },
    },
  },
  plugins: [],
}

