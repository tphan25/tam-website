import React, { Component } from "react";
import { Typography, Box } from "@material-ui/core";
import classes from "./About.module.css";
import vt from "../../images/VT.jpg";
import kms from "../../images/KMS.jpg";
import kasa from "../../images/KASA.png";
import ScrollToTop from "../../components/scroll-to-top/ScrollToTop";
export default class About extends Component {
  render() {
    return (
      <Box className={classes.container}>
        <ScrollToTop />
        <Typography
          variant="h2"
          className={[classes.text, classes.header].join(" ")}
        >
          Who the heck is Tam?
        </Typography>
        <Typography variant="h3" className={classes.text}>
          I'm currently a computer science student in the last year of my
          bachelor's degree at Virginia Tech. I'm looking for an internship :^)
          in Summer 2020 too, before I begin my accelerated master's degree
          (expected May 2021)
        </Typography>
        <Box
          display="flex"
          alignItems="stretch"
          className={classes.imgContainer}
        >
          <img
            src={vt}
            alt="VT Logo"
            width="40%"
            style={{
              borderRadius: "5px",
              objectFit: "cover",
              margin: "0 auto"
            }}
          />
        </Box>
        <Typography variant="h3" className={classes.text}>
          As hobbies, I enjoy going to the gym, skateboarding (absolute
          amateur), and playing video games/watching shows. I used to play a lot
          of League of Legends, and even hosted/streamed a tournament with 50
          participants last year over multiple weeks.
        </Typography>
        <Box
          display="flex"
          alignItems="stretch"
          className={classes.imgContainer}
        >
          <img
            src={kms}
            alt="KASA Mega Series"
            width="40%"
            style={{
              borderRadius: "5px",
              objectFit: "cover",
              margin: "0 auto"
            }}
          />
        </Box>
        <Typography variant="h3" className={classes.text}>
          I'm also active in large student organizations like KASA at VT (Korean
          American Student Association) as their current Vice President,
          previously the Events Coordinator.
        </Typography>
        <Box
          display="flex"
          alignItems="stretch"
          className={classes.imgContainer}
        >
          <img
            src={kasa}
            alt="KASA"
            width="40%"
            style={{
              borderRadius: "5px",
              objectFit: "cover",
              margin: "0 auto"
            }}
          />
        </Box>
        <Typography variant="h3" className={classes.text}>
          That's a quick summary of what I do right now personally! If you'd
          like to learn about my aspects as a software engineer or my resume,
          check out the "Experience" or "Projects" tabs! If you'd like to
          contact me, feel free to using the information in the Contact Me tab!
        </Typography>
      </Box>
    );
  }
}
