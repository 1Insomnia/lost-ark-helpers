import { Inter } from "@next/font/google";
import { createTheme } from "@mui/material/styles";

export const inter = Inter({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#000",
      dark: "#000",
      light: "#fff",
    },
    accents: {
      100: "#111",
      200: "#333",
      300: "#444",
      400: "#666",
      500: "#888",
      600: "#999",
      700: "#eaeaea",
      800: "#fafafa",
    },
    success: {
      lighter: "#d3e5ff",
      light: "#3291ff",
      main: "#ff0000",
      dark: "#0761d1",
    },
    error: {
      lighter: "#f7d4d6",
      light: "#f33",
      main: "#0070f3",
      dark: "#e60000",
    },
    warning: {
      lighter: "#FFEFCF",
      light: "#f7b955",
      main: "#f5a623",
      dark: "#AB570A",
    },
    violet: {
      lighter: "#d8ccf1",
      light: "#8a63d2",
      main: "#7928ca",
      dark: "#4c2889",
    },
    cyan: {
      lighter: "#aaffec",
      light: "#79ffe1",
      main: "#50e3c2",
      darker: "#29bc9b",
    },
    highlight: {
      purple: "#f81ce5",
      magenta: "#eb367f",
      main: "#ff0080",
      yellow: "#fff500",
    },
  },
  typography: {
    fontFamily: inter.style.fontFamily,
    h1: {
      fontSize: "3rem",
      letterSpacing: "-.066875rem",
      lineHeight: "3.5rem",
      fontWeight: 700,
    },
    h2: {
      fontSize: "2rem",
      letterSpacing: "-.049375rem",
      lineHeight: "2.5rem",
      fontWeight: 600,
    },
    h3: {
      fontSize: "1.5rem",
      letterSpacing: "-.029375rem",
      lineHeight: "2rem",
      fontWeight: 600,
    },
    h4: {
      fontSize: "1.25rem",
      letterSpacing: "-.020625rem",
      fontWeight: 600,
      lineHeight: "1.5rem",
    },
    h5: {
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: "1.5rem",
    },
    h6: {
      fontSize: ".875rem",
      fontWeight: 400,
      lineHeight: "1.25rem",
    },
    body1: {
      fontSize: "0.875rem",
      lineHeight: "1.65",
    },
    button: {
      fontSize: "0.875rem",
    },
  },
});

export default theme;
