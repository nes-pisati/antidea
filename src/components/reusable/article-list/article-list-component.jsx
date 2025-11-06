import Styles from "./article-list-component.module.css"
import ArticleCard from "../article-card/article-card.component";
import { articles } from "../../../assets/_articles";

export default function ArticleList() {
    return (
        <div className={Styles.projectsContainer}>
            <div className={Styles.carousel}>
                {articles.map(article => {
                    return <ArticleCard
                        title={article.title}
                        subtitle={article.cardSubtitle}
                        backgroud={article.cardImg}
                    />
                })}
            </div>
        </div>
    )
}