import styles from "./Contact.module.scss";

const Contact = () => {
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const data = {
            fullname: event.currentTarget.fullname.value,
            email: event.currentTarget.email.value,
            subject: event.currentTarget.email.value,
            message: event.currentTarget.message.value,
        };
        console.log(data);

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
        console.log(result);
        alert(`Is this your full name: ${result.response}`);
    };
    return (
        <section className={styles.contact}>
            <h2>Contact</h2>
            <p>
                N&#39;hésitez pas a me laissez un message pour toute offre
                d&#39;emploi.
            </p>
            <form onSubmit={handleSubmit} className={styles.form}>
                <label htmlFor="fullname">Nom</label>
                <input
                    type="text"
                    name="fullname"
                    id="fullname"
                    className={styles.form__input}
                />
                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    name="email"
                    className={styles.form__input}
                />
                <label htmlFor="subject">Sujet</label>
                <input
                    type="text"
                    name="subject"
                    className={styles.form__input}
                />
                <label htmlFor="message">Message</label>
                <input
                    type="text"
                    name="message"
                    className={styles.form__input}
                />
                <button type="submit">Envoyez votre message</button>
            </form>
        </section>
    );
};

export default Contact;
