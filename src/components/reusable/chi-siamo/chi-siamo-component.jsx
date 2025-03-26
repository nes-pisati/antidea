import React from "react";
import Styles from "./chi-siamo-component.module.css"

export default function ChiSiamo({name, jobtitle, color, size}) {

    return (
        <div className={Styles.mobile}>
            <h2 className={`
            ${Styles.name}
            ${color === 'red' ? Styles.red : Styles.white}
            ${size === 'small' ? Styles.nameS : Styles.nameB}`}>{name}</h2>
            <p className={`
                ${Styles.description}
                ${size === 'small' ? Styles.descriptionS : Styles.descriptionB}`}>{jobtitle}</p>
        </div>
    )
}