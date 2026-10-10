import { Hono } from "hono";
const app = new Hono<{ Bindings: Env }>();

const FAVICON_EMOJIS = ["🧑‍💻", "🌙", "⚙️", "🛠️", "🔥", "✨", "💜", "🗄️", "📦"];

function randomFaviconSvg(emoji: string): string {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><text x="32" y="42" font-size="36" text-anchor="middle" dominant-baseline="middle">${emoji}</text></svg>`;
}

app.get("/favicon.ico", (c) => {
    const emoji = FAVICON_EMOJIS[Math.floor(Math.random() * FAVICON_EMOJIS.length)];
    return c.body(randomFaviconSvg(emoji), 200, {
        "Content-Type": "image/svg+xml",
        "Cache-Control": "public, max-age=86400",
    });
});

const ROBOTS_TXT = `User-Agent: *
Allow: /
`;

app.get("/robots.txt", ({ body }) => {
    return body(ROBOTS_TXT, 200, {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "public, max-age=86400",
    });
});

export default app;
