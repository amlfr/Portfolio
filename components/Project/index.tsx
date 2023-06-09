import styles from "./Project.module.scss";
import Image from "next/image";
import PopUp from "../PopUp";

interface ProjectType {
    id: string;
    name: string;
    description: string;
    source: string;
    liveLink?: string;
    picture: string[];
}

//All infos about the projects
const ProjectList: Array<ProjectType> = [
    {
        id: "port",
        name: "Portfolio",
        description: "Site vitrine réalisé avec next.js et typescript",
        source: "https://github.com/amlfr/Portfolio",
        picture: [
            "/images/portfolio_screenshot.webp",
            "/images/portfolio_screenshot2.webp",
        ],
    },
    {
        id: "kasa",
        name: "Kasa",
        description:
            "Site de location de logement réalisé avec create react app utilisant styled-components",
        source: "https://github.com/amlfr/P7_kasa",
        liveLink: "https://p7-kasa-ten.vercel.app/",
        picture: [
            "/images/kasa_screenshot.webp",
            "/images/kasa_screenshot2.webp",
        ],
    },
    {
        id: "hot",
        name: "Hot takes",
        description:
            "Site de partage de sauces permettant une inscription et le like ou dislike des sauces d'autres utilisateurs, backend réalisé avec express et mongoDB",
        source: "https://github.com/amlfr/P6-Hot_takes",
        picture: [
            "/images/hottakes_screenshot.webp",
            "/images/hottakes_screenshot2.webp",
        ],
    },
    {
        id: "ohmy",
        name: "Ohmyfood",
        description:
            "Site proposant les menus de différents restaurant, site réalisé uniquement en html et css",
        source: "https://github.com/amlfr/P3_ohmyfood",
        liveLink: "https://amlfr.github.io/P3_ohmyfood/",
        picture: [
            "/images/ohmyfood_screenshot.webp",
            "/images/ohmyfood_screenshot2.webp",
        ],
    },
];

//Finding the right pop up and making it visible
const showPopUp = (target: string) => {
    const popUp = document.querySelector("#" + target) as Element;
    popUp.classList.add("visible");
};

const createTags = ProjectList.map((project: ProjectType, index: number) => (
    <div key={index}>
        <div className={styles.card}>
            <Image
                src={project.picture[0]}
                alt={`Prise d'écran du projet ${project.name}`}
                className={styles.picture}
                width={1920}
                height={1080}
                onClick={() => showPopUp(project.id)}
            />
            <h3
                className={styles.cardHeader}
                onClick={() => showPopUp(project.id)}
            >
                {project.name}
            </h3>
        </div>
        <PopUp
            id={project.id}
            name={project.name}
            source={project.source}
            description={project.description}
            picture={project.picture}
            liveLink={project.liveLink}
        />
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
