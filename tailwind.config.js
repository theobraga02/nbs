/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#FFFF00",
          foreground: "#000000",
        },
        secondary: {
          DEFAULT: "#FFFFFF",
          foreground: "#1A1A1A",
        },
        accent: {
          DEFAULT: "#FFFF00",
          foreground: "#000000",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        // Custom NBS Colors
        nbs: {
          charcoal: "#1A1A1A",
          electric: "#FFFF00",
          white: "#FFFFFF",
        }
      },
      fontFamily: {
        display: ['"Inter"', 'sans-serif'], // Fallback, will be updated to a bolder font
        body: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
