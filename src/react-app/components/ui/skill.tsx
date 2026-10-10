"use client";

import { cva, type VariantProps } from "class-variance-authority";
import type React from "react";
import type { IconType } from "react-icons";

import { cn } from "@/lib/utils";

export type SkillIcon = IconType | React.ComponentType<React.SVGProps<SVGSVGElement>>;

type IconRenderer = React.ComponentType<{
    "className"?: string;
    "style"?: React.CSSProperties;
    "aria-hidden"?: boolean;
}>;

export const skillVariants = cva(
    "group/skill relative inline-flex items-center overflow-hidden border font-mono outline-none transition duration-200 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background",
    {
        defaultVariants: {
            content: "both",
            size: "default",
            variant: "default",
        },
        variants: {
            content: {
                both: "",
                icon: "justify-center",
                text: "",
            },
            size: {
                "default": "gap-2.5 px-3 py-2 text-sm",
                "lg": "gap-3 px-4 py-2.5 text-base",
                "sm": "gap-2 px-2.5 py-1.5 text-xs",
            },
            variant: {
                "default":
                    "border-border/60 bg-card/40 text-muted-foreground hover:-translate-y-0.5 hover:border-primary/40 hover:bg-card hover:text-foreground hover:shadow-lg hover:shadow-primary/10",
                "ghost":
                    "border-transparent bg-secondary/40 text-muted-foreground hover:bg-secondary hover:text-foreground",
                "outline":
                    "border-border/60 bg-transparent text-muted-foreground hover:border-primary/50 hover:text-foreground",
                "solid": "border-transparent bg-primary/15 text-primary hover:bg-primary/25",
            },
        },
    },
);

export interface SkillProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, "content"> {
    icon?: SkillIcon;
    label?: React.ReactNode;
    content?: VariantProps<typeof skillVariants>["content"];
    variant?: VariantProps<typeof skillVariants>["variant"];
    size?: VariantProps<typeof skillVariants>["size"];
    index?: React.ReactNode;
    iconClassName?: string;
    iconStyle?: React.CSSProperties;
    labelClassName?: string;
}

export function Skill({
    icon,
    label,
    content = "both",
    variant,
    size,
    index,
    className,
    iconClassName,
    iconStyle,
    labelClassName,
    children,
    ...props
}: SkillProps): React.ReactElement {
    const Icon = icon as IconRenderer | undefined;
    const text = label ?? children;
    const showIcon = Boolean(Icon) && content !== "text";
    const showText = content !== "icon" && text != null;

    return (
        <span
            data-slot="skill"
            className={cn(skillVariants({ content, size, variant }), className)}
            {...props}
        >
            {showIcon && Icon && (
                <Icon
                    aria-hidden
                    className={cn(
                        "text-primary/70 group-hover/skill:text-primary size-4 shrink-0 transition-colors",
                        size === "lg" && "size-5",
                        size === "sm" && "size-3.5",
                        iconClassName,
                    )}
                    style={iconStyle}
                />
            )}
            {showText && <span className={cn("truncate", labelClassName)}>{text}</span>}
            {index != null && (
                <span className="text-muted-foreground/40 group-hover/skill:text-primary/60 ml-auto pl-2 text-[11px] tracking-widest transition-colors">
                    {index}
                </span>
            )}
        </span>
    );
}
