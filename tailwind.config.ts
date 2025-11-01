import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1rem", sm: "1.5rem", lg: "2rem" },
      screens: { sm: "640px", md: "768px", lg: "1120px", xl: "1280px" }
    },
    extend: {
      colors: {
        ink: { 900: "#0c0915", 800: "#121022", 700: "#181532" },
        primary: { 
          300: "#1E35C4", 
          400: "#1423A0", 
          500: "#0A1A7A", 
          600: "#040C5B",
          700: "#03094A"
        },
        accent: { 
          400: "#2563EB",
          500: "#1A2DB8", 
          600: "#1423A0" 
        }
      },
      boxShadow: { card: "0 8px 36px rgba(0,0,0,0.45)" },
      borderRadius: { "3xl": "1.5rem" },
      backgroundImage: {
        hero: "radial-gradient(1200px 600px at 20% 0%, rgba(26, 45, 184, .18), transparent 55%), radial-gradient(900px 500px at 80% 30%, rgba(10, 26, 122, .15), transparent 55%)"
      }
    }
  },
  plugins: []
};
export default config;
