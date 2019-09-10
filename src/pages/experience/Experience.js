import React, { Fragment } from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Grid
} from "@material-ui/core";
import { Link } from "react-router-dom";
import classes from "./Experience.module.css";
import solers from "../../images/Solers.png";
import capstone from "../../images/Capstone.png";
import vt from "../../images/VT.jpg";
import carpool from "../../images/Carpool.jpg";
import ScrollToTop from "../../components/scroll-to-top/ScrollToTop";
import Footer from "../../components/footer/Footer";

function displayListItems(items) {
  let list = [];
  let listitems = [];
  items.forEach(element => {
    listitems.push(
      <ListItem key={element} className={classes.skill}>
        <ListItemText
          primary={"- " + element}
          primaryTypographyProps={{ variant: "h4" }}
        />
      </ListItem>
    );
  });
  list.push(
    //TODO
    <List key={"TODO"} className={classes.skillsList}>
      {listitems}
    </List>
  );
  return list;
}

export default function Experience() {
  const solersSkills = [
    "Java with JAX-RS, JAX-WS",
    "Git with Gerrit for code review",
    "Maven building, deploying, and debugging a Tomcat servlet",
    "ReactJS with Redux & MaterialUI",
    "Agile Scrum and JIRA for agile management"
  ];
  const capstoneSkills = [
    "Building and evaluating user experiences with VR technology",
    "Researching and consulting professors & clients for contextual inquiry and analysis",
    "Unity3D with VR platforms (SteamVR and Windows Mixed Reality)",
    "C# for Unity in Visual Studio 2017"
  ];
  const researchSkills = [
    "X3D ISO standard with x3dom for WebVR viewing",
    "Made changes to in-house version of x3dom library for Project eTrout, a VR experience served to over 3,000 participants nationwide",
    "Learned bits of GLSL for preparing shaders for point clouds in x3d",
    "Used Unity3D with Microsoft Hololens and Hololens Emulator"
  ];

  return (
    <Fragment>
      <Box display="flex" flexDirection="column" className={classes.container}>
        <ScrollToTop />
        <Grid container>
          <Grid xs={12}>
            <Typography
              variant="h2"
              className={[classes.text, classes.header].join(" ")}
            >
              What the heck has Tam done?
            </Typography>
            <Typography className={classes.text} variant="h3">
              Check out my resume for a brief list of my skills, and maybe take
              a read below to see how I got here.
            </Typography>
          </Grid>
          <Grid container>
            <Grid xs={12}>
              <Typography className={classes.text} variant="h3">
                I'm especially experienced with web app development as of my
                latest internship at Solers, Inc., where I worked as a
                full-stack developer intern.
              </Typography>
            </Grid>
            <Grid xs={12} md={6}>
              <img
                src={solers}
                alt="Myself at Solers Chantilly office"
                width="100%"
                style={{ borderRadius: "5px", objectFit: "cover" }}
              />
            </Grid>
            <Grid xs={4} md={2}>
              <Typography className={classes.imgCaption} variant="h3">
                What I learned here:
              </Typography>
            </Grid>
            <Grid xs={8} md={4}>
              {displayListItems(solersSkills)}
            </Grid>
            <Box
              display="flex"
              alignItems="stretch"
              className={classes.imgContainer}
            ></Box>
          </Grid>
        </Grid>

        <Typography className={classes.text} variant="h3">
          I've also worked with XR (Extended Reality) technologies in the past,
          which I've found to be my primary passion. My most recent work was
          with my capstone project where my team and I built upon an application
          for analyzing documents in VR.
        </Typography>
        <Grid container>
          <Grid xs={12}>
            <Typography className={classes.text} variant="h3">
              I'm especially experienced with web app development as of my
              latest internship at Solers, Inc., where I worked as a full-stack
              developer intern.
            </Typography>
          </Grid>
          <Grid xs={12} md={6}>
            <img
              src={capstone}
              alt="Immersive Document Analysis in VR"
              width="100%"
              style={{ borderRadius: "5px", objectFit: "cover" }}
            />
          </Grid>
          <Grid xs={4} md={2}>
            <Typography className={classes.imgCaption} variant="h3">
              What I learned here:
            </Typography>
          </Grid>
          <Grid xs={8} md={4}>
            {displayListItems(capstoneSkills)}
          </Grid>
        </Grid>
        <Typography className={classes.text} variant="h3">
          I worked during the Spring 2019 semester as a Visionarium Lab Intern,
          where I supported Dr. Nicholas Polys on projects with x3dom and WebVR.
          I also previously worked research with the COGENT Lab at Virginia Tech
          with Joe Gabbard for a project with the Microsoft Hololens.
        </Typography>
        <Grid container>
          <Grid xs={12}>
            <Typography className={classes.text} variant="h3">
              I'm especially experienced with web app development as of my
              latest internship at Solers, Inc., where I worked as a full-stack
              developer intern.
            </Typography>
          </Grid>
          <Grid xs={12} md={6}>
            <img
              src={vt}
              alt="VT Logo"
              width="100%"
              style={{ borderRadius: "5px", objectFit: "cover" }}
            />
          </Grid>
          <Grid xs={4} md={2}>
            <Typography className={classes.imgCaption} variant="h3">
              What I learned here:
            </Typography>
          </Grid>
          <Grid xs={8} md={4}>
            {displayListItems(researchSkills)}
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h3" className={classes.text}>
            Here's a few of my projects that I've been working on outside of
            school (or in, if I feel the project was useful enough):
          </Typography>
          <Typography variant="h2" className={classes.text}>
            Carpool Creator
          </Typography>
        </Grid>
        <Grid container>
          <Grid item xs={12} md={4}>
            <img
              src={carpool}
              alt="VT Logo"
              width="100%"
              style={{
                borderRadius: "5px",
                objectFit: "cover"
              }}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="h4" className={classes.projectImgCaption}>
              Carpool Creator is a project with a REST API written in Go and the
              frontend/client-side is currently designed using Angular (the
              Angular portion needs an overhaul though). This is not an official
              logo :)
            </Typography>
            <Typography variant="h4" className={classes.projectImgCaption}>
              This project was meant to take as input a group of names and
              addresses, and return a grouping of the passengers according to
              the input (based on drivers, capacity, etc). I built it because I
              found myself often setting up ride groups for my student
              organization and wanted to make things faster. While watching
              videos about algorithms recently I realized there's a better way
              to place people into carpools so I'll be continuing work on this!
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography className={classes.text} variant="h2">
            This is a summary of my actual work experiences (or what I would
            consider related experience) - it does not include every detail, and
            you should take a peek at my resume to find more{" "}
            <Box display="inline" className={classes.linkContainer}>
              <Link to="/contact" className={classes.contact}>
                <Typography
                  className={[classes.text, classes.links].join(" ")}
                  variant="h2"
                >
                  (or contact me)
                </Typography>
              </Link>
            </Box>
            !
          </Typography>
        </Grid>
      </Box>
      <Footer />
    </Fragment>
  );
}
