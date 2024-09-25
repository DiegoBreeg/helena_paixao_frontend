import styles from './Header.module.css';
import logo from '../../assets/images/logo.png'; // Ajuste o caminho conforme necessário

export function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.left}>
                <img src={logo} alt='Logo' className={styles.logo} />
            </div>
            <div className={styles.middle}>
                <input type="text" placeholder="Buscar..." className={styles.searchbar} />
            </div>
            <nav className={styles.right}>
                <a href="/">Home</a>
                <a href="/produtos">Produtos</a>
                <a href="/sobre">Sobre</a>
                <a href="/contato">Contato</a>
            </nav>
        </header>
    );
}
