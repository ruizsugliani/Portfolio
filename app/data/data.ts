import { plugins } from "chart.js";
import { title } from "process";

export type ToolTip = {
    id: number;
    name: string;
    image: string;
}

const Tailwind: ToolTip = {
    id: 0,
    name: 'Tailwind',
    image: 'tailwindcss.svg'
}

const Html: ToolTip = {
    id: 1,
    name: 'HTML5',
    image: 'html5.svg'
}

const Css: ToolTip = {
    id: 2,
    name: 'CSS3',
    image: 'css3.svg'
}

const NextJs: ToolTip = {
    id: 3,
    name: 'NextJs',
    image: 'nextdotjs.svg'
}

const PostreSql: ToolTip = {
    id: 4,
    name: 'Postgre Sql',
    image: 'postgresql.svg'
}

const Kotlin: ToolTip = {
    id: 5,
    name: 'Postgre Sql',
    image: 'kotlin.svg'
}

const ReactJs: ToolTip = {
    id: 6,
    name: 'ReactJs',
    image: 'react.svg'
}

const TypeScript: ToolTip = {
    id: 7,
    name: 'TypeScript',
    image: 'typescript.svg'
}

const JavaScript: ToolTip = {
    id: 8,
    name: 'JavaScript',
    image: 'javascript.svg'
}

const Bootstrap: ToolTip = {
    id: 10,
    name: 'Bootstrap',
    image: 'bootstrap.svg'
}

const Sass: ToolTip = {
    id: 11,
    name: 'Sass',
    image: 'sass.svg'
}

const Firebase: ToolTip = {
    id: 12,
    name: 'Firebase',
    image: 'firebase.svg'
}

const SpringBoot: ToolTip = {
    id: 13,
    name: 'Spring Boot',
    image: 'springboot.svg'
}

const Cplusplus: ToolTip = {
    id: 14,
    name: 'C++',
    image: 'cplusplus.svg'
}

const Python: ToolTip = {
    id: 15,
    name: 'Python',
    image: 'python.svg'
}


export type MovingCard = {
    quote: string | undefined,
    name: string | undefined,
    title: string,
    image: string,
    technologies: Array<ToolTip>,
    url: string,
    type: 'University project' | 'Personal project' | 'Personal project - Work in progress'
}
export const projects: Array<MovingCard> = [
    {
        quote: undefined,
        name: undefined,
        title: "Boca Jrs Unofficial Page",
        image: "boca_pr.png",
        technologies: [NextJs, TypeScript, Tailwind, PostreSql],
        url: "https://boca-jrs-project.vercel.app/",
        type: "Personal project - Work in progress"
    },
    {
        quote: undefined,
        name: undefined,
        title: "Salinas Roberts Alcorta Attorneys",
        image: "salinas_robert.png",
        technologies: [NextJs, TypeScript, Tailwind],
        url: "https://salinas-roberts-alcorta.vercel.app/",
        type: "Personal project - Work in progress"
    },
    {
        quote: undefined,
        name: undefined,
        title: "Take Away Now",
        image: "tan.png",
        technologies: [NextJs, TypeScript, Tailwind, SpringBoot],
        url: "https://front-takeawaynow-dcnt.onrender.com/",
        type: "University project"
    },
    {
        quote: undefined,
        name: undefined,
        title: "PSA Ticket Request System",
        image: "psa_trs.png",
        technologies: [NextJs, TypeScript, Tailwind, SpringBoot],
        url: "https://front-aninfo-psa.onrender.com/",
        type: "University project"
    },
    {
        quote: undefined,
        name: undefined,
        title: "FIFA 2022 World Cup Unofficial Page",
        image: "fifa_store.png",
        technologies: [ReactJs, JavaScript, Bootstrap, Firebase],
        url: "https://github.com/ruizsugliani/FIFA-Store",
        type: "Personal project"
    },
    {
        quote: undefined,
        name: undefined,
        title: "Wallet Partner",
        image: "salinas_robert.png",
        technologies: [Kotlin, Firebase],
        url: "https://github.com/ruizsugliani/tdl-kotlin-2023-1c",
        type: "University project"
    },
    {
        quote: undefined,
        name: undefined,
        title: "Risttreto Web Page",
        image: "risttreto_wp.png",
        technologies: [Html, Css, Sass, JavaScript],
        url: "https://ristretto-cafe-resto.netlify.app/index.html",
        type: "Personal project"
    },
  ];

const CreditosObTot = 226;
const CreditosObAct = 131;
const CreditosOpTot = 24;
const CreditosOpAct = 13;
const PruebaSufIng = 8;

export const carreerData = {
    labels: [
        'Optional credits',
        'Required credits',
        'English proficiency test',
    ],
    datasets: [{
        data: [
            CreditosOpAct,
            CreditosObAct,
            PruebaSufIng,
        ],
        backgroundColor: [
        '#AF6FEC', /* Optativos actuales */
        '#3CA6F1', /* Obligatorios actuales */
        '#FEDC5D', /* Prueba suficiencia inglés */
        /*'#BCE1FA',  Obligatorios restantes */
        /*'#DCC0F7',  Optativos restantes */
        ],
        hoverOffset: 20,
        hoverBorderColor: "#000",
        borderColor: "#000",
    }],
}

export const adquiredSkills: Array<ToolTip> = [Cplusplus, Python, Html, Css, JavaScript, PostreSql, Tailwind, ReactJs]
export const learningSkills: Array<ToolTip> = [NextJs, Firebase, Kotlin, TypeScript]