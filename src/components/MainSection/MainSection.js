import React from "react";
import { makeStyles } from "@material-ui/core";

import ContactButton from "../ContactButton/ContactButton";
import Contacts from "../Contacts/Contacts";
import ScrollIndicator from "../ScrollIndicator/ScrollIndicator";

import { themeColors } from "../../config";
import { personalDetails } from "../../config";

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        margin: "auto",
        minHeight: "90vh",
        width: "95%",
    },
    headings: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        marginTop: "7%",
        [theme.breakpoints.down("sm")]: {
            marginTop: "20%",
        },
    },
    firstName: {

        color: themeColors.secondaryColor,
        textShadow: "-4px 5px 6px rgba(0, 0, 0, 0.17)",
        fontFamily: "'Montserrat', sans-serif",
        fontSize: "3rem",
        fontWeight: 500,
        letterSpacing: "10px",
        margin: 0,
        lineHeight: 1.5,
        textTransform: "uppercase",
        [theme.breakpoints.down("sm")]: {
            letterSpacing: "unset",
        },
    },
    lastName: {
        color: themeColors.secondaryColor,
        textShadow: "-4px 5px 10px rgba(0, 0, 0, 0.17)",
        fontFamily: "'Montserrat', sans-serif",
        fontSize: "10rem",
        fontWeight: 300,
        margin: 0,
        lineHeight: 1,
        textTransform: "uppercase",
        [theme.breakpoints.down("sm")]: {
            fontSize: "4rem",
            fontWeight: 500,
        },
    },
    title: {
        color: themeColors.primaryColor,
        fontFamily: "'Barlow Condensed', sans-serif",
        fontSize: "2rem",
        fontWeight: 600,
        textTransform: "uppercase",
    },
    contactButton: {
        position: "absolute",
        bottom: -120,
        right: "30%",
    },
    footer: {
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "space-between",
        marginBottom: "1rem",
    },
}));

function MainSection() {
    const classes = useStyles();
    return (
        <section className="home" id="home">
            <div className={classes.root}>
                <div className={classes.headings}>
                    <h2 className={classes.firstName}>{personalDetails.myName.first}</h2>
                    <h1 className={classes.lastName}>{personalDetails.myName.last}</h1>
                    <h3 className={classes.title}>{personalDetails.title}</h3>
                    <div className={classes.contactButton}>
                        <ContactButton />
                    </div>
                </div>
                <div className={classes.footer}>
                    <Contacts />
                    <ScrollIndicator />
                </div>
            </div>
        </section>
    );
}

export default MainSection;