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
    "Exenokine-21",
    "Exenokine-2",
    "Mableukin-2PD1",
    "AWT-024",
    "Discovery Programs",
  ];
  programs.forEach((program) => {
    expect(pipelineText).toContain(program);
  });
});

test("can click a pipeline to reveal its description", async ({ page, port }) => {
  await page.goto(`http://localhost:${port}/`);

  const pipeline = page.locator("div[data-role~='pipeline-display']");
  await pipeline.locator("text='Discovery Programs'").click();
  const pipelineText = (await page.locator("div[data-role~='pipeline-display']").innerText())
    .replace(/[^\P{C}\n]/gu, "");
  expect(pipelineText.includes("Anwita applies our AccuKine cytokine")).toBeTruthy();
});
