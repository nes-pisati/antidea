import React from "react";
import Styles from "./chi-siamo-component.module.css"

export default function ChiSiamo({name, jobtitle}) {
    return (
        <div className={Styles.mobile}>
            <h2 className={Styles.name}>{name}</h2>
            <p className={Styles.description}>{jobtitle}</p>
        </div>
    )
}