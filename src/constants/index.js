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
    figma,
    docker,
    carrent,
    jobit,
    tripguide,
    threejs,
    hexaware,
    cpp,
    java,
    airbnbclone,
    chatgame,
    aws
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
        source_code_link: "https://github.com/",
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
        source_code_link: "https://github.com/",
    },
    // {
    //     name: "Trip Guide",
    //     description:
    //         "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    //     tags: [
    //         {
    //             name: "nextjs",
    //             color: "blue-text-gradient",
    //         },
    //         {
    //             name: "supabase",
    //             color: "green-text-gradient",
    //         },
    //         {
    //             name: "css",
    //             color: "pink-text-gradient",
    //         },
    //     ],
    //     image: tripguide,
    //     source_code_link: "https://github.com/",
    // },
];

export { technologies, experiences, projects };