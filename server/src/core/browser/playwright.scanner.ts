import { chromium } from "playwright";
import fs from "fs";
import path from "path";
import { BrowserScanResult } from "../../types/scan.types.js";

export async function scanWebsite(
  url: string
): Promise<BrowserScanResult> {
  const browser = await chromium.launch({
    headless: true,
  });

  try {
    const page = await browser.newPage();

   

    const exceptions: {
  message: string;
}[] = [];

page.on("pageerror", (error) => {
  exceptions.push({
    message: error.message,
  });
});

    const networkRequests: {
  url: string;
  method: string;
  status: number;
}[] = [];

page.on("response", (response) => {
  networkRequests.push({
    url: response.url(),
    method: response.request().method(),
    status: response.status(),
  });
});

    

    const consoleLogs: {
  type: string;
  message: string;
}[] = [];

page.on("console", (msg) => {
  consoleLogs.push({
    type: msg.type(),
    message: msg.text(),
  });
});


    await page.goto(url, {
      waitUntil: "networkidle",
    });

    const title = await page.title();

    const screenshotDir = path.join(process.cwd(), "screenshots");

    if (!fs.existsSync(screenshotDir)) {
      fs.mkdirSync(screenshotDir, { recursive: true });
    }

    const screenshotPath = path.join(screenshotDir, "latest.png");

    await page.screenshot({
      path: screenshotPath,
      fullPage: true,
    });

    return {
  title,
  screenshot: screenshotPath,
  consoleLogs,
  networkRequests,
  exceptions,
};
  } finally {
    await browser.close();
  }
}