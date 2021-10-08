import React, { useState } from "react";

import { Button, IconButton, makeStyles, Snackbar } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import GetAppIcon from "@material-ui/icons/GetApp"

import AppBarSpacer from "../AppBarSpacer/AppBarSpacer";
import SectionHeading from "../SectionHeading/SectionHeading";
import AboutScrollIndicator from "../AboutScrollIndicator/AboutScrollIndicator";

import EmailIcon from "../SVGs/EmailIcon";
import LinkedinIcon from "../SVGs/LinkedinIcon";
import GithubIcon from "../SVGs/GithubIcon";
import AboutSvg from "../SVGs/AboutSvg";

import { themeColors, personalDetails, contactLinks } from "../../config";
import { copyEmail, openTab } from "../../functions/functions";
import resume from "../../resume/resume.pdf";

const useStyles = makeStyles(theme => ({
    root: {
        minHeight: "100vh",
        margin: "0 1rem",
    },
    content: {
        display: "flex",
        flexDirection: "column",
        marginLeft: "20rem",
        [theme.breakpoints.down("sm")]: {
            marginLeft: "8rem",
            marginRight: "4rem",
        },
        [theme.breakpoints.down("xs")]: {
            margin: 0,
        },
    },
    name: {
        color: themeColors.primaryColor,
        fontFamily: "'Barlow Condensed', sans-serif",
        fontSize: "3rem",
        fontWeight: 600,
        margin: "0 0 2rem",
    },
    aboutDiv: {
        display: "flex",
    },
    aboutDecoration: {
        margin: "0.5rem 2.5rem 0 1rem",
    },
    stroke: {
        marginTop: "1rem",
    },
    bulb: {
        backgroundColor: themeColors.primaryColor,
        borderRadius: "1rem",
        height: "8px",
        margin: "auto",
        width: "8px",
    },
    line: {
        background: `linear-gradient(to top, #EBEBEB, ${themeColors.primaryColor})`,
        height: 100,
        margin: "auto",
        width: "1.5px",
    },
    aboutMe: {
        maxWidth: 550,
    },
    about: {
        color: themeColors.black,
        fontFamily: "'Barlow Condensed', sans-serif",
        fontSize: "1.2rem",
        fontWeight: 500,
        lineHeight: 1.5,
        marginTop: 0,
    },
    buttons: {
        margin: "2rem 0",
    },
    button: {
        border: "1px solid " + themeColors.black,
        height: 45,
        padding: "0.8rem",
        width: 45,
        marginRight: "1rem",
    },
    resumeButton: {
        border: "2px solid " + themeColors.primaryColor,
        color: themeColors.primaryColor,
        fontFamily: "'Montserrat', sans- serif",
        fontSize: "1rem",
        fontWeight: 600,
        textTransform: "none",
        margin: "0 1.5rem",
        [theme.breakpoints.down("xs")]: {
            margin: "2rem 0",
        },
    },
    snackbar: {
        backgroundColor: themeColors.primaryColor,
        boxShadow: "none",
        color: themeColors.secondaryColor,
        fontFamily: "'Barlow Condensed', sans-serif",
        fontSize: "1rem",
        fontWeight: 500,
    },
    closeSnackbar: {
        color: themeColors.secondaryColor,
    },
}));

function AboutSection() {
    const classes = useStyles();
    const [snackbarState, setSnackbarState] = useState({
        open: false,
    });

    const handleOpenSnackbar = () => {
        setSnackbarState({ open: true });
    };

    const handleCloseSnackbar = () => {
        setSnackbarState({ open: false });
    };
    const handleEmailClick = () => {
        copyEmail();
        handleOpenSnackbar();
    };
    return (
        <section className="about" id="about">
            <div className={classes.root}>
                <AppBarSpacer />
                <SectionHeading heading="about" />
                <div className={classes.content}>
                    <h2 className={classes.name}>{personalDetails.name}</h2>
                    <div className={classes.aboutDiv}>
                        <div className={classes.aboutDecoration}>
                            <AboutSvg />
                            <div className={classes.stroke}>
                                <div className={classes.bulb} />
                                <div className={classes.line} />
                            </div>
                        </div>
                        <div className={classes.aboutMe}>
                            <p className={classes.about}>{personalDetails.about.para1}</p>
                            <p className={classes.about}>{personalDetails.about.para2}</p>
                            <div className={classes.buttons}>
                                <IconButton className={classes.button} onClick={handleEmailClick}>
                                    <EmailIcon />
                                </IconButton>
                                <IconButton className={classes.button} onClick={() => openTab(contactLinks.linkedin)}>
                                    <LinkedinIcon />
                                </IconButton>
                                <IconButton className={classes.button} onClick={() => openTab(contactLinks.github)}>
                                    <GithubIcon />
                                </IconButton>
                                <Button variant="outlined" onClick={() => window.open(resume)} className={classes.resumeButton} endIcon={<GetAppIcon />}>Resume</Button>
                            </div>
                        </div>
                    </div>
                    <Snackbar
                        ContentProps={{
                            classes: {
                                root: classes.snackbar
                            }
                        }}
                        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                        autoHideDuration={2000}
                        open={snackbarState.open}
                        onClose={handleCloseSnackbar}
                        action={
                            <IconButton
                                className={classes.closeSnackbar}
                                onClick={handleCloseSnackbar}
                            >
                                <CloseIcon />
                            </IconButton>
                        }
                        message="Email copied!"
                    />
                </div>
                <AboutScrollIndicator />
            </div>
        </section>
    );
}

export default AboutSection;