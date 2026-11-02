import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'tda-black': '#0B0B0C',
        'tda-gold': '#B8975A',
        'tda-ivory': '#F3EDE0',
        'tda-charcoal': '#1A1A1C',
      },
      fontFamily: {
        'serif': ['var(--font-serif)'],
        'sans': ['var(--font-sans)'],
      },
    },
  },
  plugins: [],
};
export default config;
