/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 45s linear infinite',
      },
      colors: {
        primary: "#161616",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        rubik: ["Rubik", "sans-serif"],
        inconsolata: ["Inconsolata", "monospace"],
        roboto: ["Roboto", "sans-serif"],
      },
      screens: {
        se: "300px",
        xxs: "366px",
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px",
      },
    },
  },
  plugins: [],
}

