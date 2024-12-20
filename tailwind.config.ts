import type { Config } from "tailwindcss";

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
        'primary' : '#1a185c',
        'secondary':'#402eb7',
      },
      fontFamily: {
        notosans: ["NotoSansKorean"],
      },

    },
  },
  images: {
    unoptimized: true,
  },
  plugins: [],
} satisfies Config;
