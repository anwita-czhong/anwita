import test from "./support/next-fixture";
import { expect } from "@playwright/test";

test("can see all available pipelines", async ({ page, port }) => {
  await page.goto(`http://localhost:${port}/`);

  const pipelineText = (await page.locator("div[data-role~='pipeline-display']").innerText())
    .replace(/[^\P{C}\n]/gu, "")
    .split("\n")
    .filter((s) => s.trim().length > 0)
    .map((s) => s.trim());
  const programs = [
    "Exenokine-21 (JS014)",
    "Exenokine-2 (RT003)",
    "aPD1-IL-2c (AWT020)",
    "aLAG3-IL-2c",
    "Antibody Drug Conjugates",
    "Discovery Programs",
  ];
  programs.forEach((program) => {
    expect(pipelineText).toContain(program);
  });
});

test("can click a pipeline to reveal its description", async ({ page, port }) => {
  await page.goto(`http://localhost:${port}/`);

  const pipeline = page.locator("div[data-role~='pipeline-display']");
  const button = pipeline.locator("text='Discovery Programs'");
  // Stupid hack needed to make the test work on both touch and non-touch browsers
  try {
    await button.tap();
  } catch (error) {
    await button.click();
  }
  const pipelineText = (await page.locator("div[data-role~='pipeline-display'] details[open] div").innerText())
    .replace(/[^\P{C}\n]/gu, "");
  expect(pipelineText.includes("Anwita applies our AccuKine cytokine")).toBeTruthy();
});
