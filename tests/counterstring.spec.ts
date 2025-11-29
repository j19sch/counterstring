import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("");
  await expect(page).toHaveTitle(/^Counterstring$/);
});

test("get counterstring", async ({ page }) => {
  await page.goto("");

  await page.getByLabel("length:").fill("9");
  await page.getByRole("button", { name: "Generate" }).click();
  await expect(page.getByLabel("counterstring output")).toContainText(
    /^\*3\*5\*7\*9\*$/,
  );
});
