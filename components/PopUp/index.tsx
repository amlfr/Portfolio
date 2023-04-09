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

const closePopUp = (target: string) => {
    const popUp = document.querySelector("#" + target) as Element;
    popUp.classList.remove("visible");
};

const PopUp = (props: propsType) => {
    return (
        <div
            className={styles.background}
            id={props.id}
            onClick={() => closePopUp(props.id)}
        >
            <div className={styles.popup}>
                <Image
                    src={props.picture[1]}
                    width={1920}
                    height={1080}
                    alt={`Prise d'écran du projet ${props.name}`}
                />
                <h3>THIS IS A POP UP</h3>
            </div>
        </div>
    );
};

export default PopUp;
