import { Outlet, useLocation } from "react-router-dom";

import { cn } from "@/lib/utils";

import Footer from "../Footer";
import Header from "../Header";

export default function RootLayout() {
    const location = useLocation();
    const isHome = location.pathname === "/";

    return (
        <div className="relative isolate flex min-h-svh flex-col">
            {isHome && <Header />}

            <main className={cn("flex flex-1 flex-col", { "pt-16": isHome })}>
                <Outlet />
            </main>

            {isHome && <Footer />}
        </div>
    );
}
