/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xm': '576px',
      'sm': '768px',
      'md': '992px',
      'lg': '1200px',
    },
    extend: {
      colors: {
        primary:{
          "10":"#FFF"
        },
        btn: {
          "10":"423535"
        },
        bgColor: {
          "10":"#050505",
          "20":"#0A0A0A"
        },
      }, 
      fontSize: {
        "secTitle":"36px",
        "subTitle":"24px",
        "banTitle":"48px",
      },
      fontWeight: {
        "secTitle":"700",
        "subTitle":"600",
        "banTitle":"800",
      },
      lineHeight: {
        "secTitle":"1.2",
        "subTitle":"1.4",
        "banTitle":"1.1",
      },
      
       fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        display: ['Oswald'],
        body: ['Open Sans'], 
        }
    },
  },
  plugins: [],
}

