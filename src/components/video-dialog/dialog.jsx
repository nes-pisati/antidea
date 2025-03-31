import React, { useState } from "react";
import  Styles from "./dialog.module.css"
import { Dialog } from 'primereact/dialog';

export default function VideoDialog({isVisible}) {

    const [visible, setVisible] = useState(isVisible)

    return (
        <Dialog
            visible={isVisible}
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
        </Dialog>
    )
}

