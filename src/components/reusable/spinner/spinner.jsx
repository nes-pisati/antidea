import Styles from "./spinner.module.css";

export default function Spinner() {
    return (
        <div className={Styles.wrapper}>
            <div className={Styles.spinner} />
        </div>
    );
}
