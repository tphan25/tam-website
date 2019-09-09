import React from "react";
import classes from "./NavigationBar.module.css";
import AppBar from "@material-ui/core/AppBar";
import { Toolbar, Typography, Box } from "@material-ui/core";
import { Link } from "react-router-dom";

export default function NavigationBar() {
  return (
    <AppBar className={classes.appBar} position="static" color="secondary">
      <Toolbar className={classes.toolbar}>
        <Box className={classes.left}>
          <Link className={classes.nameButton} to="/">
            <Typography className={classes.routeText} variant="h3">
              Tam Phan
            </Typography>
          </Link>
        </Box>
        <Box className={classes.right}>
          <Link className={classes.routeButton} to="/about">
            <Typography className={classes.routeText} variant="h6">
              About Me
            </Typography>
          </Link>
          <Link className={classes.routeButton} to="/experience">
            <Typography className={classes.routeText} variant="h6">
              Experience
            </Typography>
          </Link>
          <Link className={classes.routeButton} to="/contact">
            <Typography className={classes.routeText} variant="h6">
              Contact
            </Typography>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
