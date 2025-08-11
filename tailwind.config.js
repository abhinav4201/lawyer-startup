/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        handwritten: ['"Dancing Script"', "cursive"],
      },
      colors: {
        primary: "#007bff",
        "gray-light": "#f1f5f9",
        "gray-dark": "#1f2937",
        dark: {
          DEFAULT: "#111827",
        },
        body: {
          DEFAULT: "#000",
          color: {
            DEFAULT: "#000",
            50: "#e5e7eb",
            20: "#f3f4f6",
          },
        },
        "section-hero": "#e6f0fa",
        "section-features": "#f5f5f5",
        "section-video": "#e8f5e9",
        "section-brands": "#1e232e",
        "section-about-one": "#f0e6fa",
        "section-about-two": "#e6faf0",
        "section-testimonials": "#fee6e6",
        "section-contact": "#e6fafa",
      },
      boxShadow: {
        sticky: "0 1px 3px rgba(0, 0, 0, 0.1)",
        "sticky-dark": "0 1px 3px rgba(0, 0, 0, 0.5)",
      },
      backdropBlur: {
        xs: "2px",
      },
      borderRadius: {
        xs: "4px",
      },
    },
  },
  plugins: [],
};
