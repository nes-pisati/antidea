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

        if(footer) observer.observe(footer);
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
            <Container title={"Ant*dea"}>
                <TextComponent text={"Antidea. Un’idea prima dell’idea. Lampo. Intuizione. O un’idea contro l’idea. Contro l’idea consueta, contro il luogo comune. O, ancora, davanti alla dea, senza incertezza di fronte a ogni liturgia, a ogni devozione o convenienza. Antidea racconterà storie prima, contro e davanti. Le storie di tutti, semplici, a volte nascoste. Vere. Sempre."} 
                dimension={"big"}/>
            </Container>
            <Container ref={progettiRef} title={"Progetti"}>
                <Projects />
            </Container>
            <Container ref={chiSiamoRef} title={"Chi siamo"}>
                <p>Ant*dea è un collettivo di documentaristi, crediamo nel potere delle storie vere da raccontare.</p>
                <ChiSiamo name={"Paolo Guarneri"} jobtitle={"Fotografo e Videomaker"}/>
                <ChiSiamo name={"Matteo Sandrini"} jobtitle={"Videomaker e Editor"}/>
                <ChiSiamo name={"Chiara Venegoni"} jobtitle={"Fotografa e Videomaker"}/>
                <ChiSiamo name={"Matteo Raineri"} jobtitle={"Videomaker e Editor"}/>
                <ChiSiamo name={"Tommaso Ruggeri"} jobtitle={"Sound designer e Compositore"}/>
                <ChiSiamo name={"Margherita Marzaduri"} jobtitle={"Editor"}/>
                <ChiSiamo name={"Damiano Targhettini"} jobtitle={"Graphic Designer"}/>
            </Container>
            <Container ref={blogRef} id="blog" title={"Blog"} deletePaddingX={true}>
                <ArticleList />
            </Container>
            <Container>
                <Footer/>
            </Container>
            <Gradient hide={isFooterVisible}/>
        </>
    )
}