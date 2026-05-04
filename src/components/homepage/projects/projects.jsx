import React, { useState, useEffect } from "react";
import Styles from "./projects.module.css"
import ProjectCard from "../../reusable/project-card/project-card-component";
import { getProgetti } from "../../../api/wordpress";

export default function Projects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        getProgetti()
            .then(setProjects)
            .catch(err => console.error(err));
    }, []);

    return (
        <div className={Styles.projectsContainer}>
            {projects.map(project => (
                <ProjectCard
                    key={project.slug}
                    title={project.title}
                    description={project.location}
                    background={project.bgImage}
                    slug={project.slug}
                />
            ))}
        </div>
    )
}

// import React from "react";
// import Styles from "./projects.module.css"
// import ProjectCard from "../../reusable/project-card/project-card-component";
// import { contents } from "../../../assets/_content";

// export default function Projects() {
//     return(
//         <div className={Styles.projectsContainer}> 
//             {contents.map(content => {
//                 return <ProjectCard title={content.title} description={content.location} background={content.bgImage}/>
//             })}
//         </div>
//     )
// }