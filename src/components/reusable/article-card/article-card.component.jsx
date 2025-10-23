import { Link } from "react-router-dom";
import Styles from "./article-card.component.module.css"

export default function ArticleCard({ title, subtitle, backgroud }) {

    function slugify(title) {
        return title
            .toLowerCase()
            .trim()
            .replace(/\s+/g, '-');
    }


    const articleTitle = slugify(title)

    return (
        <>
            <Link to={`/article/${articleTitle}`} className={Styles.link}>
                <div className={Styles.mainContainer}>
                    <div className={Styles.cardContainer}>
                        <img src={backgroud} alt="" className={Styles.image} />
                        <div className={Styles.titleContainer}>
                            <h2 className={Styles.title}>{title}</h2>
                        </div>
                    </div>
                    <div>
                        <h6 className={Styles.subtitle}>{subtitle}</h6>
                    </div>
                </div>
            </Link>
        </>
    )
}