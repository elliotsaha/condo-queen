import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import styles from "../styles/Navbar.module.css";
import Link from "next/link";

import { useTheme } from "@material-ui/core/styles";
import BookRoundedIcon from "@material-ui/icons/BookRounded";
import InfoRoundedIcon from "@material-ui/icons/InfoRounded";
import GavelRoundedIcon from "@material-ui/icons/GavelRounded";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import IconButton from "@material-ui/core/IconButton";

import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
import CloseIcon from "@material-ui/icons/Close";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Divider } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";


export default function Navbar() {
  const theme = useTheme();
  // Change Class if scrolled State
  const [scrollClass, setScrollClass] = useState(styles.appBar);
  const [scrollMobileClass, setScrollMobileClass] = useState(
    styles.appBarMobile
  );
  // Use Effect Function to Change Class if Scrolled
  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 30) {
        setScrollClass(styles.appBarScroll);
        setScrollMobileClass(styles.appBarMobileScroll);
      } else {
        setScrollClass(styles.appBar);
        setScrollMobileClass(styles.appBarMobile);
      }
    });
  });

  // Mobile Drawer
  const [mobileOpen, setMobileOpen] = useState(false);
  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }
  const itemsList = [
    {
      text: "Home",
      icon: <HomeRoundedIcon className={styles.svgIcon} />,
      link: "/",
      onClick: () => {
        handleDrawerToggle();
      },
    },
    {
      text: "Condos",
      icon: <InfoRoundedIcon className={styles.svgIcon} />,
      link: "/condos",
      onClick: () => {
        handleDrawerToggle();
      },
    },
    {
      text: "Blog",
      icon: <GavelRoundedIcon className={styles.svgIcon} />,
      link: "/blog",
      onClick: () => {
        handleDrawerToggle();
      },
    },
    {
      text: "Financing",
      link: "/financing",
      icon: <BookRoundedIcon className={styles.svgIcon} />,
      onClick: () => {
        handleDrawerToggle();
      },
    },
  ];

  const Contact = [
    {
      text: "Contact",
      link: "/contact",
      icon: <EmailRoundedIcon className={styles.svgIcon} />,
      onClick: () => {
        handleDrawerToggle();
      },
    },
  ];
  //Drawer
  const drawer = (
    <div>
      <List>
        <div className={styles.sideBarImage}>
          <img
            className={styles.sideBarImageInner}
            src="/logo.png"
            alt="logo"
          />
        </div>
        <Divider className={styles.divider} />
        {itemsList.map((item, index) => {
          const { text, icon, link, onClick } = item;
          return (
            <Link href={link} key={index}>
              <ListItem
                button
                key={text}
                onClick={onClick}
                className={styles.sideBarText}
              >
                {icon && (
                  <ListItemIcon className={styles.sideBarInactive}>
                    {icon}
                  </ListItemIcon>
                )}
                <ListItemText
                  disableTypography
                  primary={text}
                  className={styles.sideBarText}
                />
              </ListItem>
            </Link>
          );
        })}
        <Divider className={styles.divider} />
        {Contact.map((item, index) => {
          const { text, icon, link, onClick } = item;
          return (
            <Link href={link} key={index}>
              <ListItem
                button
                key={text}
                onClick={onClick}
                className={styles.sideBarText}
              >
                {icon && (
                  <ListItemIcon className={styles.sideBarInactive}>
                    {icon}
                  </ListItemIcon>
                )}
                <ListItemText
                  disableTypography
                  primary={text}
                  className={styles.sideBarText}
                />
              </ListItem>
            </Link>
          );
        })}
      </List>
    </div>
  );

  return (
    <React.Fragment>
      <AppBar position="fixed" elevation={0} className={scrollClass}>
        <div className={styles.appBarInner}>
          <div className={styles.logoContainer}>
            <img className={styles.logo} src="/logo.png" alt="Condo Queen" />
          </div>
          <div className={styles.navItems}>
            <Link href="/">
              <span className={styles.navItem}>Home</span>
            </Link>
            <Link href="/condos">
              <div className={styles.navItem}>Condos</div>
            </Link>
            <Link href="/blog">
              <div className={styles.navItem}>Blog</div>
            </Link>
            <Link href="/financing">
              <div className={styles.navItem}>Financing</div>
            </Link>
          </div>
          <div className={styles.buttonContainer}>
            <Button className={styles.button}>Contact</Button>
          </div>
        </div>
      </AppBar>

      <AppBar position="fixed" className={scrollMobileClass} elevation={0}>
        <IconButton
          aria-label="Open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          className={styles.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <div className={styles.shortLogoContainerAppbar}>
          <img
            className={styles.shortLogoContainerAppbarInner}
            src="/shortlogo.png"
            alt="logo"
          />
        </div>
      </AppBar>

      <nav className={styles.drawer}>
        <Hidden lgUp implementation="js">
          <Drawer
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: styles.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <IconButton
              onClick={handleDrawerToggle}
              className={styles.closeMenuButton}
            >
              <CloseIcon className={styles.sideBarInactive} />
            </IconButton>
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </React.Fragment>
  );
}
