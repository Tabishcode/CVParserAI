import type { Config } from "tailwindcss";
import daisyui from 'daisyui';

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: '#00CFCF',
      },
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
      },
      
    },
  },
  plugins: [
    daisyui,
  ],
} satisfies Config;