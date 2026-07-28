import React, { useState } from "react";
import Styles from "./paypal-button.module.css"
import { Dialog } from 'primereact/dialog';
import PayPalLogo from "../../../assets/paypal-16.png"

export default function PaypalButton() {

    const [visible, setVisible] = useState(false)

    return (
        <>
            <button className={Styles.container} onClick={() => setVisible(true)}>
                <div className={Styles.elements}>
                    <img src={PayPalLogo} alt="paypal-logo"/>
                    Supporta Ant°dea
                </div>
            </button>

            <Dialog
                visible={visible}
                className={Styles.dialog}
                headerStyle={{ backgroundColor: "black", color: "white" }}
                contentStyle={{ backgroundColor: "black", color: "white" }}
                onHide={() => { if (!visible) return; setVisible(false); }}
                closable={true}>
                <div className={Styles.ctaContent}>
                    <img src={PayPalLogo} alt="paypal-logo" className={Styles.ctaLogo} />
                    <h2 className={Styles.ctaTitle}>Supporta Ant°dea</h2>
                    <p className={Styles.ctaText}>
                        Il tuo contributo ci aiuta a portare avanti il progetto. Grazie di cuore!
                    </p>
                    <a
                        href="https://paypal.me/antidea"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={Styles.ctaLink}
                    >
                        <img src={PayPalLogo} alt="paypal-logo" />
                        Dona con PayPal
                    </a>
                </div>
            </Dialog>
        </>
    )
}