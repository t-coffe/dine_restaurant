/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./*.html",
    "./*.js"
  ],
  theme: {
    extend: {
      colors: {
        "beaver":"#9e7f66",
        "codGray":"#111111",
        "mirage":"#17192b",
        "ebonyClay":"#242b37",
        "shuttleGray":"#5c6779",
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
}

