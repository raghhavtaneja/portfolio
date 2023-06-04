import {
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    hexaware,
    cpp,
    java,
    airbnbclone,
    chatgame,
    aws,
    newsapp
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "C++",
        icon: cpp,
    },
    {
        name: "Java",
        icon: java,
    },
    {
        name: "AWS",
        icon: aws,
    }
];

const experiences = [
    {
        title: "Software Developer",
        company_name: "Hexaware Technologies",
        icon: hexaware,
        iconBg: "#ffffff",
        date: "Jun 2022 - Present",
        points: [
            "Developing and maintaining web applications using React.js, Redux, TypeScript other related technologies.",
            "Building various reusable React components for Organisation's internal React library.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

const projects = [
    {
        name: "Airbnb Clone",
        description:
            "Web application inspired by Airbnb that allows users to search, book, and manage house rentals, providing a convenient and efficient solution for travel needs.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "typescript",
                color: "pink-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "orange-text-gradient",
            },
            {
                name: "prisma",
                color: "blue-text-gradient",
            },
            {
                name: "nextauth",
                color: "green-text-gradient",
            },
        ],
        image: airbnbclone,
        source_code_link: "https://github.com/raghhavtaneja/airbnb-clone",
        live_link:""
    },
    {
        name: "Doodle Drawing game",
        description:
            "Web application that enables users to collaborate and chat in real-time, along with a game like scenario with timer and points table for the drawer and users. ",
        tags: [
            {
                name: "nodejs",
                color: "pink-text-gradient",
            },
            {
                name: "javascript",
                color: "green-text-gradient",
            },
            {
                name: "socket.io",
                color: "blue-text-gradient",
            },
            {
                name: "css",
                color: "orange-text-gradient",
            },
        ],
        image: chatgame,
        source_code_link: "https://github.com/raghhavtaneja/doodle-multiplayer-drawing-game",
        live_link:"https://doodle-draw-game.herokuapp.com/"
    },
    {
        name: "Tiny News Android App",
        description:
            "A dynamic news feed app that features lates news from around the world, fetches data using the Guardian News API.",
        tags: [
            {
                name: "java",
                color: "blue-text-gradient",
            },
            {
                name: "Android Studio",
                color: "green-text-gradient",
            },
            {
                name: "rest-api",
                color: "pink-text-gradient",
            },
        ],
        image: newsapp,
        source_code_link: "https://github.com/raghhavtaneja/TinyNews",
    },
];

export { technologies, experiences, projects };