import { Separator } from "@base-ui/react";
import { ArrowRight, Mail, MapPin, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import data from "@/data/pages";
import { usePageTitle } from "@/hooks/use-page-title";

function Hero() {
    return (
        <section className="mx-auto grid w-full max-w-5xl items-center gap-10 px-6 pt-20 pb-16 lg:grid-cols-2 lg:gap-14 2xl:max-w-7xl 2xl:gap-20 2xl:px-10 2xl:pt-28 2xl:pb-24">
            <div className="flex flex-col items-start gap-5">
                <p className="text-primary font-mono text-sm 2xl:text-base">Gabriels Kukutis</p>
                <h1 className="font-heading text-foreground text-4xl leading-[1.05] font-bold tracking-tight sm:text-5xl 2xl:text-6xl">
                    I build fast,{" "}
                    <span className="font-hand text-primary text-4xl leading-none sm:text-5xl 2xl:text-6xl">
                        clean
                    </span>{" "}
                    web experiences
                </h1>
                <p className="text-muted-foreground max-w-md text-lg leading-relaxed 2xl:max-w-lg">
                    Full-stack developer in Latvia, crafting accessible products in TypeScript —
                    with a passion for Linux and an uncompromising eye for quality.
                </p>
                <div className="flex flex-wrap items-center gap-3">
                    <Button
                        size="lg"
                        render={<a href="#work" />}
                    >
                        View my work
                        <ArrowRight />
                    </Button>
                    {/* <Button
                        size="lg"
                        variant="ghost"
                        className="text-neutral-500" // @note: not the best option
                        render={
                            <a
                                href="/resume.pdf"
                                target="_blank"
                            />
                        }
                    >
                        <FileDown />
                        Download CV
                    </Button> */}
                </div>
                <div className="text-muted-foreground mt-2 flex items-center gap-4 text-sm">
                    <span className="inline-flex items-center gap-1.5">
                        <MapPin className="size-4" />
                        Latvia
                    </span>
                    <Separator
                        orientation="vertical"
                        className="h-4"
                    />
                    <span className="inline-flex items-center gap-4">
                        {data.home.socials.map((s) => (
                            <a
                                key={s.label}
                                href={s.href}
                                target="_blank"
                                rel="noreferrer"
                                className="hover:text-foreground transition-colors"
                            >
                                <s.icon className="size-4" />
                                <span className="sr-only">{s.label}</span>
                            </a>
                        ))}
                    </span>
                </div>
            </div>

            {/* Terminal window */}
            <div className="border-border bg-card w-full overflow-hidden rounded-xl border">
                <div className="border-border/60 flex items-center gap-2 border-b px-4 py-3">
                    <span className="size-3 rounded-full bg-[#ff5f56]" />
                    <span className="size-3 rounded-full bg-[#ffbd2e]" />
                    <span className="size-3 rounded-full bg-[#27c93f]" />
                    <span className="text-muted-foreground ml-3 font-mono text-xs">
                        ywwa@archlinux: ~
                    </span>
                </div>
                <div className="space-y-4 px-6 py-8 font-mono text-sm leading-relaxed 2xl:px-8 2xl:py-10 2xl:text-base">
                    <p>
                        <span className="text-primary">$ </span>
                        <span className="text-foreground">whoami</span>
                    </p>
                    <p className="text-muted-foreground">Gabriels Kukutis — full-stack developer</p>
                    <p>
                        <span className="text-primary">$ </span>
                        <span className="text-foreground">cat philosophy.txt</span>
                    </p>
                    <p className="text-muted-foreground">
                        quality first.{" "}
                        <span className="text-primary">it's a bug, not a feature.</span>
                    </p>
                    <p>
                        <span className="text-primary">$ </span>
                        <span className="text-foreground">status</span>
                        <span className="bg-primary ml-2 inline-block h-[1em] w-2 translate-y-0.5 animate-pulse" />
                    </p>
                </div>
            </div>
        </section>
    );
}

function About() {
    return (
        <section
            id="about"
            className="scroll-mt-24"
        >
            <div className="mx-auto grid w-full max-w-5xl gap-12 px-6 py-16 lg:grid-cols-2 2xl:max-w-7xl 2xl:gap-16 2xl:px-10 2xl:py-24">
                <div>
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                        <h2 className="font-heading text-muted-foreground text-sm font-semibold tracking-widest uppercase">
                            About
                        </h2>
                        <span className="font-hand text-primary text-2xl leading-none">
                            a bit about me
                        </span>
                    </div>
                    <p className="text-muted-foreground mt-6 max-w-xl text-lg leading-relaxed">
                        Full-stack developer drawn to the craft of building things{" "}
                        <span className="font-hand text-primary text-2xl leading-none">
                            by hand
                        </span>{" "}
                        — fast, well-made software that feels good to use. I move fast when there's
                        something new to learn, and I care about the details most people never
                        notice — but always feel.
                    </p>
                    <p className="text-muted-foreground mt-4 max-w-xl text-lg leading-relaxed">
                        I live close to the terminal — Neovim, tmux, shortcuts for everything — and
                        I like software that stays out of your way. When something breaks, I'd
                        rather fix it than work around it.
                    </p>
                    {/* <div className="mt-6">
							<Button variant="ghost" render={<a href="https://ywwa.cc" />}>
								<BookOpen />
								More about me
							</Button>
						</div> */}
                </div>

                <div className="flex flex-col">
                    <div className="border-border/60 flex flex-col border-y">
                        {data.home.about.map((row) => (
                            <div
                                key={row.label}
                                className="border-border/40 flex items-baseline justify-between gap-4 border-b py-3.5 last:border-b-0"
                            >
                                <span className="text-primary/70 font-mono text-sm">
                                    {row.label}
                                </span>
                                <span className="text-muted-foreground text-right">
                                    {row.value}
                                </span>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8">
                        <div className="flex items-baseline gap-3">
                            <h3 className="font-heading text-muted-foreground text-sm font-semibold tracking-widest uppercase">
                                How I work
                            </h3>
                            <span className="font-hand text-primary text-xl leading-none">
                                values
                            </span>
                        </div>
                        <div className="mt-4 flex max-w-xl flex-col gap-3">
                            {data.home.qualities.map((v, i) => (
                                <div
                                    key={v}
                                    className="border-border/40 flex items-baseline gap-3 border-b pb-3"
                                >
                                    <span className="text-primary/70 font-mono text-sm">
                                        {String(i + 1).padStart(2, "0")}
                                    </span>
                                    <span className="text-muted-foreground">{v}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function Experience() {
    return (
        <section className="border-border/60 border-t">
            <div className="mx-auto w-full max-w-5xl px-6 py-16 2xl:max-w-7xl 2xl:px-10 2xl:py-24">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h2 className="font-heading text-muted-foreground text-sm font-semibold tracking-widest uppercase">
                        Experience
                    </h2>
                    <span className="font-hand text-primary text-2xl leading-none">so far</span>
                </div>
                <div className="mt-8 flex flex-col">
                    {data.home.experience.map((job) => (
                        <div
                            key={job.company}
                            className="border-border/60 border-b py-8 last:border-b-0"
                        >
                            <div className="flex flex-wrap items-baseline justify-between gap-2">
                                <p className="text-primary font-mono text-sm">{job.company}</p>
                                <span className="text-muted-foreground font-mono text-sm">
                                    {job.period}
                                </span>
                            </div>
                            <h3 className="font-heading text-foreground mt-1 text-xl font-semibold 2xl:text-2xl">
                                {job.role}
                            </h3>
                            <p className="text-muted-foreground mt-1 text-sm">{job.location}</p>
                            <ul className="text-muted-foreground mt-4 max-w-2xl list-disc space-y-2 pl-5 text-sm leading-relaxed">
                                {job.points.map((point) => (
                                    <li key={point}>{point}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function Work() {
    return (
        <section
            id="work"
            className="border-border/60 scroll-mt-24 border-t"
        >
            <div className="mx-auto w-full max-w-5xl px-6 py-16 2xl:max-w-7xl 2xl:px-10 2xl:py-24">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h2 className="font-heading text-muted-foreground text-sm font-semibold tracking-widest uppercase">
                        What I do
                    </h2>
                    <span className="font-hand text-primary text-2xl leading-none">my craft</span>
                </div>
                <div className="border-border/60 bg-border/60 mt-8 grid gap-px border sm:grid-cols-3">
                    {data.home.work.map((item) => (
                        <div
                            key={item.title}
                            className="bg-background hover:bg-card flex flex-col p-6 transition-colors"
                        >
                            <h3 className="text-foreground font-medium">{item.title}</h3>
                            <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function Skills() {
    return (
        <section className="border-border/60 border-t">
            <div className="mx-auto w-full max-w-5xl px-6 py-16 2xl:max-w-7xl 2xl:px-10 2xl:py-24">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h2 className="font-heading text-muted-foreground text-sm font-semibold tracking-widest uppercase">
                        Skills
                    </h2>
                    <span className="font-hand text-primary text-2xl leading-none">
                        a few favorites
                    </span>
                </div>
                <div className="mt-8 grid max-w-2xl grid-cols-1 gap-x-10 gap-y-2.5 sm:grid-cols-2">
                    {data.home.skills.map((skill, i) => (
                        <div
                            key={skill}
                            className="border-border/40 flex items-baseline gap-3 border-b pb-2.5 font-mono text-sm"
                        >
                            <span className="text-primary/70">
                                {String(i + 1).padStart(2, "0")}
                            </span>
                            <span className="text-foreground">{skill}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function Contact() {
    return (
        <section
            id="contact"
            className="border-border/60 scroll-mt-24 border-t"
        >
            <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-6 px-6 py-20 text-center 2xl:max-w-7xl 2xl:px-10 2xl:py-28">
                <h2 className="font-heading text-foreground max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl 2xl:text-5xl">
                    Let's build{" "}
                    <span className="font-hand text-primary text-4xl leading-none sm:text-5xl 2xl:text-6xl">
                        something
                    </span>{" "}
                    together
                </h2>
                <p className="text-muted-foreground max-w-xl">
                    I'm always open to new projects, ideas, or opportunities — feel free to reach
                    out.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3">
                    <Button
                        size="lg"
                        onClick={() => {
                            window.location.href = "mailto:contact@ywwa.cc";
                        }}
                    >
                        <Mail />
                        email me
                    </Button>
                    <Button
                        size="lg"
                        variant="outline"
                        render={<a href="https://github.com/ywwa" />}
                    >
                        <Send />
                        Message me
                    </Button>
                </div>
            </div>
        </section>
    );
}

export default function HomePage() {
    usePageTitle("Gabriels Kukutis");
    return (
        <div className="w-full">
            <Hero />
            <About />
            <Experience />
            <Work />
            <Skills />
            <Contact />
        </div>
    );
}
