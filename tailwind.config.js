/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary-soft-red':'hsl(10, 79%, 65%)',
        'secondary-cyan':'hsl(186, 34%, 60%)',
        'dark-brown':'hsl(25, 47%, 15%)',
        'medium-brown':'brown: hsl(28, 10%, 53%)',
        'cream':'hsl(27, 66%, 92%)',
        'vary-pale-orange':'hsl(33, 100%, 98%)'

      },
      fontFamily:{
        'custom-sans':['DM Sans', 'sans-serif']
      },
      fontSize:{
        base:'18px'
      }
    },
  },
  plugins: [],
}