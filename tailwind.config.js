/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ['"IBM Plex Sans"', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      container: {
        center: true,
      },
      fontSize: {
        xs: "8px",
        sm: "16px",
        md: "18px",
        "2md": "24px",
        "3md": "32px",
        lg: "40px",
        xl: "48px",
        "2xl": "64px",
      },
      spacing: {
        xs: "8px",
        sm: "12px",
        md: "16px",
        lg: "32px",
        xl: "48px",
        "2xl": "64px",
      },
      borderWidth: {
        DEFAULT: "1px",
        0: "0",
        1.5: "1.5px",
        2: "2px",
        3: "3px",
        4: "4px",
        6: "6px",
        8: "8px",
      },
      colors: {
        primary: "#FF6C63",
        purple: "#B86ADF",
        yellow: "#FFB147",
        primaryText: "#141313",
        secondaryText: "#141313CC",
      },
      padding: {
        4.5: "18px",
        7.5: "30px",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, theme, addUtilities }) {
      const linearGradient =
        "linear-gradient(270deg, #FFB147 5.74%, #FF6C63 50.64%, #B86ADF 92.05%)";

      addUtilities({
        ".bg-gradient": {
          background: linearGradient,
        },
        ".-webkit-input": {
          "-webkit-background-clip": "text",
          "-webkit-text-fill-color": "white",
        },
      });

      addBase({
        h1: {
          fontSize: theme("spacing.xl"),
          fontWeight: 700,
          color: theme("colors.primaryText"),
          lineHeight: theme("spacing.xl"),
          fontStyle: "normal",
        },
        h2: {
          fontSize: theme("spacing.lg"),
          fontWeight: 700,
          color: theme("colors.primaryText"),
          lineHeight: theme("spacing.lg"),
          fontStyle: "normal",
        },
        h3: { fontSize: theme("spacing.md") },
      });
    }),
  ],
  autoprefixer: {},
};
