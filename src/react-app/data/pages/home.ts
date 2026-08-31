import { FiLinkedin } from "react-icons/fi";
import { LuGithub, LuGitlab } from "react-icons/lu";

export default {
    socials: [
        { label: "GitHub", href: "https://github.com/ywwa", icon: LuGithub },
        { label: "GitLab", href: "https://gitlab.com/ywwa", icon: LuGitlab },
        {
            label: "LinkedIn",
            href: "https://linkedin.com/in/gabriels-kukutis",
            icon: FiLinkedin,
        },
    ],

    experience: [
        {
            role: "Full Stack Developer",
            company: "Rusticated LLC",
            location: "Remote",
            period: "2025 — 2026",
            points: [
                "Owned backend services and the internal admin panel, keeping them stable as the product scaled",
                "Integrated third-party APIs and kept data flowing reliably across external systems",
                "Tracked down and fixed legacy and faulty code to cut down on recurring issues",
            ],
        },
        {
            role: "Software Developer",
            company: "GEINFOR",
            location: "L'Alcúdia, Spain",
            period: "2023",
            points: [
                "Shipped ERP features that made day-to-day operations faster for the whole team",
                "Owned QA and debugging to keep releases reliable and regression-free",
                "Worked in a multicultural team, adapting to different workflows and ways of thinking",
            ],
        },
        {
            role: "Junior Web Developer",
            company: "Files.fm SIA",
            location: "Riga, Latvia",
            period: "2022",
            points: [
                "Built a working prototype of an internal employee time-tracking tool",
                "Improved internal tooling and UX across several company apps",
                "Added automated translations to the codebase using Google Cloud APIs",
            ],
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
        "CI/CD",
    ],

    about: [
        { label: "location", value: "Latvia · remote" },
        { label: "focus", value: "full-stack web, TypeScript" },
        { label: "editor", value: "neovim / vsc" },
        { label: "makes", value: "fast, reliable products" },
    ],

    qualities: [
        "Quality first — it's a bug, not a feature",
        "A genuine team player",
        "Always ready to learn",
    ],

    work: [
        {
            title: "Web applications",
            text: "Fast, accessible interfaces and full-stack apps built in TypeScript.",
        },
        {
            title: "APIs & integrations",
            text: "Third-party integrations and reliable, well-typed data exchange.",
        },
        {
            title: "Legacy & reliability",
            text: "Diagnosing faulty code and stabilizing systems for long-term health.",
        },
    ],
};
