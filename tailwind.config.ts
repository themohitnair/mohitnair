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
                'red-hot-metallic': 'linear-gradient(to right, #c53030, #ed8936, #faf089)',
                'ocean-gradient': 'linear-gradient(to right, #00c6ff, #0072ff)',
                'deep-ocean-gradient': 'linear-gradient(to right, #004e92, #000428)',
                'sunset-lake': 'linear-gradient(0deg, #4a75d4, #d4a849)',
            },
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
