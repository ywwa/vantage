import type React from "react";

import { cn } from "@/lib/utils";

type WindowFrameProps = {
    title: string;
    className?: string;
    headerClassName?: string;
    titleClassName?: string;
    bodyClassName?: string;
    children: React.ReactNode;
};

export function WindowFrame(props: WindowFrameProps) {
    return (
        <div className={cn("border-border bg-card w-full overflow-hidden border", props.className)}>
            <div
                className={cn(
                    "border-border/60 flex items-center gap-2 border-b px-4 py-3",
                    props.headerClassName,
                )}
            >
                <span className="size-3 rounded-full bg-red-400" />
                <span className="size-3 rounded-full bg-yellow-400" />
                <span className="size-3 rounded-full bg-green-400" />

                <span
                    className={cn(
                        "text-muted-foreground ml-3 font-mono text-xs",
                        props.titleClassName,
                    )}
                >
                    {props.title}
                </span>
            </div>

            <div className={props.bodyClassName}>{props.children}</div>
        </div>
    );
}
