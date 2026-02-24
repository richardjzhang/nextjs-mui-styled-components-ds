"use client";

import { createTheme } from "@mui/material/styles";

const muiTheme = createTheme({
  palette: {
    primary: {
      main: "#FF0080",
      light: "#FF3399",
      dark: "#D9006C",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#2B3039",
      light: "#343A44",
      dark: "#1A1D23",
      contrastText: "#FFFFFF",
    },
    background: {
      default: "#F0F2F5",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#1A1D23",
      secondary: "#5C6370",
      disabled: "#9DA3AE",
    },
    divider: "#D4D8DE",
  },
  typography: {
    fontFamily: '"Inter", "Helvetica Neue", "Arial", sans-serif',
    h1: { fontWeight: 700 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 700 },
    h4: { fontWeight: 700 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
  },
  shape: {
    borderRadius: 4,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 600,
          borderRadius: 4,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
          color: "#1A1D23",
        },
      },
    },
  },
});

export default muiTheme;
