/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    fontWeight: {
      light: "300",
      normal: "400",
      medium: "500",
      bold: "700",
    },
    extend: {
      colors: {
        "primary-dark": "#31c3bd",
        "primary-light": "#65e9e4",
        "secondary-dark": "#f2b137",
        "secondary-light": "#ffc860",
        "dark-0": "#1a2a33",
        "dark-1": "#1f3641",
        "shadow-0": "#10212A",
        "light-0": "#a8bfc9",
        "light-1": "#dbe8ed",
      },
      fontFamily: {
        heading: ["outfit", "Georgia", "serif"],
        body: ["outfit", "sans-serif"],
      },
      fontSize: {
        "heading-xs": ["0.875rem", "1.25rem"],
        "heading-sm": ["1rem", "1.5rem"],
        "heading-md": ["1.5rem", "2.25rem"],
        "heading-lg": ["1.75rem", "2.75rem"],
        "heading-xl": ["3rem", "4.5rem"],
        "heading-2xl": ["3.75rem", "5.75rem"],
        "body-xs": ["0.75rem", "1.125rem"],
        "body-sm": ["0.875rem", "1.25rem"],
        "body-md": ["1rem", "1.5rem"],
        "body-lg": ["1.125rem", "1.75rem"],
        "body-xl": ["1.5rem", "2.25rem"],
      },
    },
  },
  plugins: [],
};
