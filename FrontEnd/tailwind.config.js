/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,mdx}',
    './components/**/*.{js,jsx,mdx}',
    './app/**/*.{js,jsx,mdx}',
    // Remove the uppercase versions as they don't match your actual folder structure
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}