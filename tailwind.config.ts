import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        porcelain: "#fbfaf7",
        ivory: "#f4efe6",
        oat: "#d8cdbb",
        linen: "#eee5d8",
        clay: "#9a8772",
        ink: "#292521",
        olive: "#6f735f",
        sage: "#b8c0aa",
        blush: "#c8a8a0",
        rose: "#c49a96"
      },
      fontFamily: {
        sans: ["var(--font-heebo)", "Heebo", "Assistant", "Arial", "sans-serif"],
        serif: ["Georgia", "Times New Roman", "serif"]
      },
      boxShadow: {
        soft: "0 20px 70px rgba(41, 37, 33, 0.08)",
        card: "0 2px 20px rgba(41, 37, 33, 0.055)",
        line: "0 1px 0 rgba(41, 37, 33, 0.08)"
      },
      letterSpacing: {
        widest: "0.12em"
      }
    }
  },
  plugins: []
};

export default config;
