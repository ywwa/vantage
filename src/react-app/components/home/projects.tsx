import { Globe } from "lucide-react";
import { LuGithub } from "react-icons/lu";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ProjectPreview from "@/components/ui/project-preview";
import { Section, SectionHeading } from "@/components/ui/section";
import home from "@/data/home";
import { formatIndex } from "@/lib/format-index";

export default function Projects() {
    return (
        <Section id="projects">
            <SectionHeading
                title="Recent projects"
                accent="things I shipped"
            />

            <div className="mt-12 flex flex-col gap-14 2xl:gap-20">
                {home.projects.map((project, i) => (
                    <article
                        key={project.name}
                        className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12"
                    >
                        <ProjectPreview
                            project={project}
                            className={i % 2 === 1 ? "lg:order-2" : undefined}
                        />

                        <div className="flex flex-col">
                            <div className="flex flex-wrap items-baseline justify-between gap-2">
                                <div className="flex items-baseline gap-3">
                                    <span className="text-primary/70 font-mono text-sm">
                                        {formatIndex(i)}
                                    </span>
                                    <h3 className="font-heading text-foreground text-2xl font-semibold 2xl:text-3xl">
                                        {project.name}
                                    </h3>
                                </div>
                                <span className="text-muted-foreground font-mono text-xs">
                                    {project.year}
                                </span>
                            </div>
                            <p className="font-hand text-primary mt-2 text-2xl leading-none">
                                {project.tagline}
                            </p>
                            <p className="text-muted-foreground mt-4 text-base leading-relaxed">
                                {project.description}
                            </p>

                            <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2">
                                <span className="text-muted-foreground/70 font-mono text-[11px] tracking-widest uppercase">
                                    Stack
                                </span>
                                <div className="flex flex-wrap gap-1.5">
                                    {project.stack.map((tech) => (
                                        <Badge
                                            key={tech}
                                            variant="outline"
                                        >
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-6 flex flex-wrap items-center gap-2">
                                {project.links?.live && (
                                    <Button
                                        size="sm"
                                        render={
                                            <a
                                                href={project.links.live}
                                                target="_blank"
                                                rel="noreferrer"
                                            />
                                        }
                                    >
                                        <Globe />
                                        Live
                                    </Button>
                                )}
                                {project.links?.source && (
                                    <Button
                                        size="sm"
                                        variant="outline"
                                        render={
                                            <a
                                                href={project.links.source}
                                                target="_blank"
                                                rel="noreferrer"
                                            />
                                        }
                                    >
                                        <LuGithub />
                                        Source
                                    </Button>
                                )}
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </Section>
    );
}
