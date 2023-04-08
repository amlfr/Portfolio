import styles from "./PopUp.module.scss";

interface propsType {
    id: string;
    name: string;
    description: string;
    source: string;
    liveLink?: string;
    picture: string;
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
                <h3>THIS IS A POP UP</h3>
                <button onClick={() => closePopUp(props.id)}>Close</button>
            </div>
        </div>
    );
};

export default PopUp;
