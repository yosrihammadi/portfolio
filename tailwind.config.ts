import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["inter", "sans-serif"],
      },
      colors: {
        dark: "#0f172a",
        "dark-100": "#1e2435",
        "green-100": "#5eead4",
        "green-200": "#134e4a",
        blue: "#3b82f680",
        "gray-100": "#e5e7eb",
        "gray-200": "#e2e8f0",
        "gray-300": "#94a3b8",
      },
    },
  },
  plugins: [],
};
export default config;
