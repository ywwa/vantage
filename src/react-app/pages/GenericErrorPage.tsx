import { Link } from "react-router-dom";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface GenericErrorPageProps {
    status: string;
    title: string;
    description: string;
}

export default function GenericErrorPage({ status, title, description }: GenericErrorPageProps) {
    return (
        <div className="text-foreground mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center gap-6 px-6 py-24 text-center">
            <Badge
                variant={"outline"}
                size={"lg"}
                className="text-primary"
            >
                {status}
            </Badge>

            <div className="flex flex-col gap-3">
                <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-6xl">
                    {title}
                </h1>
                <p className="text-muted-foreground mx-auto max-w-md">{description}</p>
            </div>
            <Button render={<Link to="/" />}>Go home</Button>
        </div>
    );
}
