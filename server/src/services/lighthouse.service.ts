import lighthouse from "lighthouse";
import { launch } from "chrome-launcher";
import { LighthouseReport } from "../types/scan.types.js";
import { logger } from "../logger/logger.js";

export async function runLighthouse(
  url: string
): Promise<LighthouseReport> {
  const chrome = await launch({
    chromeFlags: ["--headless"],
  });

  try {
    const result = await lighthouse(url, {
      port: chrome.port,
      output: "json",
      logLevel: "silent",
    });

    if (!result?.lhr) {
      throw new Error("Lighthouse audit failed.");
    }

    const lhr = result.lhr;

    const failedAudits = Object.entries(lhr.audits)
      .filter(([, audit]) => audit.score !== null && audit.score < 1)
      .map(([id, audit]) => ({
        id,
        title: audit.title,
        description: audit.description,
        score: audit.score,
      }));

    return {
      performance: Math.round(
        (lhr.categories.performance.score ?? 0) * 100
      ),
      accessibility: Math.round(
        (lhr.categories.accessibility.score ?? 0) * 100
      ),
      bestPractices: Math.round(
        (lhr.categories["best-practices"].score ?? 0) * 100
      ),
      seo: Math.round(
        (lhr.categories.seo.score ?? 0) * 100
      ),
      failedAudits,
    };
  } finally {
    try {
      await chrome.kill();
    } catch (error) {
      logger.warn(
        { error },
        "Failed to clean up Lighthouse Chrome process."
      );
    }
  }
}