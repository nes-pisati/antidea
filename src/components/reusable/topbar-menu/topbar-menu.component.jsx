import { Link, useNavigate } from "react-router-dom";
import Styles from "./topbar-menu.module.css";
import Logo from "../../../assets/logo.svg";

export default function TopbarMenu() {
    const navigate = useNavigate();

    const handleNavigate = (section) => {
        navigate("/", { state: { scrollTo: section } });
    };

    return (
        <div className={Styles.container}>
            <Link to={"/"} className={Styles.logoContainer}>
                <img src={Logo} alt="Logo Antidea" className={Styles.logo} />
            </Link>
            <ul>
                <li onClick={() => handleNavigate("chi-siamo")}>Chi siamo</li>
                <li onClick={() => handleNavigate("progetti")}>Progetti</li>
                <li onClick={() => handleNavigate("blog")}>Blog</li>
            </ul>
        </div>
    );
}
