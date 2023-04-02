import styles from "./Button.module.scss";

const Button = (props: { text: string; target: string }) => {
    return (
        <div className={styles.wrapper}>
            <a href={props.target} className={styles.link}>
                <p className={styles.text}>{props.text}</p>
            </a>
        </div>
    );
};

export default Button;
