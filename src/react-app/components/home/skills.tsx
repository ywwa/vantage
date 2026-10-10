import { Section, SectionHeading } from "@/components/ui/section";
import { Skill } from "@/components/ui/skill";
import home from "@/data/home";
import { techIcons } from "@/data/tech-icons";

export default function Skills() {
    return (
        <Section id="skills">
            <SectionHeading
                title="Skills"
                accent="a few favorites"
            />

            <div className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
                {home.skills.map((skill) => (
                    <Skill
                        key={skill}
                        icon={techIcons[skill]}
                        label={skill}
                    />
                ))}
            </div>
        </Section>
    );
}
