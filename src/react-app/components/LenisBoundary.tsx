import { ReactLenis } from "lenis/react";
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

export default function LenisBoundary() {
    const { pathname } = useLocation();

    // inf: temp placeholder
    const isLibrary = false;

    useEffect(() => {
        if (!isLibrary) return;
        window.scrollTo(0, 0);
    }, [pathname, isLibrary]);

    if (isLibrary) return <Outlet />;

    return (
        <ReactLenis
            root
            options={{
                lerp: 0.09,
                wheelMultiplier: 1,
                orientation: "vertical",
                gestureOrientation: "vertical",
            }}
        >
            <Outlet />
        </ReactLenis>
    );
}
