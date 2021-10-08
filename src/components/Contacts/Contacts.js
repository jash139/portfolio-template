import React, { useState } from "react";

import { IconButton, makeStyles, Snackbar } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

import EmailIcon from "../SVGs/EmailIcon";
import GithubIcon from "../SVGs/GithubIcon";
import LinkedinIcon from "../SVGs/LinkedinIcon";

import { themeColors, contactLinks } from "../../config";
import { copyEmail, openTab } from "../../functions/functions";

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        flexDirection: "column",
        position: "relative",
    },
    stroke: {
        position: "absolute",
        top: "-90%",
        left: "50%",
        transform: "translate(-50%, 0)",
    },
    line: {
        background: `linear-gradient(#EBEBEB, ${themeColors.primaryColor})`,
        height: 100,
        margin: "auto",
        width: "1.5px",
    },
    bulb: {
        backgroundColor: themeColors.primaryColor,
        borderRadius: "1rem",
        height: "8px",
        width: "8px",
    },
    button: {
        height: 38,
        marginTop: "0.2rem",
        width: 38,
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

function Contacts() {
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
        <div className={classes.root}>
            <div className={classes.stroke}>
                <div className={classes.line} />
                <div className={classes.bulb} />
            </div>
            <IconButton className={classes.button} onClick={handleEmailClick}><EmailIcon /></IconButton>
            <IconButton className={classes.button} onClick={() => openTab(contactLinks.linkedin)}><LinkedinIcon /></IconButton>
            <IconButton className={classes.button} onClick={() => openTab(contactLinks.github)}><GithubIcon /></IconButton>
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
    );
}

export default Contacts;