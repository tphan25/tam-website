import React from "react";
import "./App.css";
import AppRouter from "./AppRouter";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core";
import indigo from "@material-ui/core/colors/indigo";
import "typeface-roboto";

const theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: {
      main: "#1a237e",
      light: "#1a237e",
      dark: "#1a237e",
      contrastText: "#1a237e"
    },
    white: {
      main: "#ffffff"
    }
  },
  typography: {
    h1: {
      "@media (max-width:960px)": {
        fontSize: "3rem"
      },
      "@media (min-width:960px)": {
        fontSize: "6rem"
      }
    },
    h2: {
      "@media (max-width:960px)": {
        fontSize: "2rem"
      },
      "@media (min-width:960px)": {
        fontSize: "4rem"
      }
    },
    h3: {
      "@media (max-width:960px)": {
        fontSize: "1.5rem"
      },
      "@media (min-width:960px)": {
        fontSize: "3rem"
      }
    },
    h4: {
      "@media (max-width:960px)": {
        fontSize: "1rem"
      },
      "@media (min-width:960px)": {
        fontSize: "2rem"
      }
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
