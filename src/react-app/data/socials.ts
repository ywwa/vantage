import { IconType } from "react-icons";
import { FiLinkedin } from "react-icons/fi";
import { LuGithub, LuGitlab } from "react-icons/lu";

type Social = { label: string; href: string; icon: IconType };

export const socials: Social[] = [
    { label: "GitHub", href: "https://github.com/ywwa", icon: LuGithub },
    { label: "GitLab", href: "https://gitlab.com/ywwa", icon: LuGitlab },
    { label: "LinkedIn", href: "https://linkedin.com/in/gabriels-kukutis", icon: FiLinkedin },
];
