import React from "react";

import AppBar from "../AppBar/AppBar";
import MainSection from "../MainSection/MainSection";
import ProjectSection from "../ProjectSection/ProjectSection";
import SkillsSection from "../SkillsSection/SkillsSection";
import AboutSection from "../AboutSection/AboutSection";
import ContactSection from "../ContactSection/ContactSection";

function Home() {
    console.log("Hello there!");
    return (
        <React.Fragment>
            <AppBar />
            <MainSection />
            <ProjectSection />
            <SkillsSection />
            <AboutSection />
            <ContactSection />
        </React.Fragment>
    );
}

export default Home;