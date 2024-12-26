/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      colors: {
        myBg: "#f6f5f4",
        myWhite: "#fffffe",
        myBlack: "#242424",
      },
      fontFamily: {
        otterco: ['OttercoDisplay', 'sans-serif'],
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateY(-30%)', rotate: "-6deg" },
          '50%': { transform: 'translateY(30%)', rotate: "-6deg" },
          '100%': { transform: 'translateY(-30%)', rotate: "-6deg" },
        },
      },
      animation: {
        slideIn: 'slideIn 6s infinite',

      },
    },
  },
  plugins: [],
}

