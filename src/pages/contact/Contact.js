import React, { Component, Fragment } from "react";
import { Typography, Box } from "@material-ui/core";
import classes from "./Contact.module.css";
import ScrollToTop from "../../components/scroll-to-top/ScrollToTop";
import Footer from "../../components/footer/Footer";

export default class Contact extends Component {
  render() {
    return (
      <Fragment>
        <Box className={classes.container}>
          <ScrollToTop />
          <Typography className={classes.header} variant="h2">
            Contact Me
          </Typography>
          <Typography className={classes.linkText} variant="h3">
            <a href="https://tphan25.github.io" className={classes.resume}>
              Here's a copy of my resume.
            </a>
          </Typography>
          <Typography className={classes.text} variant="h3">
            Thanks for checking out my site! I'd love to hear from you
            personally. You can contact me by{" "}
            <Box display="inline">
              <Typography className={classes.linkText} variant="h3">
                <a href="mailto:tphan093@gmail.com" className={classes.me}>
                  email
                </a>
              </Typography>
            </Box>{" "}
            or{" "}
            <Box display="inline">
              <Typography className={classes.linkText} variant="h3">
                <a
                  href="https://www.linkedin.com/in/tam-phan-txp/"
                  className={classes.me}
                >
                  LinkedIn
                </a>
              </Typography>
            </Box>{" "}
            or check out my{" "}
            <Box display="inline">
              <Typography className={classes.linkText} variant="h3">
                <a href="https://github.com/tphan25/" className={classes.me}>
                  Github.
                </a>
              </Typography>
            </Box>
          </Typography>
          <Typography className={classes.text} variant="h3">
            Hope to hear from you soon!
          </Typography>
        </Box>
        <Footer />
      </Fragment>
    );
  }
}