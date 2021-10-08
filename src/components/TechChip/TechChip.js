import React from "react";

import { makeStyles } from "@material-ui/core";
import Chip from "@material-ui/core/Chip";

import { themeColors } from "../../config";

const useStyles = makeStyles(theme => ({
    chip: {
        backgroundColor: themeColors.secondaryColor,
        color: themeColors.primaryColor,
        fontSize: "0.8rem",
        fontWeight: "600",
        margin: "0 0.4rem 0.4rem 0",
        padding: "0.2rem",
        "&:hover": {
            boxShadow: "-4px 5px 10px rgba(0, 0, 0, 0.05)",
        },
    },
}));

function TechChip(props) {
    const classes = useStyles();
    const tech = props.tech;
    return (
        <Chip size="small" className={classes.chip} label={tech} />
    );
}

export default TechChip;