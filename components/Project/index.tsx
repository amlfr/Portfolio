import styles from "./Project.module.scss";
import Image from "next/image";
import PopUp from "../PopUp";

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
        name: "Kasa",
        description: "Site de location de logement réalisé avec CRA",
        source: "github whatever",
        liveLink: "www.jsuislive",
        picture: "/images/portfolio-printscreen.png",
    },
    {
        name: "Booki",
        description: "Site vitrine réalisé avec next.js et typescript",
        source: "github whatever",
        liveLink: "www.jsuislive",
        picture: "/images/portfolio-printscreen.png",
    },
    {
        name: "Ohmyfood",
        description: "Site vitrine réalisé avec next.js et typescript",
        source: "github whatever",
        liveLink: "www.jsuislive",
        picture: "/images/portfolio-printscreen.png",
    },
];

const showPopUp = (target: string) => {
    const popUp = document.querySelector("#" + target) as Element;
    popUp.classList.add("visible");
};

const createTags = ProjectList.map((project: ProjectType, index: number) => (
    <div key={index}>
        <div className={styles.card} onClick={() => showPopUp(project.name)}>
            <Image
                src={project.picture}
                alt={`Prise d'écran du projet ${project.name}`}
                className={styles.picture}
                width={1920}
                height={1080}
            />
            <h3 className={styles.cardHeader}>{project.name}</h3>
        </div>
        <PopUp id={project.name} />
    </div>
));

const Project = () => {
    return (
        <section className={styles.section} id="project">
            <h2 className={styles.header}>Projets</h2>
            <div className={styles.container}>{createTags}</div>
        </section>
    );
};

export default Project;
