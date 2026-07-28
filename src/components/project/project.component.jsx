import React, { useState, useEffect } from "react";
import Styles from "./project-component.module.css"
import Header from "../../components/project/header/header-component";
import TextComponent from "../../components/reusable/text-component/text-component"
import Gradient from "../reusable/gradient/gradient-component";
import Container from "../reusable/container/container";
import Footer from "../reusable/footer/footer-component";
import ProjectCard from "../reusable/project-card/project-card-component";
import ChiSiamo from "../reusable/chi-siamo/chi-siamo-component";
import VideoButton from "../reusable/video-button/video-button";
import Carousel from "./carousel/carousel-component";
import { useParams } from "react-router-dom";
import { getProgetto, getProgetti } from "../../api/wordpress";
import Spinner from "../reusable/spinner/spinner";
import PaypalButton from "../reusable/paypal-button/paypal-button";
import YoutubeVideo from "../reusable/youtube-video/youtube-video";

export default function ProjectComponent() {
    const [isFooterVisible, setIsFooterVisible] = useState(false);
    const [content, setContent] = useState(null);
    const [otherProjects, setOtherProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const param = useParams();

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            try {
                const slug = param.projectName.toLowerCase();
                const [progetto, tutti] = await Promise.all([
                    getProgetto(slug),
                    getProgetti()
                ]);
                setContent(progetto);
                setOtherProjects(tutti.filter(p => p.slug !== slug));
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [param.projectName]);

    useEffect(() => {
        const footer = document.querySelector("#footer");
        const observer = new IntersectionObserver(([entry]) => {
            setIsFooterVisible(entry.isIntersecting)
        });
        if (footer) observer.observe(footer);
        return () => observer.disconnect();
    }, []);

    if (loading) return <Spinner />;
    if (!content) return <div style={{ color: 'white', padding: '2rem' }}>Progetto non trovato.</div>;

    return (
        <>
            <Header title={content.title} description={content.location} bgImage={content.bgImage} />
            <div className={Styles.containerFirstText}>
                <div className={Styles.subtitle}>
                    <TextComponent text={content.subtitle} dimension={"small"} />
                </div>
                <PaypalButton />
            </div>
            <div className={Styles.videoContainer}>
                <YoutubeVideo url={content.videoUrl} title={content.title} />
            </div>
            <Container>
                <TextComponent text={content.maintext} dimension={"big"} />
            </Container>
            <Container>
                <TextComponent text={content.description} dimension={"small"} />
            </Container>
            <Carousel images={content.images} />
            <div className={Styles.missionVisionTeam}>
                <Container title={"La nostra mission"} color={"white"}>
                    <div className={Styles.padding}>
                        <TextComponent text={content.mission} dimension={"xsmall"} />
                    </div>
                </Container>
                <Container title={"La nostra vision"} color={"white"}>
                    <div className={Styles.padding}>
                        <TextComponent text={content.vision} dimension={"xsmall"} />
                    </div>
                </Container>
                <Container title={"Il nostro team"} color={"white"}>
                    <div className={`${Styles.chiSiamo} ${Styles.padding}`}>
                        <ChiSiamo name={"Paolo Guarneri"} jobtitle={"Fotografo e Videomaker"} color={"red"} size={"small"} />
                        <ChiSiamo name={"Matteo Raineri"} jobtitle={"Videomaker"} color={"red"} size={"small"} />
                        <ChiSiamo name={"Chiara Venegoni"} jobtitle={"Fotografa e Videomaker"} color={"red"} size={"small"} />
                    </div>
                </Container>
            </div>
            <div className={Styles.containerFirstText}>
                <div className={Styles.watch}>
                    <p className={Styles.watchText}>{content.closingText}</p>
                </div>
                <PaypalButton />
            </div>
            <Container title={"Altri progetti"} color={'white'}>
                <div className={Styles.projects}>
                    {otherProjects.map(project => (
                        <ProjectCard
                            key={project.slug}
                            title={project.title}
                            description={project.location}
                            background={project.bgImage}
                            slug={project.slug}
                        />
                    ))}
                </div>
            </Container>
            <Container>
                <Footer />
            </Container>
            <Gradient hide={isFooterVisible} />
        </>
    )
}