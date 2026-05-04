import { useState, useEffect } from "react";
import Styles from "./article-list-component.module.css"
import ArticleCard from "../article-card/article-card.component";
import { getEventi } from "../../../api/wordpress";

export default function ArticleList() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        getEventi()
            .then(setArticles)
            .catch(err => console.error(err));
    }, []);

    return (
        <div className={Styles.projectsContainer}>
            <div className={Styles.carousel}>
                {articles.map(article => (
                    <ArticleCard
                        key={article.slug}
                        title={article.title}
                        subtitle={article.cardSubtitle}
                        backgroud={article.cardImg}
                        slug={article.slug}
                    />
                ))}
            </div>
        </div>
    )
}

// import Styles from "./article-list-component.module.css"
// import ArticleCard from "../article-card/article-card.component";
// import { articles } from "../../../assets/_articles";

// export default function ArticleList() {
//     return (
//         <div className={Styles.projectsContainer}>
//             <div className={Styles.carousel}>
//                 {articles.map(article => {
//                     return <ArticleCard
//                         title={article.title}
//                         subtitle={article.cardSubtitle}
//                         backgroud={article.cardImg}
//                     />
//                 })}
//             </div>
//         </div>
//     )
// }