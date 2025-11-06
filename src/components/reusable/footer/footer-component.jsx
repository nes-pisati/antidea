import React from "react";
import Styles from "./footer-component.module.css"

export default function Footer() {
    return (
        <div className={Styles.container} id="footer">
            <p className={Styles.text}>©Antidea 2025</p>
            <p className={Styles.text}>antidea.aps@gmail.com</p>
            <p className={Styles.text}>@antidea.aps</p>
        </div>
    )
}