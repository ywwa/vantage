import { createBrowserRouter } from "react-router-dom";

import LenisBoundary from "@/components/lenis-boundary";
import RootLayout from "@/components/root-layout";

import HomePage from "./routes/home";

const router = createBrowserRouter([
    {
        element: <LenisBoundary />,
        children: [
            {
                element: <RootLayout />,
                children: [
                    { path: "/", element: <HomePage /> },
                    // { path: "/500", element: <ServerErrorPage /> },
                    // { path: "*", element: <NotFoundPage /> },
                ],
            },
        ],
    },
]);

export default router;
