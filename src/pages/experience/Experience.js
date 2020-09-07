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
import aws from "../../images/aws.png";
import carpool from "../../images/Carpool.jpg";
import chartio from "../../images/chartio.jpg";
import ScrollToTop from "../../components/scroll-to-top/ScrollToTop";
import Footer from "../../components/footer/Footer";
import HorizontalRule from "../../components/horizontal-rule/HorizontalRule";

function displayListItems(items) {
  let list = [];
  let listitems = [];
  items.forEach(element => {
    listitems.push(
      <ListItem key={element} className={classes.skill}>
        <ListItemText
          primary={"- " + element}
          primaryTypographyProps={{ variant: "p" }}
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

const ExperienceDescription = (props) => {
  const { name, preface, skillsHeader, skills, imageSrc, imageSrcAlt } = props;
  return (
    <Grid container direction="row">
      <Grid item xs={12}>
        <Typography className={classes.text} variant="h5">
          {preface}
        </Typography>
      </Grid>
      <HorizontalRule width={5} height={3} />
      <Grid item xs={7}>
        <div>
          <Typography className={classes.text} variant="h5">
            {skillsHeader != null ? skillsHeader : `What I did at ${name}:`}
          </Typography>
        </div>
        <HorizontalRule width={2} float={"l"} height={3} />
        {displayListItems(skills)}
      </Grid>
      <Grid item xs={5}>
        <img
          src={imageSrc}
          alt={imageSrcAlt}
          className={classes.imgStyle}
        />
      </Grid>
    </Grid>
  )
};

const PersonalProjectDescription = (props) => {
  const { name, paragraphs, imageSrc, imageSrcAlt } = props;
  return (
    <Grid container>
      <Grid xs={12}>
        <Typography className={classes.text} variant="h4">
          {name}
        </Typography>
      </Grid>
      <Grid container xs={7} direction="column" justify="space-evenly">
        {paragraphs.map(p => {
          return (
            <Grid>
              <Typography className={classes.text} variant="p">
                {p}
              </Typography>
            </Grid>)
        })}
      </Grid>
      <Grid xs={5}>
        <img
          src={imageSrc}
          alt={imageSrcAlt}
          className={classes.imgStyle}
        />
      </Grid>

      <HorizontalRule width={5} height={3} />
    </Grid>
  )
}

export default function Experience() {
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
  const awsDescription = {
    name: "AWS",
    preface: `My most recent work was at Amazon Web Services (AWS) as an SDE Intern. 
    I worked on the AWS Time Sync Service, which provides NTP synchronized time to customer
    instances everywhere on AWS. I worked on a service that customers could use to monitor their
    clock error from UTC, which is extremely important for database implementations and high volume
    financial transactions.`,
    skills: [
      "Built a service that can monitor maximum clock error bound with nanosecond resolution on customer systems.",
      "Planned and presented design document to demonstrate problem statement, constraints, solution and system design architecture",
      "Wrote entire service from scratch, building modules and unit test modules in Rust",
      "Wrote full customer documentation, plans for vending to customers, and manually tested on different hardware/Linux distributions"
    ],
    imageSrc: aws,
    imageSrcAlt: "AWS Logo"
  }
  const chartioDescription = {
    name: "Chartio",
    preface: `I worked at Chartio, a startup B2B SaaS provider, from January 2020 to May 2020 and am continuing part
    time this semester. My work centered around optimizing ORM queries, improving customer onboarding experience, and
    rebuilding the authentication flow.`,
    skills: [
      "Rebuilt authentication flow for application in Django to improve security and allow for safe implementation of on-login functionalities",
      "Built new customer onboarding flow with React/Redux for an improved user interface and simpler, direct onboarding experience",
      "Optimizing ORM queries that caused customer latency, once seeing staggering improvements over 1000%",
      "Set up REST API endpoints in Django accessing PostgreSQL database to support features on client side",
    ],
    imageSrc: chartio,
    imageSrcAlt: "Chartio Logo"
  }
  const solersDescription = {
    name: "Solers",
    preface: `I worked at Solers, Inc from June to August 2019. This was my first internship experience, and I worked on rebuilding a legacy app
    using React with Redux and other libraries. I worked on rebuilding REST and SOAP services using Java with Spring Framework.`,
    skills: [
      "Building REST/SOAP services in Java with JAX-RS, JAX-WS",
      "Using Git with Gerrit for code reviews",
      "Using Maven for building, deploying, and debugging a Tomcat servlet",
      "Building UI components using ReactJS with Redux & MaterialUI",
      "Practicing agile scrum and JIRA for agile management and estimating tasks"
    ],
    imageSrc: solers,
    imageSrcAlt: "Picture of me at Solers",
  }
  const researchDescription = {
    name: "VT Echolab",
    preface: `I recently started working on research under professor Sang Won Lee at Virginia Tech, building an collaborative brainstorming environment
    in AR. I'm working on scanning in images via HoloLens in a live application for computer vision processing on a server.`,
    skills: [
      "Implementing computer vision algorithms utilizing OpenCV-python, numpy, and PIL",
      "Utilizing a Jupyter notebook with collected data to tune computer vision algorithm",
      "Building a simple Flask server to process Base64 encoded image data",
      "Using Mixed Reality Toolkit for HoloLens to trigger functions to communicate with Flask server"
    ],
    imageSrc: vt,
    imageSrcAlt: "VT Logo",
  }

  const carpoolCreator = {
    name: "Carpool Creator",
    paragraphs: [
      `Carpool Creator is a project with a REST API written in Go and the
      frontend/client-side is currently designed using Angular (the
      Angular portion needs an overhaul though). This is not an official
      logo :)`,
      `This project was meant to take as input a group of names and
      addresses, and return a grouping of the passengers according to
      the input (based on drivers, capacity, etc). I built it because I
      found myself often setting up ride groups for my student
      organization and wanted to make things faster.`,
      `With this project, I went and learned a few more things about building a true
      end to end application, and am working on setting up a frontend and an authentication
      so that I can actually deploy it sometime.`
    ],
    imageSrc: carpool,
    imageSrcAlt: "Carpool Creator fake icon"
  }

  return (
    <Fragment>
      <Box display="flex" flexDirection="column" className={classes.container}>
        <ScrollToTop />

        <Grid container>
          <Grid xs={12}>
            <Typography className={classes.links} variant="h5">
              <a href="https://tphan25.github.io" className={classes.links}>
                Here's a copy of my resume if you'd rather look at that!
              </a>
            </Typography>
          </Grid>
          <div>
            <HorizontalRule height={3} />
            <ExperienceDescription {...awsDescription} />
            <HorizontalRule height={3} />
            <ExperienceDescription {...chartioDescription} />
            <HorizontalRule height={3} />
            <ExperienceDescription {...solersDescription} />
            <HorizontalRule height={3} />
            <ExperienceDescription {...researchDescription} />
            <HorizontalRule height={3} />
          </div>
          <Grid item xs={12}>
            <Typography variant="h4" className={classes.text}>
              Personal Projects
            </Typography>
            <HorizontalRule height={3} />
          </Grid>
          <div>
            <PersonalProjectDescription {...carpoolCreator} />
          </div>
        </Grid>
      </Box>
      <Footer />
    </Fragment >
  );
}
