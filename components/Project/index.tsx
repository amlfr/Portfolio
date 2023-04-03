import styles from "./Project.module.scss";
import Image from "next/image";

export interface ProjectType {
    name: string;
    description: string;
    source: string;
    liveLink?: string;
    picture: string;
}

const ProjectList: Array<ProjectType> = [
    {
        name: "Portfolio",
        description: "Site vitrine réalisé avec next.js et typescript",
        source: "github whatever",
        liveLink: "www.jsuislive",
        picture: "/images/portfolio-printscreen.png",
    },
    {
        name: "Portfolio",
        description: "Site vitrine réalisé avec next.js et typescript",
        source: "github whatever",
        liveLink: "www.jsuislive",
        picture: "/images/portfolio-printscreen.png",
    },
    {
        name: "Portfolio",
        description: "Site vitrine réalisé avec next.js et typescript",
        source: "github whatever",
        liveLink: "www.jsuislive",
        picture: "/images/portfolio-printscreen.png",
    },
    {
        name: "Portfolio",
        description: "Site vitrine réalisé avec next.js et typescript",
        source: "github whatever",
        liveLink: "www.jsuislive",
        picture: "/images/portfolio-printscreen.png",
    },
];

const createTags = ProjectList.map((project: ProjectType, index: number) => (
    <div key={index} className={styles.card}>
        <Image
            src={project.picture}
            alt={`Prise d'écran du projet ${project.name}`}
            className={styles.card__picture}
            width={1920}
            height={1080}
        />
        <h3 className={styles.card__title}>{project.name}</h3>
    </div>
));

const Project = () => {
    return (
        <section className={styles.project} id="project">
            <h2 className={styles.project__title}>Projets</h2>
            <div className={styles.container}>{createTags}</div>
        </section>
    );
};

export default Project;
