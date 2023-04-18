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
        <section className={styles.section} id="contact">
            <div className={styles.wrapper}>
                <h2 className={styles.header}>Contact</h2>
                <p className={styles.text}>
                    N&#39;hésitez pas a me laissez un message pour toute offre
                    d&#39;emploi.
                </p>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <input
                        type="text"
                        name="fullname"
                        className={styles.input}
                        placeholder="Nom"
                    />
                    <input
                        type="text"
                        name="email"
                        className={styles.input}
                        placeholder="Adresse email"
                    />
                    <input
                        type="text"
                        name="subject"
                        className={styles.input}
                        placeholder="Sujet"
                    />
                    <textarea
                        name="message"
                        className={`${styles.input} ${styles.message}`}
                        placeholder="Votre message..."
                    />
                    <button type="submit" className={styles.button}>
                        Envoyez votre message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
