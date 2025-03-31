import React, { useState, useEffect } from "react";
import Styles from "./project-component.module.css"
import Header from "../../components/project/header/header-component";
import TextComponent from "../../components/reusable/text-component/text-component"
import Gradient from "../reusable/gradient/gradient-component";
import Container from "../reusable/container/container";
import Footer from "../reusable/footer/footer-component";
import KilisBg from "../../../src/assets/kilis-card.png";
import RebelsBg from "../../../src/assets/rebels-card.png";
import ProjectCard from "../reusable/project-card/project-card-component";
import ChiSiamo from "../reusable/chi-siamo/chi-siamo-component";
import VideoButton from "../reusable/video-button/video-button";
import Carousel from "./carousel/carousel-component";
import { rebels, kilis } from "../../assets/content";
import { useParams } from "react-router-dom";

export default function ProjectComponent() {
    const [isFooterVisible, setIsFooterVisible] = useState(false);
    const param = useParams();

    const content = param.projectName === 'rebels' ? rebels : kilis

    useEffect(() => {
        const footer = document.querySelector("#footer");
        const observer = new IntersectionObserver(([entry]) => {
            setIsFooterVisible(entry.isIntersecting)
        });

        if (footer) observer.observe(footer);
        return () => observer.disconnect();
    }, []);

    return (
        <>
            <Header title={content.title} description={content.location} bgImage={content.bgImage}/>
            <div className={Styles.videoBtnMobile}>
                <Container>
                    <VideoButton />
                </Container>
            </div>
            <div className={Styles.containerFirstText}>
                <TextComponent text={content.subtitle} dimension={"small"} />
            </div>
            <Container>
                <TextComponent text={content.mainText} dimension={"big"} />
            </Container>
            <Container>
                <TextComponent text={content.description} dimension={"small"} />
            </Container>
            <Carousel images={[content.imageOne, content.imageTwo]}/>
            <div className={Styles.missionVisionTeam}>
                <Container title={"La nostra mission"} color={"white"}>
                    <div className={Styles.padding}>
                        <TextComponent text={content.mission}
                            dimension={"xsmall"} />
                    </div>
                </Container>
                <Container title={"La nostra vision"} color={"white"}>
                    <div className={Styles.padding}>
                        <TextComponent text={content.vision}
                            dimension={"xsmall"} />
                    </div>

                </Container>
                <Container title={"Il nostro team"} color={"white"}>
                    {/* <div className={[Styles.padding, Styles.chiSiamo]}> */}
                    <div className={`${Styles.chiSiamo} ${Styles.padding}`}>
                        <ChiSiamo name={"Paolo Guarnieri"} jobtitle={"Fotografo e Videomaker"} color={"red"} size={"small"} />
                        <ChiSiamo name={"Matteo Raineri"} jobtitle={"Videomaker"} color={"red"} size={"small"} />
                        <ChiSiamo name={"Paolo Guarnieri"} jobtitle={"Fotografo e Videomaker"} color={"red"} size={"small"} />
                    </div>

                </Container>
            </div>
            <Container>
                <div className={Styles.watch}>
                    <p className={Styles.watchText}>{content.closingText}</p>
                    <VideoButton />
                </div>
            </Container>
            <Container title={"Altri progetti"}>
                <div className={Styles.projects}>
                    {param.projectName === 'rebels' ? 
                    <ProjectCard title={"Kilis"} description={"Siria"} background={KilisBg} /> :
                    <ProjectCard title={"Rebels"} description={"Bangladesh"} background={RebelsBg} /> 
                    }
                </div>
            </Container>
            <Container>
                <Footer />
            </Container>
            <Gradient hide={isFooterVisible} />
        </>
    )
}