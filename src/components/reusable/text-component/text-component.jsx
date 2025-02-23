import React from "react";
import Styles from "./text-component.module.css"

export default function TextComponent({ text }) {
    return (
        <div>
            <p className={Styles.text}>
                {text}
            </p>
        </div>
    )
}