import React from "react";
import Styles from "./projects.module.css"
import ProjectCard from "../../reusable/project-card/project-card-component";
import RebelsBg from "../../../assets/rebels-card.png"
import KilisBg from "../../../assets/kilis-card.png"

export default function Projects() {
    return(
        <div className={Styles.projectsContainer}> 
            <ProjectCard title={"Rebels"} description={"Bangladesh"} background={RebelsBg}/>
            <ProjectCard title={"Kilis"} description={"Siria"} background={KilisBg}/>
        </div>
    )
}