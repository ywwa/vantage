import footer from "@/data/footer";

export default function AppFooter() {
    return (
        <footer className="border-border/60 border-t">
            <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-4 px-6 py-7 text-center sm:flex-row sm:text-left 2xl:max-w-7xl 2xl:px-10">
                <p className="text-muted-foreground text-xs">&copy; {footer.copyright}</p>

                <div className="flex items-center gap-5">
                    {footer.links.map(({ href, icon, label }) => {
                        const isMail = href.startsWith("mailto:");
                        const Icon = icon;

                        return (
                            <a
                                key={label}
                                href={href}
                                target={isMail ? undefined : "_blank"}
                                rel={isMail ? undefined : "noreferrer"}
                                className={
                                    "text-muted-foreground hover:text-primary focus-visible:ring-ring inline-flex size-8 items-center justify-center rounded-sm transition-colors focus-visible:ring-2 focus-visible:outline-none"
                                }
                                aria-label={label}
                            >
                                <Icon className="size-4" />
                                <span className="sr-only">{label}</span>
                            </a>
                        );
                    })}
                </div>
            </div>
        </footer>
    );
}
