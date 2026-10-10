import { Section, SectionHeading } from "@/components/ui/section";
import home from "@/data/home";

export default function Work() {
    return (
        <Section id="work">
            <SectionHeading
                title="What I do"
                accent="my craft"
            />

            <div className="border-border/60 bg-border/60 mt-6 grid gap-px border sm:grid-cols-3">
                {home.work.map(({ title, text }) => (
                    <div
                        key={title}
                        className="bg-background hover:bg-card flex flex-col p-6 transition-colors"
                    >
                        <h3 className="text-foreground font-medium">{title}</h3>
                        <p className="text-muted-foreground mt-2 text-sm leading-relaxed">{text}</p>
                    </div>
                ))}
            </div>
        </Section>
    );
}
