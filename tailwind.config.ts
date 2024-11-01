import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#000000"
      },
      fontFamily: {
        gst: "Geist",
        rbt: "Roboto",
        fra: "Fira"
      }
    },
  },
  plugins: [],
};
export default config;
