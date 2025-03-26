import React from "react";
import Styles from "./project-infos-component.module.css"

export default function ProjectInfos({ title, description }) {
    return (
        <div className={Styles.textContainer}>
            <h2 className={Styles.title}>{title}</h2>
            <p className={Styles.description}>{description}</p>
        </div>
    )
}