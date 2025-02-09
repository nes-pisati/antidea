import React from "react";
import Styles from "./hero.module.css"
import image from "../../../assets/foto-home.png"
import logo from "../../../assets/logo.svg"

export default function Hero() {
    return (
        <>
            <div className={Styles.relative}>
                <img src={image} alt="fotografia di donne indiane" className={Styles.img}/>
                <div className={Styles.antidea}>
                    <img src={logo} alt="logo antidea" className={Styles.logo}/>
                </div>
                <div className={Styles.discovermore}>
                    <p>Scopri di più</p>
                </div>
            </div>
        </>
    )
}