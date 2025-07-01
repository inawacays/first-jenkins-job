import { test, expect } from '@playwright/test';

test.describe('Test Group', () => {
    // create beforeEach to navigate to https://practice.cydeo.com/
  test.beforeEach(async ({ page }) => {
    await page.goto('https://practice.cydeo.com/');

    await expect(page).toHaveTitle("Practice");

    expect (await page.title() ).toBe("Practice");
  });

  test("Verify checkboxes are checked", async ({ page }) => {
   
    await page.getByText("Checkboxes").click(); 
    let firstCheckbox = page.locator("input#box1");
    let secondCheckbox = page.locator("input#box2");


    await firstCheckbox.check();
    await secondCheckbox.check();

    await expect(firstCheckbox).toBeChecked();
    await expect(secondCheckbox).toBeChecked();

    
    expect(await firstCheckbox.isChecked()).toBeTruthy();
    expect(await secondCheckbox.isChecked()).toBeTruthy();
    
  });

  test("Verify checkboxes are unchecked ", async ({ page }) => {
    await page.getByText("Checkboxes").click(); 
    let firstCheckbox = page.locator("input#box1");
    let secondCheckbox = page.locator("input#box2");

    await firstCheckbox.check();
    await secondCheckbox.check();

    await firstCheckbox.uncheck();
    await secondCheckbox.uncheck();

    await expect(firstCheckbox).not.toBeChecked();
    await expect(secondCheckbox).not.toBeChecked();

    expect(await firstCheckbox.isChecked()).toBeFalsy();
    expect(await secondCheckbox.isChecked()).toBeFalsy();

  });

  test("Verify text of the element", async ({ page }) => {

    let headerElement = page.locator("span.h1y");
    await expect(headerElement).toHaveText("Test Automation Practice");

    let actualText = await headerElement.innerText();
    expect(actualText).toEqual("Test Automation Practice");

    
  });
  test("Verify input value", async ({ page }) => {
    let inputsLink = page.getByText("Inputs");
    await inputsLink.click();

    let inputBox = page.locator("input[type='number']");

    await inputBox.fill("12345");

    let actualInput = await inputBox.inputValue();
    expect(actualInput).toEqual("12345");

  });
  test("Context Menu", async ({ page }) => {
    let contextMenuLink = page.getByText("Context Menu");
    await contextMenuLink.click();

    let contextMenu = page.locator("//h3[text()='Context Menu']");

    await expect(contextMenu).toBeVisible();

  });
  test("A/B Testing", async ({ page }) => {
    let abTestingLink = page.getByText("A/B Testing");
    await abTestingLink.click();

    let abTestingElement = page.locator("//h3[text()='No A/B Test']");

    await expect(abTestingElement).toBeVisible();

  });
  

  

});