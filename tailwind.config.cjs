/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      backgroundImage: {
        desktop : "url('../images/bg-main-desktop.png')",
        mobile : "url('../images/bg-main-mobile.png')",
        frontCard: "url('../images/bg-card-front.png')",
        backCard: "url('../images/bg-card-back.png')",
      },
    },
    colors: {
      linearGradient: "hsl(249, 99%, 64%) to hsl(278, 94%, 30%)",
      red: "hsl(0, 100%, 66%)",
      lightGrayishViolet: "hsl(270, 3%, 87%)",
      darkGrayishViolet: "hsl(279, 6%, 55%)",
      veryDarkViolet: "hsl(278, 68%, 11%)",
      white: "hsl(0, 0%, 100%)",
    },
  },
  plugins: [],
};
