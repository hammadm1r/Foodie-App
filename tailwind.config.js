/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primery: "#ff7b0e",
        secondry: '#E85C0D',
      },
      container:{
        center: true,
        padding : "15px",
      }
    },
  },
  plugins: [],
}
