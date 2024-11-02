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
                'sunset-lake': 'linear-gradient(0deg, #4a75d4, #d4a849)',
            },
            colors: {
                primary: "#000000",
                main: "#7CBDFF",
                notmain: "#4057EB"
            },
            fontFamily: {
                fra: "Fira"
            }
        },
    },
  plugins: [],
};
export default config;
