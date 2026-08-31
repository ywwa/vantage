import type { Icon } from "lucide-react";
import type { IconType } from "react-icons";
import { FiLinkedin } from "react-icons/fi";
import { LuGithub, LuGitlab } from "react-icons/lu";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { type SimpleIcon } from "simple-icons";

type Link = {
    label: string;
    icon: typeof Icon | SimpleIcon | IconType;
    href?: string;
    onclick?: () => void;
};

type Content = {
    links: Link[];
    [X: string]: string | Link[];
};

export default {
    copyright: `© ${new Date().getFullYear()} Gabriels Kukutis. Built in Latvia.`,
    links: [
        {
            label: "GitHub",
            href: "https://github.com/ywwa",
            icon: LuGithub,
        },
        {
            label: "GitLab",
            href: "https://gitlab.com/ywwa",
            icon: LuGitlab,
        },
        {
            label: "LinkedIn",
            href: "https://linkedin.com/in/gabriels-kukutis",
            icon: FiLinkedin,
        },
        {
            label: "Email",
            href: "mailto:contact@ywwa.cc",
            onclick: () => {},
            icon: MdOutlineAlternateEmail,
        },
    ],
} satisfies Content;
