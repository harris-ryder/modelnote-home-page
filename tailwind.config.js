/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'level1': '0 4px 14px 0 #00000044',
        'level2': '0 4px 14px 0 #00000020'
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        poppins: ["Poppins", "sans-serif"]
      },
    },
  },
  plugins: [],
}
