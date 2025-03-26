import React from "react";
import Styles from "./text-component.module.css"

export default function TextComponent({ text, dimension }) {

    let textClass;

    switch (dimension){
        case "big":
            textClass = Styles.textBig;
            break;
        case "medium":
            textClass = Styles.textMedium;
            break;
        case "small":
            textClass = Styles.textSmall;
            break;
        case "xsmall":
            textClass = Styles.textXSmall;
            break;
        default:
            textClass = Styles.textMedium;
    }

    return (
        <div>
            <p className={textClass}>
                {text}
            </p>
        </div>
    )
}