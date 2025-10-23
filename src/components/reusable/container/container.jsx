import React, { forwardRef } from "react";
import Styles from "./container.module.css"

const Container = forwardRef(({ title, children, color }, ref) => {

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
        <div ref={ref} className={Styles.container}>
            <p className={`${Styles.title} ${colorClass}`}>{title}</p>
            {children}
        </div>
    )
})

export default Container;