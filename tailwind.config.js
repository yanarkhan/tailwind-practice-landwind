/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        btnColor: "#7E3AF2",
        btnText: "#FFFFFF",
        borderColor: "#E5E7EB",
        darkGrey: "#111928",
        brightGrey: "#6B7280",
        secBrightGrey: "#F9FAFB",
      },
      boxShadow: {
        custom: "0 4px 8px #c084fc",
      },
      animation: {
        "loop-scroll": "loop-scroll 10s linear infinite",
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-200%)" },
        },
      },
    },
  },
  plugins: [],
};
