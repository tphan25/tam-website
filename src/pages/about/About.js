import React, { Component, Fragment } from "react";
import { Typography, Box, Grid } from "@material-ui/core";
import classes from "./About.module.css";
import vt from "../../images/VT.jpg";
import kms from "../../images/KMS.jpg";
import raspberry from "../../images/raspberry.png";
import unity from "../../images/unity.jpg";
import ScrollToTop from "../../components/scroll-to-top/ScrollToTop";
import Footer from "../../components/footer/Footer";
export default class About extends Component {
  render() {
    return (
      <Fragment>
        <Box className={classes.container}>
          <ScrollToTop />
          <Grid container>
            <Grid item xs={12}>
              <Typography
                variant="h2"
                className={[classes.text, classes.header].join(" ")}
              >
                Who the heck is Tam?
              </Typography>
              <Typography variant="h4" className={classes.text}>
                I'm currently a computer science student in my second year of the Accelerated MS CS program at Virginia Tech.
                I'm looking for a full time work opportunity after I finish my master's degree, expected May 2021.
              </Typography>
              <Box
                display="flex"
                alignItems="stretch"
                className={classes.imgContainer}
              >
                <img
                  src={vt}
                  alt="VT Logo"
                  className={classes.imgStyle}
                />
              </Box>
              <Typography variant="h4" className={classes.text}>
                As hobbies, I enjoy going to the working out and playing video games/watching shows. I used to play
                a lot of League of Legends, and have even hosted, casted and streamed a few tournaments with 50 participants
                in the past few years.
              </Typography>
              <Box
                display="flex"
                alignItems="stretch"
                className={classes.imgContainer}
              >
                <img
                  src={kms}
                  alt="KASA Mega Series"
                  className={classes.imgStyle}
                />
              </Box>
              <Typography variant="h4" className={classes.text}>
                I've been spending much more time lately working on cleaning up personal programming projects
                and have been wanting to get into low level programming, or perhaps just setting up cool
                household appliances with my own programming experience. I've also been playing a bit more with Unity
                and trying to build little indie game prototypes.
              </Typography>
              <Box
                display="flex"
                alignItems="stretch"
                className={classes.imgContainer}
              >
                <img
                  src={raspberry}
                  alt="Raspberry Pi Logo"
                  className={classes.imgStyle}
                />
                <img
                  src={unity}
                  alt="Unity Logo"
                  className={classes.imgStyle}
                />
              </Box>

              <Typography variant="h4" className={classes.text}>
                That's a quick summary of what I do right now personally! If
                you'd like to learn about my aspects as a software engineer or
                my resume, check out the "Experience" or "Projects" tabs! If
                you'd like to contact me, feel free to using the information in
                the Contact Me tab!
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Footer />
      </Fragment>
    );
  }
}
