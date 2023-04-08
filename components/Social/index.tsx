import styles from "./Social.module.scss";
import Image from "next/image";
import githubSvg from "../../public/svg/github-mark.svg";
import linkedinSvg from "../../public/svg/linkedin-svgrepo-com.svg";

const Social = () => {
    return (
        <div className={styles.wrapper}>
            <a href="https://github.com/amlfr" target="blank">
                <Image
                    src={githubSvg}
                    alt="github logo with link"
                    className={styles.link}
                />
            </a>
            <a href="https://www.linkedin.com/in/amlfr/" target="blank">
                <Image
                    src={linkedinSvg}
                    alt="linkedin logo with link"
                    className={styles.link}
                />
            </a>
        </div>
    );
};

export default Social;
