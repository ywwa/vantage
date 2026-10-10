import { ReactLenis } from "lenis/react";
import React from "react";
import { Outlet, useLocation } from "react-router-dom";

export default function LenisBoundary() {
    const { pathname } = useLocation();

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

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
