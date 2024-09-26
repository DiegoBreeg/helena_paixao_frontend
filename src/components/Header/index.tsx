import { Navbelt } from '../Navbelt';
import { Navshop } from '../Navshop';
import styles from './Header.module.css'


export function Header() {
    return (
       <header className={styles.header}>
            <Navbelt />
            <Navshop />
       </header>
    );
}
