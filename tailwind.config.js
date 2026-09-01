/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "#050505",
          secondary: "#0D0D0D",
          surface: "#141414",
        },
        text: {
          primary: "#FFFFFF",
          secondary: "#A1A1A1",
        },
        accent: {
          red: "#E51B23",
          "red-hover": "#C4131A",
          "red-glow": "rgba(229, 27, 35, 0.25)",
        },
        border: {
          tech: "rgba(255, 255, 255, 0.12)",
          "tech-light": "rgba(255, 255, 255, 0.20)",
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Space Grotesk', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      maxWidth: {
        'container': '1280px',
      },
      boxShadow: {
        'red-glow': '0 4px 20px rgba(229, 27, 35, 0.25)',
        'red-glow-lg': '0 8px 30px rgba(229, 27, 35, 0.35)',
      }
    },
  },
  plugins: [],
}
