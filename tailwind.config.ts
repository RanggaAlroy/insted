import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          100: '#9f0'
        },
        black: {
          100: '#000000',
          200: '#020202'
        }
      },
      fontFamily: {
        atGambit: "var(--font-atGambit)",
        atHauss: 'var(--font-atHauss)',
      }
    },
  },
  plugins: [],
} satisfies Config;
