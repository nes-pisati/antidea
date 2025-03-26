import React, { useEffect, useState } from "react";
import Hero from "./hero/hero";
import Container from "../reusable/container/container";
import TextComponent from "../reusable/text-component/text-component";
import Gradient from "../reusable/gradient/gradient-component";
import Projects from "./projects/projects";
import ChiSiamo from "../reusable/chi-siamo/chi-siamo-component";
import Footer from "../reusable/footer/footer-component";

export default function HomepageComponent() {

    const [isFooterVisible, setIsFooterVisible] = useState(false);

    useEffect(() => {
        const footer = document.querySelector("#footer");
        const observer = new IntersectionObserver(([entry]) => {
            setIsFooterVisible(entry.isIntersecting)
        });

        if(footer) observer.observe(footer);
        return () => observer.disconnect();
    }, []);

    return (
        <>
            <Hero />
            <Container title={"Ant'dea"}>
                <TextComponent text={"Antidea. Un’idea prima dell’idea. Lampo. Intuizione. O un’idea contro l’idea. Contro l’idea consueta, contro il luogo comune. O, ancora, davanti alla dea, senza incertezza di fronte a ogni liturgia, a ogni devozione o convenienza. Antidea racconterà storie prima, contro e davanti. Le storie di tutti, semplici, a volte nascoste. Vere. Sempre."} 
                dimension={"big"}/>
            </Container>
            <Container title={"Progetti"}>
                <Projects />
            </Container>
            <Container title={"Chi siamo"}>
                <ChiSiamo name={"Paolo Guarnieri"} jobtitle={"Fotografo e Videomaker"}/>
                <ChiSiamo name={"Matteo Raineri"} jobtitle={"Videomaker"}/>
            </Container>
            <Container>
                <Footer/>
            </Container>
            <Gradient hide={isFooterVisible}/>
        </>
    )
}