import { Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";

export default function Contact() {
    return (
        <Section
            id="contact"
            containerClassName="flex flex-col items-center gap-6 text-center"
        >
            <h2 className="font-heading text-foreground max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl 2xl:text-5xl">
                Let's build{" "}
                <span className="font-hand text-primary text-4xl leading-none sm:text-5xl 2xl:text-6xl">
                    something
                </span>{" "}
                together
            </h2>
            <p className="text-muted-foreground max-w-xl">
                I'm always open to new projects, ideas, or opportunities — feel free to reach out.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
                <Button
                    size="lg"
                    onClick={() => {
                        window.location.href = "mailto:contact@ywwa.cc";
                    }}
                >
                    <Mail />
                    Email me
                </Button>
            </div>
        </Section>
    );
}
