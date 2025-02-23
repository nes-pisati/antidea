import React from "react";
import Styles from "./container.module.css"

export default function Container({title, children}) {
    return(
        <div className={Styles.container}>
            <p className={Styles.title}>{title}</p>
            {children}
        </div>
    )
}