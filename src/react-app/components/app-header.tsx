import { useLenis } from "lenis/react";
import React from "react";
import { Link } from "react-router-dom";

import header from "@/data/header";

function handleNavClick(lenis: ReturnType<typeof useLenis>, id: string) {
    if (lenis) lenis.scrollTo(`#${id}`, { offset: -72 });
}

export default function AppHeader() {
    const lenis = useLenis();

    const onNavigationalClick = (event: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        event.preventDefault();
        handleNavClick(lenis, id);
    };

    return (
        <header className="border-border/40 bg-background/70 fixed inset-x-0 top-0 z-40 border-b backdrop-blur-md">
            <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-3.5 2xl:max-w-7xl 2xl:px-10">
                <Link
                    to="/"
                    className="text-foreground hover:text-primary font-mono text-base font-semibold tracking-tight transition-colors"
                >
                    ywwa<span className="text-primary">_</span>
                </Link>

                <nav className="text-muted-foreground flex items-center gap-1 font-mono text-sm">
                    {header.links.map(({ num, to, id, label }) => (
                        <Link
                            key={num}
                            to={to}
                            onClick={(event) => onNavigationalClick(event, id)}
                            className="hover:bg-accent hover:text-foreground rounded-md px-3 py-1.5 transition-colors"
                        >
                            <span className="text-primary/70 mr-1.5">{num}</span>
                            {label}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
}
