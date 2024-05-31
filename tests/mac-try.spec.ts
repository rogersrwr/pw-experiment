import { test, expect } from '@playwright/test';


const user = process.env.BA_USER;
const pass = process.env.BA_PASS;

test('test', async ({ page }) => {
  await page.goto('https://target110.brightarrow.com/r/');
  await page.getByLabel('Username').click();
  await page.getByLabel('Username').fill(`${user}`);
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill(`${pass}`);
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.frameLocator('iframe[title="Help Scout Beacon - Messages and Notifications"]').getByRole('button', { name: 'Close' }).click();
  await page.locator('div').filter({ hasText: /^My Lists$/ }).click();
  await expect(page.getByRole('link', { name: 'test list 1' })).toBeVisible();
  await page.getByRole('button', { name: 'Select an Action' }).click();
  await expect(page.getByRole('button', { name: 'Create a list' })).toBeVisible();
  await page.locator('.MuiPaper-root > div').first().click();
  await page.getByRole('link', { name: 'test num' }).click();
  await expect(page.getByRole('cell', { name: 'num, text' })).toBeVisible();
  await page.locator('div').filter({ hasText: 'Edit Message' }).nth(3).click();
  await expect(page.locator('#vertical-tabpanel-0').getByText('Texting')).toBeVisible();
  await page.getByRole('tab', { name: 'Texting' }).click();
  await expect(page.getByText('Link to Email Message')).toBeVisible();
  await page.getByRole('tab', { name: 'Load Prior Message' }).click();
  await expect(page.locator('#vertical-tabpanel-4').getByText('Load Prior Message')).toBeVisible();
  await page.getByRole('tab', { name: 'Proceed' }).click();
  await page.locator('div').filter({ hasText: /^Cancel$/ }).click();
  await page.getByTestId('MenuIcon').click();
  await page.getByRole('button', { name: 'BrightArrow Central' }).click();
  await page.locator('div').filter({ hasText: /^Reports$/ }).click();
  await expect(page.getByText('Reports of Messages')).toBeVisible();
  await page.getByTestId('FastRewindIcon').click();
  await expect(page.getByText('Welcome, Ryan test')).toBeVisible();
});