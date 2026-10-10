import { useLenis } from "lenis/react";
import { Menu, X } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

import header from "@/data/header";
import { scrollToSection, scrollToTop } from "@/lib/scroll";
import { cn } from "@/lib/utils";

export default function AppHeader() {
    const lenis = useLenis();
    const [open, setOpen] = React.useState(false);

    const closeMenu = React.useCallback(() => setOpen(false), []);

    const onLogoClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        closeMenu();
        scrollToTop(lenis);
    };

    const onNavigationalClick = (
        event: React.MouseEvent<HTMLAnchorElement>,
        id: string,
    ) => {
        event.preventDefault();
        closeMenu();
        scrollToSection(lenis, id);
    };

    return (
        <header className="border-border/40 bg-background/70 fixed inset-x-0 top-0 z-40 border-b backdrop-blur-md">
            <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-3.5 2xl:max-w-7xl 2xl:px-10">
                <Link
                    to="/"
                    className="text-foreground hover:text-primary font-mono text-base font-semibold tracking-tight transition-colors"
                    onClick={onLogoClick}
                >
                    ywwa<span className="text-primary">_</span>
                </Link>

                <nav className="text-muted-foreground hidden items-center gap-1 font-mono text-sm sm:flex">
                    {header.links.map(({ num, to, id, label }) => (
                        <Link
                            key={num}
                            to={to}
                            onClick={(event) => onNavigationalClick(event, id)}
                            className="hover:bg-accent focus-visible:ring-ring hover:text-foreground rounded-md px-3 py-1.5 transition-colors focus-visible:ring-2 focus-visible:outline-none"
                        >
                            <span className="text-primary/70 mr-1.5">{num}</span>
                            {label}
                        </Link>
                    ))}
                </nav>

                <button
                    type="button"
                    onClick={() => setOpen((value) => !value)}
                    aria-label={open ? "Close menu" : "Open menu"}
                    aria-expanded={open}
                    aria-controls="mobile-nav"
                    className="text-muted-foreground hover:bg-accent focus-visible:ring-ring hover:text-foreground -mr-1.5 inline-flex size-9 items-center justify-center rounded-md transition-colors focus-visible:ring-2 focus-visible:outline-none sm:hidden"
                >
                    {open ? <X className="size-5" /> : <Menu className="size-5" />}
                </button>
            </div>

            <nav
                id="mobile-nav"
                className={cn(
                    "border-border/40 sm:hidden",
                    open
                        ? "border-t"
                        : "pointer-events-none hidden",
                )}
            >
                <div
                    className={cn(
                        "text-muted-foreground mx-auto flex w-full max-w-5xl flex-col gap-0.5 px-6 py-3 font-mono text-sm 2xl:max-w-7xl 2xl:px-10",
                        open && "animate-menu-in",
                    )}
                >
                    {header.links.map(({ num, to, id, label }) => (
                        <Link
                            key={num}
                            to={to}
                            onClick={(event) => onNavigationalClick(event, id)}
                            tabIndex={open ? 0 : -1}
                            className="focus-visible:ring-ring hover:bg-accent hover:text-foreground rounded-md px-3 py-2.5 transition-colors focus-visible:ring-2 focus-visible:outline-none"
                        >
                            <span className="text-primary/70 mr-3">{num}</span>
                            {label}
                        </Link>
                    ))}
                </div>
            </nav>
        </header>
    );
}