import React from "react";
import { makeStyles } from "@material-ui/core";

import ViewProjectWrap from "../SVGs/ViewProjectWrap";
import Arrow from "../SVGs/Arrow";

import { themeColors } from "../../config";
import { openTab } from "../../functions/functions";

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

function ViewProjectButton(props) {
    const classes = useStyles();
    return (
        <div className={classes.root} onClick={() => openTab(props.link)}>
            <div className={classes.text}>
                <ViewProjectWrap />
            </div>
            <div className={classes.button}>
                <Arrow />
            </div>
        </div>
    );
}

export default ViewProjectButton;