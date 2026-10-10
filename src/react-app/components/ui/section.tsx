import React from "react";

import { cn } from "@/lib/utils";

type SectionProps = {
    id?: string;
    divider?: boolean;
    className?: string;
    containerClassName?: string;
    children: React.ReactNode;
};

export function Section({
    id,
    divider = true,
    className,
    containerClassName,
    children,
}: SectionProps) {
    return (
        <section
            id={id}
            className={cn("scroll-mt-24", divider && "border-border/60 border-t", className)}
        >
            <div
                className={cn(
                    "mx-auto w-full max-w-5xl px-6 py-16 2xl:max-w-7xl 2xl:px-10 2xl:py-24",
                    containerClassName,
                )}
            >
                {children}
            </div>
        </section>
    );
}

type SectionHeadingProps = {
    title: string;
    accent: string;
};

export function SectionHeading({ title, accent }: SectionHeadingProps) {
    return (
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <h2 className="font-heading text-muted-foreground text-sm font-semibold tracking-widest uppercase">
                {title}
            </h2>
            <span className="font-hand text-primary text-2xl leading-none">{accent}</span>
        </div>
    );
}
