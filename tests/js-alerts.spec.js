import { test } from '@playwright/test';

test.describe('Test Group', () => {
    // create beforeEach to navigate to https://practice.cydeo.com/javascript_alerts
  test.beforeEach(async ({ page }) => {
    await page.goto('https://practice.cydeo.com/javascript_alerts');
  });

  test("Regular Alert", async ({ page }) => {

    page.on('dialog', async (dialog) => {
        console.log(`Alert Message: ${dialog.message()}`);
        await page.waitForTimeout(3000);
        await dialog.accept();
    });

    let clickForJSAlertButton = page.locator("//button[@onclick='jsAlert()']");
    await clickForJSAlertButton.click();
    await page.waitForTimeout(3000);
    
  });

  test("Confirmation Alert", async ({ page }) => {
    page.on('dialog', async (alert) => {
        console.log(`Alert Message: ${alert.message()}`);
        await page.waitForTimeout(3000);
        await alert.dismiss();
    });

    let clickForJSConfirmButton = page.locator("//button[@onclick='jsConfirm()']");
    await clickForJSConfirmButton.click();
    await page.waitForTimeout(3000);
    
  });

  test("Prompt Alert", async ({ page }) => {
    page.on('dialog', async (alert) => {
        console.log(`Alert Message: ${alert.message()}`);
        await alert.accept("Wais");
        await page.waitForTimeout(3000);
    });

    let clickForJSPromptButton = page.locator("//button[@onclick='jsPrompt()']");
    await clickForJSPromptButton.click();
    await page.waitForTimeout(3000);
    
  });
});