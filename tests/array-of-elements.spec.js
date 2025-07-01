import { test, expect } from '@playwright/test';

test.describe('Test Group', () => {

    let elements;// Define a variable to store all the elements as global variable

    // create beforeEach to navigate to https://practice.cydeo.com/.
     test.beforeEach(async ({ page }) => {
        await page.goto('https://practice.cydeo.com/');

        // Locate all the <a> tags within the <ul> tag
        elements = await page.locator("//ul[@class='list-group']/li/a").all();
    
     });

  test('Verify that there are 50 link elements within the <ul> tag', async ({ page }) => {

    //let elements = await page.locator("//ul[@class='list-group']/li/a").all();

    expect(elements.length).toBe(50); // Adjust this number as needed

    //expect(elements.length).toBeGreaterThanOrEqual(20);// Adjust this number as needed
    
  });

  test('Verify that each of the 50 link elements within the <ul> tag is visible and clickable', async ({ page }) => {

    //let elements = await page.locator("//ul[@class='list-group']/li/a").all();
    
    for (let e of elements) {
        await expect(e).toBeVisible(); // Verify that the element is visible
        //expect(await e.isVisible()).toBeTruthy; // Verify that the element is visible

        await expect(e).toBeEnabled(); // Verify that the element is enabled
        //expect(await e.isEnabled()).toBeTruthy; // Verify that the element is enabled

    }
    
  });

  test('Verify that each of the 50 link elements withing the <ul> tag has a href attribute', async ({ page }) => {
    
    //let elements = await page.locator("//ul[@class='list-group']/li/a").all();
    
    for (let e of elements) {
        await expect(e).toHaveAttribute("href"); // Verify that the element has a href attribute
        console.log(await e.getAttribute("href")); // Log the href attribute value
    }
    
  });
});

