import { Section, SectionHeading } from "@/components/ui/section";
import home from "@/data/home";
import { formatIndex } from "@/lib/format-index";

export default function Skills() {
    return (
        <Section>
            <SectionHeading
                title="Skills"
                accent="a few favorites"
            />

            <div className="mt-6 grid max-w-2xl grid-cols-1 gap-x-10 gap-y-2.5 sm:grid-cols-2">
                {home.skills.map((skill, i) => (
                    <div
                        key={skill}
                        className="border-border/40 flex items-baseline gap-3 border-b pb-2.5 font-mono text-sm"
                    >
                        <span className="text-primary/70">{formatIndex(i)}</span>
                        <span className="text-foreground">{skill}</span>
                    </div>
                ))}
            </div>
        </Section>
    );
}
