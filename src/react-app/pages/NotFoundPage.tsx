import { usePageTitle } from "@/hooks/use-page-title";

import GenericErrorPage from "./GenericErrorPage";

export default function NotFoundPage() {
    usePageTitle("404 — Not Found");

    return (
        <GenericErrorPage
            status="404"
            title="Page not found"
            description="The page you're looking for doesn't exist or may have been moved. Check the URL and try again."
        />
    );
}
