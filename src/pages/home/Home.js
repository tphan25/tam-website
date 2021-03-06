import React, { Component, Fragment } from "react";
import { Typography, Box } from "@material-ui/core";
import classes from "./Home.module.css";
import { Link } from "react-router-dom";
import me from "../../images/me.png";
import Footer from "../../components/footer/Footer";

export default class Home extends Component {
  render() {
    return (
      <Fragment>
        <Box className={classes.container}>
          <Typography className={classes.me} variant="h4">
            <a href="https://tphan25.github.io" className={classes.resume}>
              Here's a copy of my resume if you're hiring!
            </a>
          </Typography>
          <Typography className={classes.text} variant="h4">
            Hello! I'm Tam Phan, a computer science student in my second year of the Accelerated MS CS program at Virginia Tech.
            Here is a personal portfolio site for you to learn more about me if you are interested! You can
            learn about{" "}
            <Box display="inline" className={classes.links}>
              <Link to="/about" className={classes.me}>
                <Typography
                  className={[classes.text, classes.links].join(" ")}
                  variant="h4"
                >
                  {"me, "}
                </Typography>
              </Link>
              <Link to="/projects" className={classes.projects}>
                <Typography
                  className={[classes.text, classes.links].join(" ")}
                  variant="h4"
                >
                  {"my projects, "}
                </Typography>
              </Link>
              <Link to="/contact" className={classes.contact}>
                <Typography
                  className={[classes.text, classes.links].join(" ")}
                  variant="h4"
                >
                  {"or contact me! "}
                </Typography>
              </Link>
            </Box>
          </Typography>
          <Box display="flex" justifyContent="center" alignItems="center">
            <img src={me} alt="Myself" style={{ width: "40%" }} />
          </Box>
        </Box>
        <Footer />
      </Fragment>
    );
  }
}
