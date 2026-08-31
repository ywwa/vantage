import { usePageTitle } from "@/hooks/use-page-title";

import GenericErrorPage from "./GenericErrorPage";

export default function ServerErrorPage() {
    usePageTitle("500 — Sumthing went WRONG");
    return (
        <GenericErrorPage
            status="500"
            title="Something went wrong"
            description="An unexpected error occurred on the server. Try again in a moment."
        />
    );
}
