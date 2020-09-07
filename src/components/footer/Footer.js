import React from "react";
import { Container, Box, Grid, Typography } from "@material-ui/core";
import classes from "./Footer.module.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <Box className={classes.container}>
      <Grid container>
        <Grid item xs={12}>
          <Box display="flex" textAlign="center" justifyContent="space-between">
            <Container>
              <Typography variant="h5" className={classes.text}>
                Learn{" "}
              </Typography>
              <Link to="/about" className={classes.link}>
                <Typography variant="h5">about me</Typography>
              </Link>
            </Container>

            <Container>
              <Typography variant="h5" className={classes.text}>
                See{" "}
              </Typography>
              <Link to="/experience" className={classes.link}>
                <Typography variant="h5">what I've done</Typography>
              </Link>
            </Container>
            <Container>
              <Typography variant="h5" className={classes.text}>
                Get{" "}
              </Typography>
              <Link to="/contact" className={classes.link}>
                <Typography variant="h5">in touch</Typography>
              </Link>
            </Container>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
