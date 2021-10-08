import React from "react";
import { makeStyles } from "@material-ui/core";

import ContactWrap from "../SVGs/ContactWrap";
import Arrow from "../SVGs/Arrow";

import { themeColors } from "../../config";
import { scrollToSection } from "../../functions/functions";

const useStyles = makeStyles(theme => ({
    root: {
        position: "relative",
        height: 130,
        width: 130,
    },
    text: {
        position: "absolute",
        right: 0,
        top: 0,
    },
    button: {
        backgroundColor: themeColors.primaryColor,
        borderRadius: "100%",
        height: 85,
        width: 85,
        position: "absolute",
        bottom: 0,
        left: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "all 0.3s ease",
        "&:hover": {
            cursor: "pointer",
            transform: "rotate(-45deg)",
        },
    },
}));

function ContactButton() {
    const classes = useStyles();
    return (
        <div className={classes.root} onClick={() => scrollToSection("contact")}>
            <div className={classes.text}>
                <ContactWrap />
            </div>
            <div className={classes.button}>
                <Arrow />
            </div>
        </div>
    );
}

export default ContactButton;