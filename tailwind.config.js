/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-dark': '#0f1116',
        'text-light': '#eeeeee',
        'accent-start': '#667eea',
        'accent-end': '#764ba2',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}