import { Section, SectionHeading } from "@/components/ui/section";
import home from "@/data/home";

export default function Experience() {
    return (
        <Section>
            <SectionHeading
                title="Experience"
                accent="so far"
            />

            <div className="mt-6 flex flex-col">
                {home.experience.map((job) => (
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
        </Section>
    );
}
