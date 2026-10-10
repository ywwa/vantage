import { chromium } from "playwright";

const browser = await chromium.launch();
const page = await browser.newPage({
    viewport: { width: 1200, height: 630 },
});

try {
    await page.goto("http://localhost:5173/", { waitUntil: "networkidle" });
    await page.waitForTimeout(1500);
    await page.screenshot({ path: "public/og.png", type: "png" });
} finally {
    await browser.close();
}

console.log("wrote public/og.png");
