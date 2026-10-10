type About = { label: string; value: string };

type Experience = {
    role: string;
    company: string;
    location: string;
    period: string;
    points: string[];
};

export type Project = {
    name: string;
    tagline: string;
    description: string;
    images?: { desktop?: string; mobile?: string };
    stack: string[];
    year: string;
    links?: { live?: string; source?: string };
};

type Work = { title: string; text: string };

type Content = {
    about: About[];
    qualities: string[];
    experience: Experience[];
    projects: Project[];
    work: Work[];
    skills: string[];
};

export default {
    about: [
        { label: "location", value: "Latvia · Remote" },
        { label: "specialization", value: "Full-stack development" },
        { label: "languages", value: "TypeScript · Go · Python" },
        { label: "approach", value: "Pragmatic engineering, quality first" },
    ],

    qualities: [
        "Prioritize maintainability over quick fixes",
        "Take ownership from implementation to deployment",
        "Value clear communication and collaborative problem-solving",
    ],

    experience: [
        {
            role: "Full Stack Developer",
            company: "Rusticated LLC",
            location: "Remote",
            period: "2025 — 2026",
            points: [
                "Developed and maintained backend services and internal administration tools, supporting day-to-day operations as the platform evolved.",
                "Integrated third-party APIs and improved data exchange between internal services and external systems.",
                "Investigated legacy code and production issues, implementing fixes to improve application stability and maintainability.",
            ],
        },
        {
            role: "Software Developer",
            company: "GEINFOR",
            location: "L'Alcúdia, Spain",
            period: "2023",
            points: [
                "Developed ERP features to streamline business workflows and improve operational efficiency.",
                "Handled testing, debugging, and regression checks to maintain software quality throughout development.",
                "Collaborated with an international team across different workflows and development practices.",
            ],
        },
        {
            role: "Junior Web Developer",
            company: "Files.fm SIA",
            location: "Riga, Latvia",
            period: "2022",
            points: [
                "Developed a functional prototype of an internal employee time-tracking application.",
                "Enhanced internal tools and user interfaces across multiple company applications.",
                "Integrated Google Cloud APIs to automate translation workflows and reduce manual localization effort.",
            ],
        },
    ],

    projects: [
        {
            name: "Rusthub",
            tagline: "A connected platform for the Rust community",
            description:
                "A full-stack platform for a Rust game-server community, combining real-time server monitoring, interactive world maps, e-commerce, and community content. Features include authentication, shopping cart and checkout flows, live notifications, and editorial pages. Built with a TypeScript-first architecture, integrating external services and caching to deliver responsive experiences across desktop and mobile.",
            images: {
                desktop: "/projects/rusthub.webp",
                mobile: "/projects/rusthub-mobile.webp",
            },
            stack: [
                "Next.js",
                "React",
                "TypeScript",
                "Tailwind CSS",
                "Base UI",
                "tRPC",
                "TanStack React Query",
                "Zod",
                "Redis",
                "Zustand",
                "MDX",
                "Server-Sent Events",
                "Bun",
            ],
            year: "2026",
            links: {
                live: "https://rusthub.net",
            },
        },
        {
            name: "vantage",
            tagline: "A personal portfolio",
            description: "A personal portfolio built with React and TypeScript",
            images: {
                desktop: "/projects/vantage.webp",
                mobile: "/projects/vantage-mobile.webp",
            },
            stack: ["React", "TypeScript", "Vite", "Tailwind CSS"],
            year: "2026",
            links: {
                live: "https://ywwa.cc",
                source: "https://github.com/ywwa/vantage",
            },
        },
    ],

    work: [
        {
            title: "Full-stack development",
            text: "End-to-end web applications, from responsive interfaces to backend services, with an emphasis on type safety and maintainable architecture.",
        },
        {
            title: "Backend systems & integrations",
            text: "Well-structured APIs, database-backed services, and third-party integrations designed for reliable data exchange and predictable behavior.",
        },
        {
            title: "System reliability & maintenance",
            text: "Debugging complex issues, modernizing legacy code, and improving application stability through testing and thoughtful engineering.",
        },
    ],

    skills: [
        "TypeScript",
        "JavaScript",
        "React",
        "Next.js",
        "Go",
        "Python",
        "Node.js",
        "NestJS",
        "PostgreSQL",
        "Redis",
        "Docker",
        "Linux",
        "Tailwind CSS",
        "REST APIs",
        "CI/CD",
    ],
} satisfies Content;
