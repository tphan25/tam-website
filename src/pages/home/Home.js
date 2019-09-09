import React, { Component } from "react";
import { Typography, Box } from "@material-ui/core";
import classes from "./Home.module.css";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <Box className={classes.container}>
        <Typography className={classes.text} variant="h2">
          Hello! I'm Tam Phan, a computer science student at Virginia Tech
          (currently finishing up BS, omw to MS). Here is a personal portfolio
          site for you to learn more about me if you are interested! You can
          learn about{" "}
          <Box display="inline" className={classes.links}>
            <Link to="/about" className={classes.me}>
              <Typography
                className={[classes.text, classes.links].join(" ")}
                variant="h2"
              >
                {"me, "}
              </Typography>
            </Link>
            <Link to="/projects" className={classes.projects}>
              <Typography
                className={[classes.text, classes.links].join(" ")}
                variant="h2"
              >
                {"my projects, "}
              </Typography>
            </Link>
            <Link to="/contact" className={classes.contact}>
              <Typography
                className={[classes.text, classes.links].join(" ")}
                variant="h2"
              >
                {"or contact me! "}
              </Typography>
            </Link>
          </Box>
        </Typography>
      </Box>
    );
  }
}
