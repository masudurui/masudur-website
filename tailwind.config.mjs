/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: [
        '"Inter"',
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        "Helvetica",
        "Arial",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        "sans-serif",
      ],
      mono: [
        "ui-monospace",
        "SFMono-Regular",
        '"SF Mono"',
        "Menlo",
        "Consolas",
        '"Liberation Mono"',
        "monospace",
      ],
    },
    extend: {
      colors: {
        surface: {
          DEFAULT: "#ffffff",
          subtle: "#fafafa",
        },
        ink: {
          DEFAULT: "#111111",
          muted: "#767676",
          faint: "#e6e6e6",
          badge: "#444444",
        },
        focus: "#0b57d0",
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1.5" }],
        sm: ["0.875rem", { lineHeight: "1.45" }],
        base: ["1rem", { lineHeight: "1.65" }],
        lg: ["1.25rem", { lineHeight: "1.4" }],
        xl: ["1.5rem", { lineHeight: "1.3" }],
      },
      letterSpacing: {
        tight: "-0.02em",
        normal: "-0.005em",
      },
      maxWidth: {
        content: "34rem",
      },
      spacing: {
        18: "4.5rem",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.32, 0.72, 0, 1)",
      },
    },
  },
  plugins: [],
};
