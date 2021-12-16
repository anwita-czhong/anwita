import test from "./support/next-fixture";
import { expect } from "@playwright/test";

test("main page title", async ({ page, port }) => {
  await page.goto(`http://localhost:${port}/`);

  const name = await page.locator("h1").allInnerTexts();
  expect(name).toContain("Anwita Biosciences");
});
