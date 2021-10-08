import React, { useState } from "react";

import { IconButton, makeStyles, Snackbar } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

import AppBarSpacer from "../AppBarSpacer/AppBarSpacer";
import EmailIcon from "../SVGs/EmailIcon";
import LinkedinIcon from "../SVGs/LinkedinIcon";
import GithubIcon from "../SVGs/GithubIcon";

import { themeColors, contactLinks } from "../../config";
import { copyEmail, openTab } from "../../functions/functions";

const useStyles = makeStyles(theme => ({
    root: {
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
    },
    headingDiv: {
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: 300,
        marginTop: "8rem",
        [theme.breakpoints.down("sm")]: {
            minHeight: 200,
        },
    },
    bubble: {
        backgroundColor: themeColors.primaryColor,
        borderRadius: "100%",
        height: 300,
        width: 300,
        zIndex: -5,
        position: "absolute",
        transition: "all 0.5s ease",
        [theme.breakpoints.down("sm")]: {
            height: 200,
            width: 200,
        },
    },
    heading: {
        color: themeColors.secondaryColor,
        fontFamily: "'Barlow Condensed', sans-serif",
        fontSize: "6rem",
        fontWeight: 500,
        textShadow: "-4px 5px 10px rgba(0, 0, 0, 0.17)",
        [theme.breakpoints.down("sm")]: {
            fontSize: "3.5rem",
        },
    },
    contacts: {
        display: "flex",
        justifyContent: "space-around",
        maxWidth: 1000,
        margin: "auto",
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
        },
    },
    contact: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "1.5rem",
    },
    button: {
        border: "1px solid " + themeColors.black,
        height: 55,
        padding: "1.1rem",
        width: 55,
    },
    link: {
        color: themeColors.primaryColor,
        fontFamily: "'Montserrat', sans-serif",
        fontSize: "1rem",
        fontWeight: 700,
        textDecoration: "underline",
        textAlign: "center",
        "&:hover": {
            cursor: "pointer",
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

function ContactSection() {
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
        <section className="contact" id="contact">
            <div className={classes.root}>
                <AppBarSpacer />
                <div className={classes.headingDiv}>
                    <div className={classes.bubble} />
                    <h1 className={classes.heading}>Get in touch!</h1>
                </div>
                <div className={classes.contacts}>
                    <div className={classes.contact}>
                        <IconButton className={classes.button} onClick={handleEmailClick}>
                            <EmailIcon />
                        </IconButton>
                        <p className={classes.link} onClick={handleEmailClick}>{contactLinks.email}</p>
                    </div>
                    <div className={classes.contact}>
                        <IconButton className={classes.button} onClick={() => openTab(contactLinks.linkedin)}>
                            <LinkedinIcon />
                        </IconButton>
                        <p className={classes.link} onClick={() => openTab(contactLinks.linkedin)}>{contactLinks.linkedin}</p>
                    </div>
                    <div className={classes.contact}>
                        <IconButton className={classes.button} onClick={() => openTab(contactLinks.github)}>
                            <GithubIcon />
                        </IconButton>
                        <p className={classes.link} onClick={() => openTab(contactLinks.github)}>{contactLinks.github}</p>
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
        </section>
    );
}

export default ContactSection;