import React from "react";

import AppBarSpacer from "../AppBarSpacer/AppBarSpacer";
import SectionHeading from "../SectionHeading/SectionHeading";
import ProjectLeft from "../ProjectLeft/ProjectLeft";
import ProjectRight from "../ProjectRight/ProjectRight";
import { projectDetails } from "../../config";

function ProjectSection() {
    return (
        <section className="projects" id="projects">
            <AppBarSpacer />
            <SectionHeading heading="projects" />
            {
                projectDetails.map((project, idx) =>
                    (idx % 2 === 0) ?
                        <ProjectLeft project={project} key={project.title} />
                        :
                        <ProjectRight project={project} key={project.title} />
                )
            }
        </section>
    );
}

export default ProjectSection;