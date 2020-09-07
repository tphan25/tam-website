import React from "react";
import "./App.css";
import AppRouter from "./AppRouter";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";
import indigo from "@material-ui/core/colors/indigo";
import "typeface-roboto";

let theme = createMuiTheme({
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
    fontSize: 13
  }
});
theme = responsiveFontSizes(theme);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
