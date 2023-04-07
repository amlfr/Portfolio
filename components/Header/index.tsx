import styles from "./Header.module.scss";

const Header = () => {
    return (
        <header className={styles.container}>
            <p className={styles.header}>AMLFR</p>
            <nav>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <a href="#home" className={styles.link}>
                            A propos
                        </a>
                    </li>
                    <li className={styles.item}>
                        <a href="#project" className={styles.link}>
                            Projets
                        </a>
                    </li>
                    <li className={styles.item}>
                        <a href="#" className={styles.link}>
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
