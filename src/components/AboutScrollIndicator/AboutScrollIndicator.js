import React from "react";

import { makeStyles } from "@material-ui/core";

import AboutArrow from "../SVGs/AboutArrow";

import { themeColors } from "../../config";
import { scrollToSection } from "../../functions/functions";

const useStyles = makeStyles(theme => ({
    root: {
        margin: "-5rem 3rem 0 0",
    },
    button: {
        borderRadius: "100%",
        border: "2px solid " + themeColors.primaryColor,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: 110,
        marginLeft: "auto",
        transition: "all 0.3s ease",
        width: 110,
        "&:hover": {
            cursor: "pointer",
            transform: "rotate(-45deg)",
        },
        [theme.breakpoints.down("sm")]: {
            display: "none",
        },
    },
}));

function AboutScrollIndicator() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.button} onClick={() => scrollToSection("contact")}>
                <AboutArrow />
            </div>
        </div>
    );
}

export default AboutScrollIndicator;