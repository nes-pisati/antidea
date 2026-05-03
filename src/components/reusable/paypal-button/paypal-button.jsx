import React, { useState } from "react";
import Styles from "./paypal-button.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-regular-svg-icons'
import { Dialog } from 'primereact/dialog';
import PayPalLogo from "../../../assets/paypal-16.png"

export default function PaypalButton() {

    const [visible, setVisible] = useState(false)

    return (
        <>
            <button className={Styles.container} onClick={() => setVisible(true)}>
                <div className={Styles.elements}>
                    <img src={PayPalLogo} alt="paypal-logo"/>
                    Supporta Ant*dea
                </div>
            </button>

            {/* <Dialog
                visible={visible}
                className={Styles.dialog}
                headerStyle={{ backgroundColor: "black", color: "white" }}
                contentStyle={{ backgroundColor: "black", color: "white" }}
                onHide={() => { if (!visible) return; setVisible(false); }}
                closable={true}>
                <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/watch?v=Jo07YIB3HBU"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                >
                </iframe>
            </Dialog> */}
        </>
    )
}