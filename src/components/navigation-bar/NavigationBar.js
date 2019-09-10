import React from "react";
import classes from "./NavigationBar.module.css";
import AppBar from "@material-ui/core/AppBar";
import MenuIcon from "@material-ui/icons/Menu";

import {
  Toolbar,
  Typography,
  Box,
  makeStyles,
  IconButton,
  Container,
  Drawer,
  List,
  ListItem,
  ClickAwayListener
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  sectionDesktop: {
    height: "100%",
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  }
}));

export default function NavigationBar() {
  const navTheme = useStyles();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  function handleMobileMenuClick() {
    setMobileMenuOpen(!mobileMenuOpen);
  }

  function handleMobileMenuClose() {
    setMobileMenuOpen(false);
  }

  return (
    <AppBar className={classes.appBar} position="static" color="secondary">
      {/* Toolbar for desktop view */}
      <Toolbar className={classes.toolbar}>
        <Container className={navTheme.sectionDesktop}>
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
        </Container>
        {/* Mobile menu */}
        <ClickAwayListener onClickAway={handleMobileMenuClose}>
          <Container className={navTheme.sectionMobile}>
            <IconButton
              style={{
                color: "white",
                width: "100%",
                height: "100%",
                borderRadius: "0"
              }}
              onClick={handleMobileMenuClick}
              size="large"
              variant="contained"
            >
              <MenuIcon fontSize="large" />
              <Typography variant="h1">Menu</Typography>
            </IconButton>

            <Drawer anchor="top" open={mobileMenuOpen} variant="persistent">
              <List>
                <ListItem
                  button
                  onClick={handleMobileMenuClose}
                  component={Link}
                  to="/"
                >
                  Home
                </ListItem>
                <ListItem
                  button
                  onClick={handleMobileMenuClose}
                  component={Link}
                  to="/about"
                >
                  About Me
                </ListItem>
                <ListItem
                  button
                  onClick={handleMobileMenuClose}
                  component={Link}
                  to="/experience"
                >
                  Experience
                </ListItem>
                <ListItem
                  button
                  onClick={handleMobileMenuClose}
                  component={Link}
                  to="/contact"
                >
                  Contact
                </ListItem>
              </List>
            </Drawer>
          </Container>
        </ClickAwayListener>
      </Toolbar>
    </AppBar>
  );
}
