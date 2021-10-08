import React from "react";

import { makeStyles } from "@material-ui/core";

import AppBarSpacer from "../AppBarSpacer/AppBarSpacer";
import SectionHeading from "../SectionHeading/SectionHeading";
import SkillsCard from "../SkillsCard/SkillsCard";

import { mySkills } from "../../config";

const useStyles = makeStyles(theme => ({
    root: {
        minHeight: "100vh",
        margin: "auto",
        maxWidth: "1000px",
        textAlign: "center",
    },
}));

function SkillsSection() {
    const classes = useStyles();

    return (
        <section className="skills" id="skills">
            <div className={classes.root}>
                <AppBarSpacer />
                <SectionHeading heading="skills" alignCenter={true} />
                {
                    mySkills.map((skill) => <SkillsCard skill={skill} key={skill} />)
                }
            </div>
        </section>
    );
}

export default SkillsSection;