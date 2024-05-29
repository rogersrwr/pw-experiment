import { test, expect } from '@playwright/test';

const login = process.env.LOGIN;
const password = process.env.PASS;

test('test', async ({ page }) => {
  await page.goto('https://voice.google.com/about');
  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.getByLabel('Email or phone').fill(`${login}`);
  //await page.getByRole('button', { name: 'Next' }).click();
  await page.getByLabel('Email or phone').press('Enter');
  await page.getByLabel('Enter your password').fill(`${password}`);
  //await page.getByRole('button', { name: 'Next' }).click();
  await page.getByLabel('Email or phone').press('Enter');
  await page.getByRole('tab', { name: 'Messages' }).click();
  //await page.getByLabel('Message by ‪79041‬: test msg').click();
});