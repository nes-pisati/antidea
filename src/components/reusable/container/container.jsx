import React from "react";
import Styles from "./container.module.css"

export default function Container({title, children, color}) {

    let colorClass;

    switch (color) {
        case "red":
            colorClass = Styles.red;
            break;
        case "white":
            colorClass = Styles.white;
            break;
        default:
            colorClass = Styles.red
    }

    return(
        <div className={Styles.container}>
            <p className={`${Styles.title} ${colorClass}`}>{title}</p>
            {children}
        </div>
    )
}