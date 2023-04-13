import styles from "./PopUp.module.scss";
import Image from "next/image";

interface propsType {
    id: string;
    name: string;
    description: string;
    source: string;
    liveLink?: string;
    picture: string[];
}

const PopUp = (props: propsType) => {
    const closePopUp = (event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();
        console.log("up the tree");
        const popUp = document.querySelector("#" + props.id) as Element;
        popUp.classList.remove("visible");
    };

    return (
        <div className={styles.background} id={props.id} onClick={closePopUp}>
            <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
                <Image
                    src={props.picture[1]}
                    width={1920}
                    height={1080}
                    alt={`Prise d'écran du projet ${props.name}`}
                    className={styles.screenshot}
                />
                <p className={styles.text}>{props.description}</p>
                <div className={styles.linkWrapper}>
                    {props.liveLink ? (
                        <a
                            href={props.liveLink}
                            target="_blank"
                            className={styles.link}
                        >
                            Visiter le site
                        </a>
                    ) : null}
                    <a
                        href={props.source}
                        target="_blank"
                        className={styles.link}
                    >
                        Code source
                    </a>
                </div>
            </div>
        </div>
    );
};

export default PopUp;
