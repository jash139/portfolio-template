import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    rootCenter: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "3rem",
    },
    root: {
        display: "flex",
        marginLeft: "10rem",
        [theme.breakpoints.down("sm")]: {
            marginLeft: "6rem",
        },
        [theme.breakpoints.down("xs")]: {
            alignItems: "center",
            justifyContent: "center",
            margin: 0,
        },
    },
    heading: {
        color: "rgba(0, 0, 0, 0.05)",
        fontFamily: "'Cormorant', serif",
        fontSize: "10rem",
        fontWeight: 700,
        margin: 0,
        marginBottom: "-3rem",
        textTransform: "lowercase",
        [theme.breakpoints.down("sm")]: {
            fontSize: "7rem",
            marginBottom: "-2rem",
        },
        [theme.breakpoints.down("xs")]: {
            fontSize: "5rem",
            marginBottom: "-1rem",
        },
    },
}));

function SectionHeading(props) {
    const classes = useStyles();
    const heading = props.heading;
    const alignCenter = props.alignCenter;
    return (
        <div className={alignCenter ? classes.rootCenter : classes.root}>
            <h1 className={classes.heading}>{heading ? heading : "Heading"}</h1>
        </div>
    );
}

export default SectionHeading;