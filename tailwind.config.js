/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#050109",
        card: "#0c0816",
        accent: "#ff2b88",
        "accent-soft": "#c77dff",
        "accent-alt": "#8a2be2",
        "text-main": "#f5f5f5",
        "text-muted": "#b3b3c6",
      },
      borderRadius: {
        "xl-3": "24px",
      },
      boxShadow: {
        "soft-card": "0 20px 40px rgba(0,0,0,0.6)",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        orbit: {
          "0%": { transform: "rotate(0deg) translateX(40px)" },
          "100%": { transform: "rotate(360deg) translateX(40px)" },
        },
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        orbit: "orbit 14s linear infinite",
        "orbit-slow": "orbit 20s linear infinite",
      },
    },
  },
  plugins: [],
};
