import type { IconType } from "react-icons";
import { MdOutlineAlternateEmail } from "react-icons/md";

import { socials } from "./socials";

type Link = { label: string; icon: IconType; href?: string };
type Content = { links: Link[]; [X: string]: string | Link[] };

export default {
    copyright: `${new Date().getFullYear()} Gabriels Kukutis. Built in 🇱🇻`,
    links: [
        ...socials,
        {
            label: "Email",
            href: "mailto:contact@ywwa.cc",
            icon: MdOutlineAlternateEmail,
        },
    ],
} satisfies Content;
