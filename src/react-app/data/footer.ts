import type { IconType } from "react-icons";
import { MdOutlineAlternateEmail } from "react-icons/md";

import { mailto } from "./contact";
import { socials } from "./socials";

type Link = { label: string; icon: IconType; href: string };
type Content = { links: Link[]; copyright: string };

export default {
    copyright: `${new Date().getFullYear()} Gabriels Kukutis. Built in 🇱🇻`,
    links: [
        ...socials,
        {
            label: "Email",
            href: mailto,
            icon: MdOutlineAlternateEmail,
        },
    ],
} satisfies Content;
