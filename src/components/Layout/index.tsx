import styles from './Layout.module.css'
import { Header } from '../Header'
import { Footer } from '../Footer'
import { Main } from '../Main'

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