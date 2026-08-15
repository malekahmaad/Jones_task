import { test, expect } from '@playwright/test';

test('Successfully navigating to the thank you page', async ({ page }) => {
    await page.goto('https://test.netlify.app/');

    await page.getByLabel('NAME').fill('Malek Ahmad');
    await page.getByLabel('EMAIL').fill('malek.ahmad@gmail.com');
    await page.getByLabel('PHONE').fill('972500001112');
    await page.getByLabel('COMPANY').fill('Malek Tech');
    await page.getByLabel('WEBSITE').fill('https://example.com');
    await page.getByLabel('Number of Employees').selectOption('51-500');
    
    await page.screenshot({ path: 'images/success_screenshot.png' });

    await page.getByRole('button', { name: 'Request a call back' }).click();

    await expect(page.getByText('Thank You!')).toBeVisible();
    await expect(page.getByText("You'll hear from us soon.")).toBeVisible();
    console.log('Successful test: Reached the thank you page');
  });

  test('Wrong input fields', async ({ page }) => {
    await page.goto('https://test.netlify.app/');

    await page.getByLabel('NAME').fill('Malek Ahmad');
    await page.getByLabel('EMAIL').fill('malek.ahmad@gmail.com');
    await page.getByLabel('PHONE').fill('972500001112');
    await page.getByLabel('COMPANY').fill('Malek Tech');
    await page.getByLabel('WEBSITE').fill('example.com');
    await page.getByLabel('Number of Employees').selectOption('51-500');

    await page.screenshot({ path: 'images/Wrong_input_fields_screenshot.png' });

    await page.getByRole('button', { name: 'Request a call back' }).click();

    await expect(page.getByText('Thank You!')).toBeHidden();
    await expect(page.getByText("You'll hear from us soon.")).toBeHidden();
    console.log('Wrong input fields: Couldnt reach the thank you page');
  });

  test('Empty input fields', async ({ page }) => {
    await page.goto('https://test.netlify.app/');

    await page.getByLabel('EMAIL').fill('malek.ahmad@gmail.com');
    await page.getByLabel('PHONE').fill('972500001112');
    await page.getByLabel('COMPANY').fill('Malek Tech');
    await page.getByLabel('WEBSITE').fill('example.com');
    await page.getByLabel('Number of Employees').selectOption('51-500');

    await page.screenshot({ path: 'images/Empty_input_fields_screenshot.png' });

    await page.getByRole('button', { name: 'Request a call back' }).click();

    await expect(page.getByText('Thank You!')).toBeHidden();
    await expect(page.getByText("You'll hear from us soon.")).toBeHidden();
    console.log('Empty input fields: Couldnt reach the thank you page');
  });