import styles from "./About.module.scss";

const About = () => {
    // List skills here
    const skillsArray = [
        "Javascript",
        "React",
        "Sass",
        "Express",
        "Node",
        "MongoDB",
        "HTML5",
        "CSS",
    ];

    const createTags = skillsArray.map((skill: string, index: number) => (
        <div key={index}>
            <p>{skill}</p>
        </div>
    ));

    return (
        <section className={styles.about}>
            <div className={styles.bio}>
                <h2 className={styles.header}>A propos</h2>
                <p className={styles.bio__text}>
                    Je suis en cours de réorientation dans le domaine du
                    développement et j&#39;ai récemment complété une formation
                    bac+2 de développeur web. Je suis désormais à la recherche
                    d&#39;une entreprise pour commencer un contrat
                    d&#39;alternance de 2 ans pour me spécialiser dans le
                    front-end et peut être explorer le stack dans son entièreté.
                </p>
                <p className={styles.bio__text}>
                    Grace à une bonne maîtrise de l&#39;outil informatique et un
                    niveau C1 en anglais, je suis capable d&#39;être efficace et
                    autonome dans mon processus d&#39;apprentissage ainsi que
                    mes projets personnels et professionnels.
                </p>
                <p className={styles.bio__text}>
                    De nature calme et possédant un bon esprit logique, je
                    deviendrai rapidement un membre productif au sein d&#39;un
                    groupe de développeurs.
                </p>
            </div>
            <div className={styles.skill}>
                <h2 className={styles.header}>Compétences</h2>
                <div className={styles.skill__container}>{createTags}</div>
            </div>
        </section>
    );
};

export default About;
