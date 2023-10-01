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
    newsapp,
    apl,
    nextjslogo
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
        name: "NextJS",
        icon: nextjslogo,
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
            "Developed and maintained multiple web applications using React.js, Redux, TypeScript/JavaScript and other related technologies.",
            "Leveraged generative AI (Open AI) to automate call transcript summarization from Amazon Connect, enhancing agent productivity; implemented a seamless interface allowing direct review and submission of summaries to ServiceNow.",
            "Built various reusable React components for Organisation's internal React library.",
            "Implemented complete UI design for a client project that allows users to interact with thier private data and pdf.",
            "Leading Materials Engineering Solutions Company: Maintained application that helps in troubleshooting semiconductor manufacturing machinery with the help of Machine learning algorithms at the backend.",
            "Participated in code reviews and providing constructive feedback to other developers.",
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
        live_link:"https://rent-your-property.vercel.app/"
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
    {
        name: "APL",
        description:
            "APL is a Noida based company that manufactures and sells engine oils and industrial lubricants.",
        tags: [
            {
                name: "nextjs",
                color: "pink-text-gradient",
            },
            {
                name: "javascript",
                color: "green-text-gradient",
            },
            {
                name: "emailjs",
                color: "blue-text-gradient",
            },
            {
                name: "tailwindcss",
                color: "orange-text-gradient",
            },
        ],
        image: apl,
        live_link:"https://www.americanpetrolube.com/",
    },
];

export { technologies, experiences, projects };