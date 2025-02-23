import React from "react";
import Styles from "./footer-component.module.css"

export default function Footer() {
    return (
        <div className={Styles.container} id="footer">
            <p className={Styles.text}>©Antidea 2025</p>
            <p className={Styles.text}>paolo@alpacavisual.it</p>
            <p className={Styles.text}>+39 3932440226</p>
        </div>
    )
}