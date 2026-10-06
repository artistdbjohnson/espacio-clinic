import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        heading: "var(--heading)",
        kicker: "var(--kicker)",
        muted: "var(--muted)",
        olive: "#6E7455",
        "olive-deep": "#555A41",
        peach: "#F2AF95",
        blush: "#F8D6C9",
        clay: "#B58370",
        cocoa: "#79574A",
        mist: "#F0EFED",
        sage: "#A9AE8E",
        field: "#1F2119",
        ink: "#3C2C25",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Helvetica Neue", "Arial", "sans-serif"],
      },
      maxWidth: {
        page: "1440px",
      },
      transitionTimingFunction: {
        butter: "cubic-bezier(.22,1,.36,1)",
      },
    },
  },
  plugins: [],
};

export default config;
