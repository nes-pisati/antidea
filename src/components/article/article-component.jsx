import { useParams } from "react-router-dom";
import TextComponent from "../reusable/text-component/text-component";
import Carousel from "../project/carousel/carousel-component";
import Styles from "./article-component.module.css"
import Container from "../reusable/container/container";
import ArticleList from "../reusable/article-list/article-list-component";
import Logo from "../../assets/logo.svg"
import { Link } from 'react-router-dom';
import TopbarMenu from "../reusable/topbar-menu/topbar-menu.component";


export default function ArticleComponent() {

    const { title } = useParams();

    const style = {
        backgroundImage: `url("https://picsum.photos/1000/600")`,
    };

    const titolo = title.replace(/-/g, ' ')

    const image = "https://picsum.photos/1000/900";

    return (
        <>
            <div className={Styles.mainContainer} style={style}>
                <div className={Styles.container}>
                    {/* <Link to={"/"}>
                        <img src={Logo} alt="Logo Antidea" className={Styles.logo} />
                    </Link> */}
                    <TopbarMenu />
                    <h4 className={Styles.title}>{titolo}</h4>
                </div>
            </div>
            <Container>
                <TextComponent text={"In Bangladesh il 17% delle donne è costretta a sposarsi prima dei 15 anni, più del 50% si sposa prima dei 18 anni. L'80% di esse ha già un figlio prima di compiere 20 anni."} dimension={"big"} />
                <div className={Styles.textWrapper}>
                    <TextComponent text={"Rebels è la testimonianza di come questi macro problemi siano superabiligrazie all’istruzione, alla determinazione e alla disobbedienza allo status quodominante. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."} dimension={"small"} />
                </div>
            </Container>

            <Carousel images={[image, image]} />

            <Container>
                <div className={Styles.textWrapper}>
                    <TextComponent text={"Rebels è la testimonianza di come questi macro problemi siano superabiligrazie all’istruzione, alla determinazione e alla disobbedienza allo status quodominante. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."} dimension={"small"} />
                </div>

            </Container>


            <Container title={"Blog"} deletePaddingX={true}>
                <ArticleList />
            </Container>
        </>
    )
}