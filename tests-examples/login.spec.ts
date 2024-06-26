import { test, expect } from '@playwright/test';

const login = process.env.LOGIN;
const password = process.env.PASS;
const tUser = process.env.TNOW_USER;
const tPass = process.env.TNOW_PASS;


test('test', async ({ page }) => {
  test.slow();
  await page.goto('https://voice.google.com/about');
  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.getByLabel('Email or phone').fill(`${login}`);
  //await page.getByRole('button', { name: 'Next' }).click();
  await page.getByLabel('Email or phone').press('Enter');
  await page.getByLabel('Enter your password').fill(`${password}`);
  //await page.getByRole('button', { name: 'Next' }).click();
  await page.getByLabel('Enter your password').press('Enter');

  try {
    await expect(page.getByRole('link', { name: 'Confirm your recovery phone' })).toBeVisible();
    await page.getByRole('link', { name: 'Confirm your recovery phone' }).click();
    await page.getByLabel('Phone number').click();
    await page.getByLabel('Phone number').fill(INSERT NUMBER HERE AGAIN LATER);
    await page.getByLabel('Phone number').press('Enter');
    //await page.goto('https://voice.google.com/u/0/calls');
    await expect(page.getByRole('heading', { name: 'Hi BrightArrow1!' })).toBeVisible({timeout: 10000});
    await page.getByRole('tab', { name: 'Messages' }).click();
    await page.getByLabel('Message by ‪79041‬: test msg').click();
    //await page.getByLabel('Unread. Message by ‪79041‬:').click();

    //path if no new message
    //await page.getByRole('tab', { name: 'Messages' }).click();
    //await page.getByLabel('Message by ‪79041‬: test msg').click();

    //original if there are messages
    //await page.getByRole('tab', { name: 'Messages: 1 unread' }).click();
    //await page.getByLabel('Unread. Message by ‪79041‬:').click();

    //more flexible if there are messages
    //await page.getByRole('tab', { name: 'Messages' }).click();
    //await page.getByLabel('Unread. Message by ‪79041‬:').click();
    } catch (error) {
    await page.goto("https://www.google.com");
  }

  // const visible = await page.locator('div', { hasText: 'Confirm your recovery phone' });
  // if (await visible.isVisible()) {
  //   await page.goto("google.com");
  // }

  
  //await page.getByLabel('Message by ‪79041‬: test msg').click();
});



/*
test('test', async ({ page }) => {
  await page.goto('https://www.textnow.com/');
  await page.getByRole('link', { name: 'Web Messaging' }).click();
  await page.getByLabel('Email or Username').click();
  await page.getByLabel('Email or Username').fill('');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('');
  await page.getByRole('button', { name: 'Log In' }).click();

  if (await page.getByText('Verify you are a human').isVisible) {
    await page.getByLabel('Press and Hold').click({delay: 10000 });
  }

  if (await page.getByText('Verify you are a human').isVisible) {
    await page.getByLabel('Press and Hold').click({delay: 10000 });
  }


  //await page.getByLabel('Press and Hold').click({delay: 10000 });
});

test('test-gvoice', async ({ page }) => {
  await page.getByRole('link', { name: 'Confirm your recovery phone' });

});
*/


/*
await expect(page.getByText('Verify it’s you', { exact: true })).toBeVisible();
  await expect(page.getByText('Choose how you want to sign')).toBeVisible();
  await expect(page.getByRole('link', { name: 'Get a call at (•••) •••-••14' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Use another phone or computer' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Confirm your recovery phone' })).toBeVisible();
  await page.getByRole('link', { name: 'Confirm your recovery phone' }).click();
  await expect(page.getByText('Confirm the phone number you')).toBeVisible();
  await page.getByLabel('Phone number').click();
  await page.getByLabel('Phone number').fill('ohonenumnebre');
  await page.getByRole('button', { name: 'Try another way' }).click();
  */