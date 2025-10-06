import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1rem", lg: "2rem" },
      screens: { lg: "1120px" }
    },
    extend: {
      colors: {
        ink: { 900: "#0c0915", 800: "#121022", 700: "#181532" },
        primary: { 400: "#8A33FF", 500: "#7C2DFF" },
        accent: { 500: "#5A63FF", 600: "#4A49FF" }
      },
      boxShadow: { card: "0 8px 36px rgba(0,0,0,0.45)" },
      borderRadius: { "3xl": "1.5rem" },
      backgroundImage: {
        hero: "radial-gradient(1200px 600px at 20% 0%, rgba(122, 58, 255, .18), transparent 55%), radial-gradient(900px 500px at 80% 30%, rgba(90, 99, 255, .15), transparent 55%)"
      }
    }
  },
  plugins: []
};
export default config;
