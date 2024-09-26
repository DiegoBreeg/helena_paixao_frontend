import { Navbelt } from '../Navbelt';
import styles from './Header.module.css'


export function Header() {
    return (
       <header className={styles.header}>
            <Navbelt />
       </header>
    );
}
