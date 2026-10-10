import { Outlet } from "react-router-dom";

import AppFooter from "./app-footer";
import AppHeader from "./app-header";

export default function RootLayout() {
    return (
        <div className="relative isolate flex min-h-svh flex-col">
            <AppHeader />

            <main className="flex flex-1 flex-col pt-16">
                <Outlet />
            </main>

            <AppFooter />
        </div>
    );
}
