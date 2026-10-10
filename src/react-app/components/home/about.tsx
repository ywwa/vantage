import { Section, SectionHeading } from "@/components/ui/section";
import home from "@/data/home";
import { formatIndex } from "@/lib/format-index";

export default function About() {
    return (
        <Section
            id="about"
            divider={false}
            containerClassName="grid gap-12 lg:grid-cols-2 2xl:gap-16"
        >
            <div>
                <SectionHeading
                    title="About"
                    accent="a bit about me"
                />

                <p className="text-muted-foreground mt-6 max-w-xl text-lg leading-relaxed">
                    Full-stack developer who enjoys building software from the ground up —
                    practical, well-crafted applications that are fast, intuitive, and built to
                    last. I like exploring new technologies, understanding how things work beneath
                    the surface, and sweating the details that make software feel considered rather
                    than merely functional.
                </p>

                <p className="text-muted-foreground mt-4 max-w-xl text-lg leading-relaxed">
                    I enjoy figuring out how things work under the hood, finding simpler solutions
                    to complex problems, and continuously refining the way I build software. When
                    something breaks, I want to understand why — not just patch the symptoms. I
                    believe the best solutions are often the ones that solve the problem without
                    adding unnecessary complexity.
                </p>
            </div>

            <div>
                <div className="border-border/60 flex flex-col border-y">
                    {home.about.map(({ label, value }) => (
                        <div
                            key={label}
                            className="border-border/40 flex items-baseline justify-between border-b py-3 pr-0.5 last:border-b-0"
                        >
                            <span className="text-primary/70 font-mono text-sm">{label}</span>
                            <span className="text-muted-foreground">{value}</span>
                        </div>
                    ))}
                </div>

                <div className="mt-8">
                    <SectionHeading
                        title="How I work"
                        accent="values"
                    />

                    <div className="mt-6 flex max-w-xl flex-col gap-3">
                        {home.qualities.map((q, i) => (
                            <div
                                key={q}
                                className="border-border/40 flex items-baseline gap-3 border-b pb-3"
                            >
                                <span className="text-primary/70 font-mono text-sm">
                                    {formatIndex(i)}
                                </span>
                                <span className="text-muted-foreground">{q}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
}
