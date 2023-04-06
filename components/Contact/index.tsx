import styles from "./Contact.module.scss";

const Contact = () => {
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        //handling the data and making the request
        const data = {
            fullname: event.currentTarget.fullname.value,
            email: event.currentTarget.email.value,
            subject: event.currentTarget.email.value,
            message: event.currentTarget.message.value,
        };

        const JSONdata = JSON.stringify(data);

        const endpoint = "api/form";

        const options = {
            method: "POST",

            headers: {
                "Content-Type": "application/json",
            },
            body: JSONdata,
        };

        const response = await fetch(endpoint, options);

        const result = await response.json();
        alert(`${result.response}`);
    };
    return (
        <section className={styles.contact}>
            <div className={styles.contact__wrapper}>
                <h2 className={styles.contact__title}>Contact</h2>
                <p className={styles.contact__text}>
                    N&#39;hésitez pas a me laissez un message pour toute offre
                    d&#39;emploi.
                </p>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <input
                        type="text"
                        name="fullname"
                        className={styles.form__input}
                        placeholder="Nom"
                    />
                    <input
                        type="text"
                        name="email"
                        className={styles.form__input}
                        placeholder="Adresse email"
                    />
                    <input
                        type="text"
                        name="subject"
                        className={styles.form__input}
                        placeholder="Sujet"
                    />
                    <textarea
                        name="message"
                        className={`${styles.form__input} ${styles.form__message}`}
                        placeholder="Votre message..."
                    />
                    <button type="submit" className={styles.form__submit}>
                        Envoyez votre message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
