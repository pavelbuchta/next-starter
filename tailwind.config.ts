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
        foreground: "hsl(var(--foreground-hsl))",
        "foreground-secondary": "hsl(var(--foreground-secondary-hsl))",
        "foreground-teritary": "hsl(var(--foreground-teritary-hsl))",
        background: "hsl(var(--background-hsl))",
        "background-secondary": "hsl(var(--background-secondary-hsl))",
        "background-teritary": "hsl(var(--background-teritary-hsl))",

        border: "hsla(var(--border-hsla))",
        // ascend: "hsl(var(--ascend-hsl))", // Blue for FAQs
        ascend: "hsl(var(--foreground-hsl))",
      },
    },
  },
  plugins: [],
};
export default config;
