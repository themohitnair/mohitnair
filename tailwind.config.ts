import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                'notmain': 'linear-gradient(75deg, #4166f5, #0073cf, #3a506b)',
            },
            fontFamily: {
                fra: "Fira"
            }
        },
    },
  plugins: [],
};
export default config;
