import data from "@/data/footer";

export default function Footer() {
    return (
        <footer className="border-border/60 border-t">
            <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-4 px-6 py-7 text-center sm:flex-row sm:text-left 2xl:max-w-7xl 2xl:px-10">
                <p className="text-muted-foreground text-sm">{data.copyright}</p>

                <div className="flex items-center gap-5">
                    {data.links.map((link) => {
                        const classes =
                            "inline-flex size-8 items-center justify-center rounded-sm text-muted-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

                        return link.onclick ? (
                            <button
                                key={link.label}
                                type="button"
                                onClick={link.onclick}
                                className={classes}
                                aria-label={link.label}
                            >
                                <link.icon className="size-4" />
                                <span className="sr-only">{link.label}</span>
                            </button>
                        ) : (
                            <a
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noreferrer"
                                className={classes}
                            >
                                <link.icon className="size-4" />
                                <span className="sr-only">{link.label}</span>
                            </a>
                        );
                    })}
                </div>
            </div>
        </footer>
    );
}
