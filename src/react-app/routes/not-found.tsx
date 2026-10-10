import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";

export default function NotFoundPage() {
    return (
        <div className="flex flex-1 items-center justify-center px-6 py-24">
            <div className="flex flex-col items-center gap-5 text-center">
                <p className="text-primary font-mono text-sm tracking-widest uppercase">404</p>
                <h1 className="font-heading text-foreground max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl">
                    This page{" "}
                    <span className="font-hand text-primary text-4xl leading-none sm:text-5xl">
                        wandered off
                    </span>
                </h1>
                <p className="text-muted-foreground max-w-md">
                    The page you're looking for doesn't exist or has moved.
                </p>
                <Button
                    render={<Link to="/" />}
                    className="mt-2"
                >
                    Back home
                </Button>
            </div>
        </div>
    );
}