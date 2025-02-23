import React from "react";
import Styles from "./project-card-component.module.css"

export default function ProjectCard({ title, description, background }) {
    return (
        <div className={Styles.cardContainer}>
            <img src={background} alt="" className={Styles.image}/>
            <div className={Styles.textContainer}>
                <h2 className={Styles.title}>{title}</h2>
                <p className={Styles.description}>{description}</p>
            </div>
        </div>
    )
}