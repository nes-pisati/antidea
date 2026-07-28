import React, { useEffect, useState, useRef } from "react";
import Hero from "./hero/hero";
import Container from "../reusable/container/container";
import TextComponent from "../reusable/text-component/text-component";
import Gradient from "../reusable/gradient/gradient-component";
import Projects from "./projects/projects";
import ChiSiamo from "../reusable/chi-siamo/chi-siamo-component";
import Footer from "../reusable/footer/footer-component";
import ArticleCard from "../reusable/article-card/article-card.component";
import ArticleList from "../reusable/article-list/article-list-component";
import { useLocation } from "react-router-dom";

export default function HomepageComponent() {

    const [isFooterVisible, setIsFooterVisible] = useState(false);

    useEffect(() => {
        const footer = document.querySelector("#footer");
        const observer = new IntersectionObserver(([entry]) => {
            setIsFooterVisible(entry.isIntersecting)
        });

        if (footer) observer.observe(footer);
        return () => observer.disconnect();
    }, []);

    const chiSiamoRef = useRef(null);
    const progettiRef = useRef(null);
    const blogRef = useRef(null);

    const location = useLocation();

    useEffect(() => {
        if (location.state?.scrollTo) {
            const section = location.state.scrollTo;
            const refMap = {
                "chi-siamo": chiSiamoRef,
                "progetti": progettiRef,
                "blog": blogRef,
            };

            const targetRef = refMap[section];
            if (targetRef?.current) {
                setTimeout(() => {
                    targetRef.current.scrollIntoView({ behavior: "smooth" });
                }, 100);
            }
        }
    }, [location]);

    return (
        <>
            <Hero />
            <Container title={"Ant°dea"}>
                <TextComponent text={`Un’idea prima dell’idea. Lampo. Intuizione. O un’idea contro l’idea. Contro l’idea consueta, contro il luogo comune. <br>O, ancora, davanti alla dea, senza incertezza di fronte a ogni liturgia, a ogni devozione o convenienza. ANT°DEA racconterà storie (immagini e parole) prima, contro e davanti.
                <br>Le storie di tutti, a volte nascoste. Sempre.`}
                    dimension={"big"} />
            </Container>
            <Container ref={progettiRef} title={"Progetti"}>
                <Projects />
            </Container>
            <Container ref={chiSiamoRef} title={"Chi siamo"}>
                <p> Ant°dea è un collettivo indipendente di documentaristi composto da fotografi e videomaker professionisti,
                    nato con l’obiettivo di raccontare storie di valore in Italia e nel mondo.
                    Attraverso il linguaggio del documentario, della fotografia e della narrazione visiva, il collettivo promuove
                    consapevolezza e conoscenza, contrastando pregiudizi e convenzioni culturali e sociali.
                    <br></br><br></br>Nel corso degli anni Ant°dea ha sviluppato progetti in diversi contesti internazionali, tra cui Italia,
                    Olanda, Danimarca, Turchia, Siria, Bangladesh e numerosi Paesi africani, dando voce a realtà spesso poco
                    raccontate e favorendo uno sguardo autentico e partecipato sul presente.</p>
                    <div style={{ marginTop: "70px" }}>
                        <ChiSiamo name={"Chiara Venegoni"} jobtitle={"Fotografa e Videomaker"} />
                        <ChiSiamo name={"Matteo Sandrini"} jobtitle={"Videomaker e Editor"} />
                        <ChiSiamo name={"Paolo Guarneri"} jobtitle={"Fotografo e Videomaker"} />
                    </div>
            </Container>
            <Container ref={blogRef} id="blog" title={"Blog"} deletePaddingX={true}>
                <ArticleList />
            </Container>
            <Container>
                <Footer />
            </Container>
            <Gradient hide={isFooterVisible} />
        </>
    )
}