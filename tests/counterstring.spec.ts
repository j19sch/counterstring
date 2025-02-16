import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/^Counterstring$/);
});

test("get counterstring", async ({ page }) => {
  await page.goto("");

  await page.getByRole("textbox").fill("9");
  await page.getByRole("button").click();
  await expect(page.getByRole("paragraph")).toContainText("*3*5*7*9*");
});
// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
