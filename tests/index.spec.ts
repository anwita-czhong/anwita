import test from "./support/next-fixture";
import { expect } from "@playwright/test";

test("main page title", async ({ page, port }) => {
  await page.goto(`http://localhost:${port}/`);

  const name = await page.locator("h1").allInnerTexts();
  expect(name).toContain("Anwita Biosciences");
});

test("can find the current mission statement", async ({ page, port }) => {
  await page.goto(`http://localhost:${port}`);

  const aboutSection = await page.innerText("div:has(span#about)");
  expect(aboutSection.includes("Our mission is to deliver transformative treatment")).toBeTruthy();
});
