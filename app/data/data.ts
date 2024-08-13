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

export type MovingCard = {
    quote: string | undefined,
    name: string | undefined,
    title: string,
    image: string
    technologies: Array<ToolTip>
}
export const projects: Array<MovingCard> = [
    {
        quote: undefined,
        name: undefined,
        title: "Boca Jrs Unofficial Page",
        image: "boca_pr.png",
        technologies: [NextJs, TypeScript, Tailwind, PostreSql]
    },
    {
        quote: undefined,
        name: undefined,
        title: "Salinas Roberts Alcorta Attorneys",
        image: "salinas_robert.png",
        technologies: [NextJs, TypeScript, Tailwind]
    },
    {
        quote: undefined,
        name: undefined,
        title: "Take Away Now",
        image: "tan.png",
        technologies: [NextJs, TypeScript, Tailwind]
    },
    {
        quote: undefined,
        name: undefined,
        title: "PSA Ticket Request System",
        image: "psa_trs.png",
        technologies: [NextJs, TypeScript, Tailwind]
    },
    {
        quote: undefined,
        name: undefined,
        title: "FIFA 2022 World Cup Unofficial Page",
        image: "fifa_store.png",
        technologies: [ReactJs, JavaScript, Bootstrap]
    },
    {
        quote: undefined,
        name: undefined,
        title: "Wallet Partner",
        image: "salinas_robert.png",
        technologies: [Kotlin]
    },
    {
        quote: undefined,
        name: undefined,
        title: "Risttreto Web Page",
        image: "risttreto_wp.png",
        technologies: [Html, Css, Sass, JavaScript]
    },
  ];