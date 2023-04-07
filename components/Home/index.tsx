import styles from "./Home.module.scss";
import Image from "next/image";
import portfolioPhoto from "../../public/images/portfolio-photo.png";
import arrowSvg from "../../public/svg/down-arrow-direction-svgrepo-com.svg";
import Button from "../Button/index";

const Home = () => {
    return (
        <section className={styles.section}>
            <div className={styles.textWrapper}>
                <h1 className={styles.header}>
                    ANTONY <br /> MARTINEZ--LALENEC
                </h1>
                <p className={styles.text}>développeur web front-end</p>
                <Button text="Projets" target="#project" />
            </div>
            <div className={styles.photoWrapper}>
                <Image
                    src={portfolioPhoto}
                    alt="Photo d'Antony Martinez--Lalenec"
                    className={styles.photo}
                />
            </div>
            <div className={styles.scrollWrapper}>
                <p className={styles.scrollText}>Scroll down</p>
                <Image
                    src={arrowSvg}
                    alt="Arrow pointed down, please scroll"
                    className={styles.arrow}
                />
            </div>
        </section>
    );
};

export default Home;
