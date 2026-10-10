import { useLenis } from "lenis/react";
import { ArrowDown, MapPin } from "lucide-react";
import type React from "react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { socials } from "@/data/socials";

import { WindowFrame } from "../ui/window-frame";

function handleNavClick(lenis: ReturnType<typeof useLenis>, id: string) {
    if (lenis) lenis.scrollTo(`#${id}`, { offset: -72 });
}

export default function Hero() {
    const lenis = useLenis();

    const onClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        handleNavClick(lenis, "projects");
    };

    return (
        <section className="mx-auto grid w-full max-w-5xl items-center gap-10 px-6 pt-20 pb-16 lg:grid-cols-2 lg:gap-14 2xl:max-w-7xl 2xl:gap-20 2xl:px-10 2xl:pt-28 2xl:pb-24">
            <div className="flex flex-col items-start gap-5">
                <h1 className="font-heading text-foreground text-4xl leading-[1.05] font-bold tracking-tight sm:text-5xl 2xl:text-6xl">
                    I build fast,{" "}
                    <span className="font-hand text-primary text-4xl leading-none sm:text-5xl 2xl:text-6xl">
                        clean
                    </span>{" "}
                    web experiences
                </h1>

                <p className="text-muted-foreground max-w-md text-lg leading-relaxed 2xl:max-w-lg">
                    Full-stack developer based in Latvia, building reliable web applications with
                    TypeScript — driven by clean architecture, thoughtful engineering, and code
                    quality.
                </p>

                <div className="flex flex-wrap items-center gap-3">
                    <Button
                        size="lg"
                        render={
                            <a
                                href="#projects"
                                onClick={onClick}
                            />
                        }
                    >
                        View my work
                        <ArrowDown />
                    </Button>
                </div>

                <div className="text-muted-foreground mt-2 flex items-center gap-4 text-sm">
                    <span className="inline-flex items-center gap-1.5">
                        <MapPin className="size-4" /> Latvia
                    </span>

                    <Separator
                        orientation="vertical"
                        className="h-4"
                    />

                    <span className="inline-flex items-center gap-4">
                        {socials.map((s) => (
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

            <WindowFrame
                title="ywwa@workstation: ~"
                className="rounded-xl"
                bodyClassName="space-y-4 px-6 py-8 font-mono text-sm leading-relaxed 2xl:px-8 2xl:py-10 2xl:text-base"
            >
                <p>
                    <span className="text-primary">$ </span>
                    <span className="text-foreground">whoami</span>
                </p>
                <p className="text-muted-foreground">Gabriels Kukutis — full-stack developer</p>

                <p>
                    <span className="text-primary">$ </span>
                    <span className="text-foreground">cat philosophy.md</span>
                </p>

                <p className="text-muted-foreground">
                    quality first. <span className="text-primary">it's a bug, not a feature.</span>
                </p>

                <p>
                    <span className="text-primary">$ </span>
                    <span className="text-foreground">status</span>
                    <span className="bg-primary ml-2 inline-block h-[1em] w-2 translate-y-0.5 animate-pulse" />
                </p>
            </WindowFrame>
        </section>
    );
}
