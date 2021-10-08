import React from "react";

import { Button, makeStyles, useMediaQuery, useTheme } from "@material-ui/core";

import ViewProjectButton from "../ViewProjectButton/ViewProjectButton";
import TechChip from "../TechChip/TechChip";

import { themeColors } from "../../config";
import { openTab } from "../../functions/functions";

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        maxWidth: 1000,
        margin: "1.5rem auto",
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
        },
    },
    image: {
        position: "relative",
        maxHeight: 533,
        maxWidth: 400,
        [theme.breakpoints.down("xs")]: {
            maxWidth: 300,
        },
    },
    projectImage: {
        maxHeight: 533,
        maxWidth: 400,
        transition: "all 0.5s ease",
        [theme.breakpoints.down("xs")]: {
            maxWidth: 300,
        },
        "&:hover": {
            transform: "scale(1.02, 1.02)",
        },
    },
    viewProjectButton: {
        position: "absolute",
        bottom: 65,
        right: -85,
        [theme.breakpoints.down("xs")]: {
            display: "none",
        },
    },
    details: {
        maxWidth: 400,
        [theme.breakpoints.down("sm")]: {
            textAlign: "center",
            marginBottom: 100,
            margin: "auto",
            width: 400,
            maxWidth: "95%",
        },
    },
    title: {
        color: themeColors.primaryColor,
        fontFamily: "'Barlow Condensed', sans-serif",
        fontSize: "3rem",
        fontWeight: 600,
    },
    description: {
        color: themeColors.black,
        fontFamily: "'Barlow Condensed', sans-serif",
        fontSize: "1.2rem",
        fontWeight: 400,
        lineHeight: 1.5,
    },
    viewCodeButton: {
        display: "flex",
        alignItems: "center",
        "&:hover": {
            cursor: "pointer",
        },
    },
    stroke: {
        background: `linear-gradient(to right, #EBEBEB, ${themeColors.primaryColor})`,
        height: "2px",
        width: "6rem",
        transition: "all 0.4s ease",
    },
    bulb: {
        backgroundColor: themeColors.primaryColor,
        borderRadius: "1rem",
        height: "8px",
        width: "8px",
    },
    viewCode: {
        color: themeColors.primaryColor,
        fontFamily: "'Montserrat', sans- serif",
        fontSize: "12px",
        fontWeight: 700,
        marginLeft: "1rem",
        textTransform: "uppercase",
    },
    projectButton: {
        backgroundColor: themeColors.primaryColor,
        boxShadow: "none",
        color: themeColors.secondaryColor,
        fontFamily: "'Montserrat', sans- serif",
        fontSize: "12px",
        fontWeight: 700,
        margin: "1rem 0.5rem",
        padding: "0.5rem 0",
        maxWidth: "8.5rem",
        width: "100%",
        "&:hover": {
            backgroundColor: themeColors.primaryColor,
            boxShadow: "none",
        },
    },
    codeButton: {
        border: "2px solid " + themeColors.primaryColor,
        color: themeColors.primaryColor,
        fontFamily: "'Montserrat', sans- serif",
        fontSize: "12px",
        fontWeight: 700,
        margin: "1rem 0.5rem",
        padding: "6px 0",
        maxWidth: "8.5rem",
        width: "100%",
        "&:hover": {
            backgroundColor: "transparent",
        },
    },
}));

function ProjectLeft(props) {
    const classes = useStyles();
    const project = props.project;
    const id = "project-" + project.title;
    const theme = useTheme();
    const mobile = useMediaQuery(theme.breakpoints.down("xs"));
    const reduceLineWidth = () => {
        if (id) {
            const stroke = document.getElementById(id);
            stroke.style.width = "3rem";
        }
    };
    const restoreLineWidth = () => {
        if (id) {
            const stroke = document.getElementById(id);
            stroke.style.width = "6rem";
        }
    };

    const getTechStack = () => {
        return project.techStack.map(tech => <TechChip key={tech} tech={tech} />);
    };

    return (
        <div className={classes.root}>
            <div className={classes.image}>
                <img
                    className={classes.projectImage}
                    src={require(`../../images/${project.image}`).default}
                    alt="cover"
                />
                <div className={classes.viewProjectButton}>
                    <ViewProjectButton link={project.hostedLink} />
                </div>
            </div>
            <div className={classes.details}>
                <h1 className={classes.title}>{project.title}</h1>
                <p className={classes.description}>{project.description}</p>
                {getTechStack()}
                <br />
                {
                    mobile ?
                        <React.Fragment>
                            <Button variant="contained" className={classes.projectButton} onClick={() => openTab(project.hostedLink)}>View Project</Button>
                            <Button variant="outlined" className={classes.codeButton} onClick={() => openTab(project.githubLink)}>View Code</Button>
                        </React.Fragment>
                        :
                        <div className={classes.viewCodeButton} onMouseOver={reduceLineWidth} onMouseOut={restoreLineWidth}>
                            <div className={classes.stroke} id={id} />
                            <div className={classes.bulb} />
                            <p className={classes.viewCode} onClick={() => openTab(project.githubLink)}>View Code</p>
                        </div>
                }
            </div>
        </div>
    );
}

export default ProjectLeft;