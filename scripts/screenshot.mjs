import { mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";

import { chromium, devices } from "playwright";

const OUT_DIR = new URL("../public/projects/", import.meta.url);

const DESKTOP_VIEWPORT = { width: 1440, height: 900 };
const MOBILE_DEVICE = devices["iPhone 13"];
const WAIT_TIMEOUT_MS = 60_000;
const SETTLE_MS = 1_200;
const SCREENSHOT_OPTIONS = { type: "webp", quality: 80 };

function usage() {
    console.error("usage: pnpm screenshot -- <url> [name]");
    console.error("  url  — site to capture (e.g. https://rusthub.net or localhost:3000)");
    console.error("  name — filename slug, defaults to url host (e.g. rusthub)");
}

function normalizeUrl(input) {
    return /^[a-z][a-z0-9+.-]*:\/\//i.test(input) ? input : `http://${input}`;
}

async function capture(page, url, outFile) {
    try {
        await page.goto(url, {
            waitUntil: "networkidle",
            timeout: WAIT_TIMEOUT_MS,
        });
    } catch (error) {
        const hint = url.startsWith("http://localhost")
            ? " (start the dev server first)"
            : "";
        throw new Error(`could not load ${url}${hint}: ${error.message}`);
    }
    await page.waitForTimeout(SETTLE_MS);
    await page.screenshot({ path: outFile, ...SCREENSHOT_OPTIONS });
}

async function main() {
    const [urlArg, name] = process.argv.slice(2).filter((arg) => arg !== "--");

    if (!urlArg) {
        usage();
        process.exit(1);
    }

    const url = normalizeUrl(urlArg);

    await mkdir(fileURLToPath(OUT_DIR), { recursive: true });

    let slug = name?.trim();
    if (!slug) slug = new URL(url).hostname.replace(/^www\./, "").split(".")[0];
    slug = slug.toLowerCase().replace(/[^a-z0-9-]+/g, "-").replace(/^-+|-+$/g, "");

    const desktopFile = fileURLToPath(new URL(`${slug}.webp`, OUT_DIR));
    const mobileFile = fileURLToPath(new URL(`${slug}-mobile.webp`, OUT_DIR));

    const browser = await chromium.launch();

    try {
        const desktop = await browser.newPage({
            viewport: DESKTOP_VIEWPORT,
            reducedMotion: "reduce",
        });
        await capture(desktop, url, desktopFile);

        const { isMobile, hasTouch, userAgent, viewport, deviceScaleFactor } = MOBILE_DEVICE;
        const mobile = await browser.newPage({
            deviceScaleFactor,
            hasTouch,
            isMobile,
            reducedMotion: "reduce",
            userAgent,
            viewport,
        });
        await capture(mobile, url, mobileFile);
    } finally {
        await browser.close();
    }

    console.log(`captured ${url} ->`);
    console.log(`  desktop ${desktopFile}`);
    console.log(`  mobile  ${mobileFile}`);
}

await main();