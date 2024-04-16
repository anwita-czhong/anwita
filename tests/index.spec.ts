import { test, expect } from "@playwright/test";

test("main page title", async ({ page }) => {
  await page.goto("/");

  const name = await page.locator("h1").allInnerTexts();
  expect(name).toContain("Anwita Biosciences");
});

test("can find the current mission statement", async ({ page }) => {
  await page.goto("/");

  const aboutSection = await page.innerText("div:has(span#about)");
  expect(aboutSection.includes("Our mission is to deliver transformative treatment")).toBeTruthy();
});
