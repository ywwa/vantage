import { useRouteError } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";

export default function ErrorPage() {
    const error = useRouteError();

    const message =
        error instanceof Error
            ? error.message
            : "Something went wrong while rendering this page.";

    return (
        <Section containerClassName="flex flex-col items-center gap-4 text-center">
            <p className="text-primary font-mono text-sm tracking-widest uppercase">
                Ups, something broke
            </p>
            <h1 className="font-heading text-foreground max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl">
                An <span className="font-hand text-primary">unexpected</span> error occurred
            </h1>
            <p className="text-muted-foreground max-w-md break-all font-mono text-sm">{message}</p>
            <Button
                render={<a href="/" />}
                className="mt-2"
            >
                Back home
            </Button>
        </Section>
    );
}