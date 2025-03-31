import React from "react";
import Styles from "./header-component.module.css"
import Logo from "../../../assets/logo.svg"
import ProjectInfos from "../../reusable/project-infos/project.infos-component"
import VideoButton from "../../reusable/video-button/video-button";
import { Link } from 'react-router-dom';


export default function Header({title, description, bgImage}) {
    const style = {
        backgroundImage: `url(${bgImage})`
      };

    return (
        <div className={Styles.mainContainer} style={style}>
            <div className={Styles.container}>
                <Link to={"/"}>
                    <img src={Logo} alt="Logo Antidea" className={Styles.logo} />
                </Link>
                <div className={Styles.containerFooter}>
                    <div>
                        <ProjectInfos title={title} description={description} />
                    </div>
                    <div className={Styles.btn}>
                        <VideoButton />
                    </div>
                </div>
            </div>
        </div>
    )
}