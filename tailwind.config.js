module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    // screens: {
    //   sm: "640px",
    //   md: "768px",
    //   lg: "1024px",
    //   xl: "1280px",
    //   "2xl": "1536px",
    // },
    fontSize: {
      "2xs": ".65rem",
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "2xxl": "1.675rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
    },
    extend: {
      colors: {
        primary: {
          // 50: '',
          // 100: '',
          200: "#95b5cf",
          300: "#8fb3cf",
          // 400: '',
          500: "#71a2c7",
          // 600: '',
          // 700: '',
          // 800: '',
          // 900: '',
        },
        secondary: "#e6cb81",
      },
    },

    fontFamily: {
      sans: ["Cormorant"],
    },
  },
  plugins: [],
};
