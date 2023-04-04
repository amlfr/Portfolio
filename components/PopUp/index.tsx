import styles from "./PopUp.module.scss";

const PopUp = () => {
    return (
        <div className={styles.background}>
            <div className={styles.popup}>
                <h3>THIS IS A POP UP</h3>
                <button>Close</button>
            </div>
        </div>
    );
};

export default PopUp;
