import type { Project } from "@/data/home";
import { cn } from "@/lib/utils";

import { WindowFrame } from "./window-frame";

type ProjectPreviewProps = {
    project: Project;
    className?: string;
};

export default function ProjectPreview({ project, className }: ProjectPreviewProps) {
    const href = project.links?.live ?? project.links?.source;
    const domain = (href ?? project.name).replace(/^https?:\/\//, "").replace(/\/$/, "");

    return (
        <div className={cn("group/shot relative", className)}>
            <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="block"
            >
                <WindowFrame
                    title={domain}
                    className="border-border bg-card hover:border-primary/40 block overflow-hidden rounded-xl border transition-colors"
                    headerClassName="border-border/60 flex items-center gap-2 border-b px-4 py-2.5"
                    bodyClassName="relative aspect-[16/10] overflow-hidden"
                >
                    {project.images?.desktop ? (
                        <img
                            src={project.images.desktop}
                            alt={`${project.name} screenshot`}
                            loading="lazy"
                            className="absolute inset-0 size-full object-cover object-top transition-transform duration-500 group-hover/shot:scale-[1.03]"
                        />
                    ) : (
                        <div className="relative flex size-full items-center justify-center">
                            <div className="absolute inset-0 bg-[radial-gradient(rgb(255_255_255/0.045)_1px,transparent_1px)] bg-size-[18px_18px]" />
                            <div className="relative flex flex-col items-center gap-3">
                                <span className="border-border/60 text-primary/80 flex size-14 items-center justify-center border font-mono text-xl">
                                    {project.name.slice(0, 2)}
                                </span>
                                <span className="text-muted-foreground font-mono text-xs">
                                    {project.name}
                                </span>
                            </div>
                        </div>
                    )}
                </WindowFrame>
            </a>

            {project.images?.mobile && (
                <div className="absolute -right-3 -bottom-6 z-10 w-24 sm:w-28 2xl:-right-6 2xl:-bottom-8 2xl:w-36">
                    <div className="border-border bg-card overflow-hidden border p-1 shadow-[0_24px_60px_-15px_rgb(0_0_0/0.9)]">
                        <div className="flex items-center justify-center py-0.5">
                            <span className="bg-border h-1 w-8 rounded-full 2xl:w-10" />
                        </div>
                        <div className="border-border/60 relative aspect-9/19.5 overflow-hidden border">
                            <img
                                src={project.images.mobile}
                                alt={`${project.name} mobile preview`}
                                loading="lazy"
                                className="absolute inset-0 size-full object-cover object-top"
                            />
                            <div className="pointer-events-none absolute inset-0 bg-linear-to-tr from-transparent via-transparent to-white/5" />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
