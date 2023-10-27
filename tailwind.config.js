/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{html,svelte}',
  ],
  plugins: [
    require('@tailwindcss/typography'),
  ],
}