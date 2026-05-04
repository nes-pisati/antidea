import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import TextComponent from "../reusable/text-component/text-component";
import Styles from "./article-component.module.css"
import Container from "../reusable/container/container";
import TopbarMenu from "../reusable/topbar-menu/topbar-menu.component";
import ArticleCard from "../reusable/article-card/article-card.component";
import { getEventi } from "../../api/wordpress";

export default function ArticleComponent() {
    const { title } = useParams();
    const [article, setArticle] = useState(null);
    const [otherArticles, setOtherArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            try {
                const tutti = await getEventi();
                const slug = title.toLowerCase();
                const current = tutti.find(a => a.slug === slug);
                setArticle(current);
                setOtherArticles(tutti.filter(a => a.slug !== slug));
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [title]);

    if (loading) return <div style={{ color: 'white', padding: '2rem' }}>Caricamento...</div>;
    if (!article) return <div style={{ color: 'white', padding: '2rem' }}>Articolo non trovato.</div>;

    const style = {
        backgroundImage: `url(${article.cardImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    return (
        <>
            <div className={Styles.mainContainer} style={style}>
                <div className={Styles.container}>
                    <TopbarMenu />
                    <h4 className={Styles.title}>{article.title}</h4>
                </div>
            </div>
            <Container>
                <TextComponent text={article.mainText} dimension={"big"} />
                <div className={Styles.textWrapper}>
                    <TextComponent text={article.secondaryText} dimension={"small"} />
                </div>
                <img src={article.cardImg} className={Styles.image} />
                <div className={Styles.textWrapper}>
                    <TextComponent text={article.closingText} dimension={"small"} />
                </div>
            </Container>
            <Container title={"Blog"} deletePaddingX={true}>
                {otherArticles.map(a => (
                    <ArticleCard
                        key={a.slug}
                        title={a.title}
                        subtitle={a.cardSubtitle}
                        backgroud={a.cardImg}
                        slug={a.slug}
                    />
                ))}
            </Container>
        </>
    )
}

// import { useParams } from "react-router-dom";
// import TextComponent from "../reusable/text-component/text-component";
// import Carousel from "../project/carousel/carousel-component";
// import Styles from "./article-component.module.css"
// import Container from "../reusable/container/container";
// import Logo from "../../assets/logo.svg"
// import { Link } from 'react-router-dom';
// import TopbarMenu from "../reusable/topbar-menu/topbar-menu.component";
// import { articles } from "../../assets/_articles";
// import ArticleCard from "../reusable/article-card/article-card.component";

// export default function ArticleComponent() {

//     const { title } = useParams();

//     const titolo = title.replace(/-/g, ' ')

//     const article = articles.find(a => a.title.toLowerCase() === titolo.toLowerCase());
//     const otherArticles = articles.filter(a => a.title.toLowerCase() != titolo.toLowerCase());

//     const style = {
//         backgroundImage: `url(${article.cardImg})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//     };

//     return (
//         <>
//             <div className={Styles.mainContainer} style={style}>
//                 <div className={Styles.container}>
//                     {/* <Link to={"/"}>
//                         <img src={Logo} alt="Logo Antidea" className={Styles.logo} />
//                     </Link> */}
//                     <TopbarMenu />
//                     <h4 className={Styles.title}>{article.title}</h4>
//                 </div>
//             </div>
//             <Container>
//                 <TextComponent text={article.mainText} dimension={"big"} />
//                 <div className={Styles.textWrapper}>
//                     <TextComponent text={article.secondaryText} dimension={"small"} />
//                 </div>

//                 <img src={article.cardImg} className={Styles.image} />

//                 <div className={Styles.textWrapper}>
//                     <TextComponent text={article.closingText} dimension={"small"} />
//                 </div>
//             </Container>

//             <Container title={"Blog"} deletePaddingX={true}>
//                 {otherArticles.map(article => {
//                     return <ArticleCard
//                         title={article.title}
//                         subtitle={article.cardSubtitle}
//                         backgroud={article.cardImg}
//                     />
//                 })}
//             </Container>
//         </>
//     )
// }