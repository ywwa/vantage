import { createBrowserRouter } from "react-router-dom";

import LenisBoundary from "@/components/lenis-boundary";
import RootLayout from "@/components/root-layout";

import ErrorPage from "./routes/error-page";
import HomePage from "./routes/home";
import NotFoundPage from "./routes/not-found";

const router = createBrowserRouter([
    {
        element: <LenisBoundary />,
        errorElement: <ErrorPage />,
        children: [
            {
                element: <RootLayout />,
                children: [
                    { index: true, element: <HomePage /> },
                    { path: "*", element: <NotFoundPage /> },
                ],
            },
        ],
    },
]);

export default router;