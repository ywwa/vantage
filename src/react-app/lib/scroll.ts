import type Lenis from "lenis";

export function scrollToTop(lenis: Lenis | null | undefined) {
    if (lenis) lenis.scrollTo(0);
}

export function scrollToSection(lenis: Lenis | null | undefined, id: string) {
    if (lenis) lenis.scrollTo(`#${id}`, { offset: -72 });
}