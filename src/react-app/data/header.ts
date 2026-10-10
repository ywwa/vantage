type Link = { id: string; num: string; label: string; to: string };
type Content = { links: Link[]; [X: string]: string | Link[] };

export default {
    links: [
        { id: "projects", num: "01", label: "Projects", to: "/#projects" },
        { id: "work", num: "02", label: "Work", to: "/#work" },
        { id: "about", num: "03", label: "About", to: "/#about" },
        { id: "contact", num: "04", label: "Contact", to: "/#contact" },
    ],
} satisfies Content;
