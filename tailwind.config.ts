import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        introBackground: "url(/app/assets/background.svg)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        yellowDark: "#C47F17",
        yellow: "#DBAC2C",
        yellowLight: "#F1E9C9",
        purpleDark: "#4B2995",
        purple: "#8047F8",
        purpleLight: "#EBE5F9",
        baseTitle: "#272221",
        baseSubtitle: "#403937",
        baseText: "#574F4D",
        baseLabel: "#8D8686",
        baseHover: "#D7D5D5",
        baseButton: "#E6E5E5",
        baseInput: "#EDEDED",
        baseCard: "#F3F2F2",
        backgroundColor: "#FAFAFA",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
} satisfies Config;
