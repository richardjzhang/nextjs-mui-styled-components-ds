const scTheme = {
  colors: {
    // x15ventures brand palette
    primary: "#FF0080",        // Hot pink CTA
    primaryLight: "#FF3399",
    primaryDark: "#D9006C",
    secondary: "#2B3039",      // Dark charcoal
    secondaryLight: "#343A44",
    secondaryDark: "#1A1D23",
    success: "#2e7d32",
    successLight: "#4caf50",
    warning: "#ed6c02",
    warningLight: "#ff9800",
    error: "#d32f2f",
    errorLight: "#ef5350",
    info: "#7B8FA1",           // Slate blue accent
    infoLight: "#99ABB8",
    background: "#F0F2F5",     // Light gray
    surface: "#FFFFFF",
    surfaceHover: "#E8EAEE",
    border: "#D4D8DE",
    borderLight: "#E8EAEE",
    text: "#1A1D23",           // Near-black
    textSecondary: "#5C6370",
    textDisabled: "#9DA3AE",
    textOnDark: "#7B8FA1",     // Muted text on dark bg
    white: "#FFFFFF",
    dark: "#2B3039",           // Dark section bg
    darkLight: "#343A44",      // Slightly lighter dark
    darkLighter: "#3E444E",    // Card/hover on dark
  },
  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    xxl: "48px",
  },
  fontSize: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    xxl: "1.5rem",
    display: "2rem",
    hero: "3.5rem",
  },
  fontWeight: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  borderRadius: "4px",
  borderRadiusSm: "2px",
  borderRadiusLg: "8px",
  borderRadiusFull: "9999px",
  shadows: {
    sm: "0 1px 2px rgba(0, 0, 0, 0.05)",
    md: "0 4px 6px rgba(0, 0, 0, 0.07)",
    lg: "0 10px 15px rgba(0, 0, 0, 0.1)",
    xl: "0 20px 25px rgba(0, 0, 0, 0.15)",
  },
  transition: {
    fast: "150ms ease",
    normal: "250ms ease",
    slow: "350ms ease",
  },
};

export type SCTheme = typeof scTheme;
export default scTheme;
