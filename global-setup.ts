import { test, expect } from '@playwright/test';

test("setup checks", async ({ page }) => {
  await page.goto('https://playwright.dev/');
});
