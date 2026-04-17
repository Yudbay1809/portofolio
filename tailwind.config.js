/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: "var(--bg-obsidian)",
        onyx: "var(--bg-onyx)",
        cyber: {
          DEFAULT: "var(--cyber-cyan)",
          dim: "rgba(0, 255, 210, 0.1)",
        },
        solar: {
          DEFAULT: "var(--solar-amber)",
          dim: "rgba(251, 182, 56, 0.1)",
        },
        primary: "var(--text-primary)",
        secondary: "var(--text-secondary)",
        "glass-border": "var(--glass-border)",
      },
      fontFamily: {
        serif: ["Newsreader", "serif"],
        sans: ["Inter", "sans-serif"],
      },
      backdropBlur: {
        xs: "2px",
      },
      animation: {
        "pulse-slow": "pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
}