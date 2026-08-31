type Link = {
    id: string;
    num: string;
    label: string;
    to: string;
};

type Content = {
    links: Link[];
    [X: string]: string | Link[];
};

export default {
    links: [
        { id: "work", num: "01", label: "Work", to: "/#work" },
        { id: "about", num: "02", label: "About", to: "/#about" },
        { id: "contact", num: "03", label: "Contact", to: "/#contact" },
    ],
} satisfies Content;
