import styles from "./Header.module.scss";

const Header = () => {
    return (
        <header className={styles.header}>
            <h1 className={styles.header__title}>AMLFR</h1>
            <nav className={styles.navbar}>
                <ul className={styles.navbar__list}>
                    <li className={styles.navbar__item}>
                        <a href="#home" className={styles.navbar__link}>
                            A propos
                        </a>
                    </li>
                    <li className={styles.navbar__item}>
                        <a href="#project" className={styles.navbar__link}>
                            Projets
                        </a>
                    </li>
                    <li className={styles.navbar__item}>
                        <a href="#" className={styles.navbar__link}>
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
