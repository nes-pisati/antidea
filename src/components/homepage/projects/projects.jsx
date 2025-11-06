import React from "react";
import Styles from "./projects.module.css"
import ProjectCard from "../../reusable/project-card/project-card-component";
import { contents } from "../../../assets/_content";

export default function Projects() {
    return(
        <div className={Styles.projectsContainer}> 
            {contents.map(content => {
                return <ProjectCard title={content.title} description={content.location} background={content.bgImage}/>
            })}
        </div>
    )
}