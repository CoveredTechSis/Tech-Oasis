import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slidein: {
          from: {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        slidein: "slidein 1s ease 300ms",
      },
    },
      // colors: {
        
      //     slateBlue: '#9F7791',      // Primary Color
      //     electricOrange: '#FF6B35', // Accent Color
      //     coolGray: '#F5F5F5',       // Light Background Color
      //     charcoal: '#2D2D2D',       // Neutral Dark for Text
      //     mintGreen: '#88D9A4',      // Highlight Color
        
      // },
    },
  
  plugins: [],
};
export default config;
