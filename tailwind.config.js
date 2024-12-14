
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html", // Includes all HTML files in the root directory
    "./src/**/*.{html,js}", // Optionally include files in the `src` folder
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Replace default sans font
        rounded: ['Nunito', 'sans-serif'], // Add a new custom font
      },
    },
  },
  plugins: [],
};
