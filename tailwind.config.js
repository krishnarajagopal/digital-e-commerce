/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
        extend: {
      colors: {
        primary: "#007DFC"
      }
    },

  },
  plugins: [
    require('@tailwindcss/forms')
  
  ],
};
