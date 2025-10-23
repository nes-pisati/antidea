import Styles from "./article-list-component.module.css"
import ArticleCard from "../article-card/article-card.component";

export default function ArticleList() {
    return (
        <div className={Styles.projectsContainer}>
            <div className={Styles.carousel}>
                <ArticleCard
                    title={"Articolo"}
                    subtitle={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia error fuga possimus neque et magnam unde quod facilis at. Impedit nulla dolorem ipsa consequuntur libero! Quos voluptatem eius est eum."}
                    backgroud={"https://picsum.photos/200/300"}
                />
                <ArticleCard
                    title={"Ciao"}
                    subtitle={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia error fuga possimus neque et magnam unde quod facilis at. Impedit nulla dolorem ipsa consequuntur libero! Quos voluptatem eius est eum."}
                    backgroud={"https://picsum.photos/200/300"}
                />
                <ArticleCard
                    title={"Beluga"}
                    subtitle={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia error fuga possimus neque et magnam unde quod facilis at. Impedit nulla dolorem ipsa consequuntur libero! Quos voluptatem eius est eum."}
                    backgroud={"https://picsum.photos/200/300"}
                />
                <ArticleCard
                    title={"Titolo molto molto molto molto lungo"}
                    subtitle={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia error fuga possimus neque et magnam unde quod facilis at. Impedit nulla dolorem ipsa consequuntur libero! Quos voluptatem eius est eum."}
                    backgroud={"https://picsum.photos/200/300"}
                />
            </div>

        </div>
    )
}