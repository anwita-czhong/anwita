import { test, expect } from "@playwright/test";

test("can see all available pipelines", async ({ page }) => {
  await page.goto("/");

  const programs = [
    "Exenokine-21 (JS014)",
    "Exenokine-2 (RT003)",
    "aPD1-IL-2c (AWT020)",
    "aLAG3-IL-2c",
    "Antibody Drug Conjugates",
    "Discovery Programs",
  ];
  await expect(page.locator("div[data-role~='pipeline-display'] summary")).toContainText([new RegExp(`/${programs.join("|")}/`)]);
});

test("can click a pipeline to reveal its description", async ({ page }) => {
  await page.goto("/");

  const pipeline = page.locator("div[data-role~='pipeline-display']");
  const button = pipeline.locator("text='Discovery Programs'");
  // Stupid hack needed to make the test work on both touch and non-touch browsers
  await button.click();
  const pipelineText = (await page.locator("div[data-role~='pipeline-display'] details[open] div:not([aria-hidden])").innerText())
    .replace(/[^\P{C}\n]/gu, "");
  expect(pipelineText).toContain("Anwita applies our AccuKine cytokine");
});
