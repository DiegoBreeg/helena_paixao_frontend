import styles from "./Layout.module.css"
import { Footer } from "../Footer";
import { Header } from "../Header";
import { Main } from "../Main";

export function Layout()
{
    return (
        <div className={styles.layout}>
            <Header />
            <Main />
            <Footer />
        </div>
    )
}