/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "#D3D3D3",
        "secondary-color": "#004E71",
      },
    },
    fontFamily:{
      Roboto: ["Roboto, sans-serif"],
    },
    container:{
      padding: "2rem",
      center: true,
    },
    screens:{
      lg: "1170px",
      sm: "640px",
      md: "768px",
    }
  },
  plugins: [],
}

