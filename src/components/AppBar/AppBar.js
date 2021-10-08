import React from "react";
import { makeStyles } from "@material-ui/core";

import "./AppBar.css";

import GetAppIcon from "@material-ui/icons/GetApp"

import MenuButton from "../MenuButton/MenuButton";
import Logo from "../SVGs/Logo";

import { themeColors } from "../../config";
import { scrollToTop, scrollToSection } from "../../functions/functions";
import animateAppBar from "./animateAppBar";

import resume from "../../resume/resume.pdf";

const useStyles = makeStyles(theme => ({
    header: {
        background: "transparent",
        backdropFilter: "blur(0.5rem)",
        position: "sticky",
        top: 0,
        zIndex: 5,
    },
    nav: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        margin: "auto",
        minHeight: "10vh",
        width: "95%",
        position: "relative",
    },
    ul: {
        display: "flex",
        justifyContent: "space-between",
        listStyleType: "none",
        margin: 0,
        padding: 0,
        [theme.breakpoints.down("sm")]: {
            display: "none",
        },
    },
    homelink: {
        display: "none",
    },
    links: {
        display: "block",
        color: themeColors.black,
        fontFamily: "'Montserrat', sans- serif",
        fontSize: "12px",
        fontWeight: 600,
        marginRight: "2.5rem",
        textTransform: "uppercase",
        textDecoration: "none",
        "&:hover": {
            cursor: "pointer",
        },
    },
    logo: {
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        display: "block",
        "&:hover": {
            cursor: "pointer",
        },
        [theme.breakpoints.down("sm")]: {
            position: "unset",
            left: "unset",
            top: "unset",
            transform: "unset",
        },
    },
    indicator: {
        marginRight: "3rem",
    },
    indicatorNumber: {
        color: themeColors.black,
        fontFamily: "'Montserrat', sans- serif",
        fontSize: "12px",
        fontWeight: 600,
    },
    activeNumber: {
        color: themeColors.black,
        fontFamily: "'Montserrat', sans- serif",
        fontSize: "1.2rem",
        fontWeight: 600,
    },
    rightSection: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    },
    resumeButton: {
        color: themeColors.primaryColor,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "&:hover": {
            cursor: "pointer",
        },
    },
    resume: {
        fontFamily: "'Montserrat', sans- serif",
        fontSize: "12px",
        fontWeight: 600,
        textTransform: "uppercase",
    },
    downloadIcon: {
        fontSize: "1.3rem",
        marginLeft: "0.5rem",
    },
}));

function AppBar() {
    const classes = useStyles();
    setTimeout(animateAppBar, 1000);

    return (
        <header className={classes.header}>
            <nav className={classes.nav}>
                <ul className={classes.ul}>
                    <li className={classes.homelink}><p datapage="home">Home</p></li>
                    <li><p datapage="projects" className={classes.links} onClick={() => scrollToSection("projects")}>Projects</p></li>
                    <li><p datapage="skills" className={classes.links} onClick={() => scrollToSection("skills")}>Skills</p></li>
                    <li><p datapage="about" className={classes.links} onClick={() => scrollToSection("about")}>About</p></li>
                    <li><p datapage="contact" className={classes.links} onClick={() => scrollToSection("contact")}>Contact</p></li>
                    <div className="navbar-bubble" />
                </ul>
                <div className={classes.logo} onClick={() => scrollToTop()}>
                    <Logo />
                </div>
                <div className={classes.rightSection}>
                    <div className={classes.indicator}>
                        <h3 className={classes.indicatorNumber}><span className={classes.activeNumber} id="active-number">01</span> / 05</h3>
                    </div>
                    <div className={classes.resumeButton} onClick={() => window.open(resume)}><p className={classes.resume}>Resume</p><GetAppIcon className={classes.downloadIcon} /></div>
                    <MenuButton />
                </div>
            </nav>
        </header>
    );
}

export default AppBar;