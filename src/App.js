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
