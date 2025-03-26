import React from "react";
import Styles from "./project-card-component.module.css"
import { Link } from 'react-router-dom';
import ProjectInfos from "../project-infos/project.infos-component";

export default function ProjectCard({ title, description, background }) {

    const projectName = title.toLowerCase();

    return (
        <Link to={`/project/${projectName}`} className={Styles.link}>
            <div className={Styles.cardContainer} >
                <img src={background} alt="" className={Styles.image} />
                <div className={Styles.textContainer}>
                    <h2 className={Styles.title}>{title}</h2>
                    <p className={Styles.description}>{description}</p>
                </div>
            </div>
        </Link>
    )
}