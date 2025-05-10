/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        'light-blue': '#e6f0ff',
        'sidebar-purple': '#6366f1',
        'text-primary': '#333333',
        'text-secondary': '#666666',
        'border-light': '#e5e7eb',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
