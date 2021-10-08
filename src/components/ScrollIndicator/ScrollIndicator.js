import React from "react";
import { makeStyles } from "@material-ui/core";

import "./ScrollIndicator.css";

import { themeColors } from "../../config";
import { scrollToSection } from "../../functions/functions";

const useStyles = makeStyles(theme => ({
    root: {
        border: "2px solid " + themeColors.primaryColor,
        borderRadius: "2rem",
        height: 35,
        paddingTop: "0.3rem",
        width: 25,
        "&:hover": {
            cursor: "pointer",
        },
    },
}));

function ScrollIndicator() {
    const classes = useStyles();
    return (
        <div className={classes.root} onClick={() => scrollToSection("projects")}>
            <div className="indicator" />
        </div>
    );
}

export default ScrollIndicator;