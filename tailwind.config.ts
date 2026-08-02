import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/config/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        warm: "#FFF7ED",
        blush: "#FFF1EB",
        card: "#FFFFFF",
        ink: "#1F2933",
        muted: "#6B7280",
        brand: "#FF5A3D",
        brandHover: "#EA4A2A",
        softOrange: "#FFD8CA",
        line: "#F3E7DA"
      },
      boxShadow: {
        soft: "0 20px 70px rgba(31, 41, 51, 0.12)",
        phone: "0 28px 80px rgba(31, 41, 51, 0.18)"
      }
    }
  },
  plugins: []
};

export default config;
