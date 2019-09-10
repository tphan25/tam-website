import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home/Home";
import Experience from "./pages/experience/Experience";
import NavigationBar from "./components/navigation-bar/NavigationBar";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import { Box } from "@material-ui/core";

function AppRouter() {
  return (
    <Router id="container">
      <NavigationBar />
      <Switch>
        <Box id="appContainer" className="appContainer">
          <Route path="/" exact component={Home} />
          <Route path="/experience" component={Experience} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Box>
      </Switch>
    </Router>
  );
}

export default AppRouter;
