import styles from "./Home.module.scss";
import Image from "next/image";
import portfolioPhoto from "../../public/Images/portfolio-photo.png";
import arrowSvg from "../../public/svg/down-arrow-direction-svgrepo-com.svg";
import Button from "../Button/index";

const Home = () => {
    return (
        <section className={styles.hello}>
            <div className={styles.hello__wrapper}>
                <h2 className={styles.hello__title}>
                    ANTONY <br /> MARTINEZ--LALENEC
                </h2>
                <p className={styles.hello__text}>développeur web front-end</p>
                <Button text="Projets" target="#project" />
            </div>
            <div className={styles.hello__wrapperPhoto}>
                <Image
                    src={portfolioPhoto}
                    alt="Photo d'Antony Martinez--Lalenec"
                    className={styles.hello__photo}
                />
            </div>
            <div className={styles.hello__wrapperScroll}>
                <p className={styles["hello__text--scroll"]}>Scroll down</p>
                <Image
                    src={arrowSvg}
                    alt="Arrow pointed down, please scroll"
                    className={styles.hello__arrow}
                />
            </div>
        </section>
    );
};

export default Home;
