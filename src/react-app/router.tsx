import { createBrowserRouter } from "react-router-dom";

import RootLayout from "@/components/layouts/RootLayout";
import LenisBoundary from "@/components/LenisBoundary";

import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import ServerErrorPage from "./pages/ServerErrorPage";

const router = createBrowserRouter([
    {
        element: <LenisBoundary />,
        children: [
            {
                element: <RootLayout />,
                children: [
                    { path: "/", element: <HomePage /> },
                    { path: "/500", element: <ServerErrorPage /> },
                    { path: "*", element: <NotFoundPage /> },
                ],
            },
        ],
    },
]);

export default router;
