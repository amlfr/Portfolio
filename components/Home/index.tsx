import styles from "./Home.module.scss";
import Image from "next/image";
import portfolioPhoto from "../../public/images/portfolio-photo.png";
import arrowSvg from "../../public/svg/down-arrow-direction-svgrepo-com.svg";
import Button from "../Button/index";

const Home = () => {
    return (
        <section className={styles.home}>
            <div className={styles.home__wrapper}>
                <h2 className={styles.home__title}>
                    ANTONY <br /> MARTINEZ--LALENEC
                </h2>
                <p className={styles.home__text}>développeur web front-end</p>
                <Button text="Projets" target="#project" />
            </div>
            <div className={styles.home__wrapperPhoto}>
                <Image
                    src={portfolioPhoto}
                    alt="Photo d'Antony Martinez--Lalenec"
                    className={styles.home__photo}
                />
            </div>
            <div className={styles.home__wrapperScroll}>
                <p className={styles["home__text--scroll"]}>Scroll down</p>
                <Image
                    src={arrowSvg}
                    alt="Arrow pointed down, please scroll"
                    className={styles.home__arrow}
                />
            </div>
        </section>
    );
};

export default Home;
