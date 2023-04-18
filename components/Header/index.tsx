import styles from "./Header.module.scss";
import Image from "next/image";
import logo from "../../public/favicon.ico";

const Header = () => {
    return (
        <header className={styles.container}>
            <Image src={logo} alt="logo du site" className={styles.logo} />
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
                        <a href="#contact" className={styles.link}>
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
