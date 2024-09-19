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
        background: "var(--background)",
        "background-secondary": "var(--background-secondary)",
        foreground: "var(--foreground)",
        "foreground-secondary": "var(--foreground-secondary)",
        "accent-pink": "var(--accent-pink)",
      },
      fontFamily: {
        supra: ['var(--font-supra)'],
      },
      height: {
        112: '28rem',
      },
      keyframes: {
        'spin-anticlockwise': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' },
        },
      },
      animation: {
        'spin-anticlockwise': 'spin-anticlockwise 10s linear infinite',
      },
    },
  },
  plugins: [],
};
export default config;
