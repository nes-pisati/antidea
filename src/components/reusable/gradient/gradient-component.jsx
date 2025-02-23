import React from "react";
import Styles from "./gradient-component.module.css"

export default function Gradient({ hide }){
    return (
        <div className={`${Styles.gradient} ${hide ? Styles.hide : ''}`}></div>
    )
}