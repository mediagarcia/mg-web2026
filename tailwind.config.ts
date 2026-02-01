import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Brand Colors
        teal: {
          DEFAULT: "#3BB782",
          50: "#E8F7F1",
          100: "#D1EFE3",
          200: "#A3DFC7",
          300: "#75CFAB",
          400: "#47BF8F",
          500: "#3BB782",
          600: "#2F9268",
          700: "#236E4E",
          800: "#184934",
          900: "#0C251A",
        },
        // Accent Colors
        "neon-purple": {
          DEFAULT: "#EE82F0",
          50: "#FDF5FD",
          100: "#FBEBFB",
          200: "#F7D7F7",
          300: "#F3C3F3",
          400: "#F0AFEF",
          500: "#EE82F0",
          600: "#E94EEB",
          700: "#D41ED7",
          800: "#9F17A1",
          900: "#6A0F6B",
        },
        "orange-red": {
          DEFAULT: "#EC4724",
          50: "#FDF0ED",
          100: "#FBE1DB",
          200: "#F7C3B7",
          300: "#F3A593",
          400: "#EF876F",
          500: "#EC4724",
          600: "#C9351A",
          700: "#972814",
          800: "#651B0D",
          900: "#320D07",
        },
      },
      fontFamily: {
        sans: ["var(--font-roboto)", "system-ui", "sans-serif"],
        mono: ["var(--font-roboto-mono)", "monospace"],
      },
      fontSize: {
        "hero": ["clamp(3rem, 8vw, 6rem)", { lineHeight: "1.1", fontWeight: "900" }],
        "section": ["clamp(2rem, 5vw, 4rem)", { lineHeight: "1.2", fontWeight: "700" }],
      },
      spacing: {
        "section": "clamp(80px, 15vw, 200px)",
        "section-sm": "clamp(60px, 10vw, 120px)",
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "slide-up": "slideUp 0.8s ease-out forwards",
        "slide-in-left": "slideInLeft 0.6s ease-out forwards",
        "gradient-shift": "gradientShift 8s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
