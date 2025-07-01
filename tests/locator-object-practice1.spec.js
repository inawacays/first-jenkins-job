import { test } from "@playwright/test";

test.describe("Test Group", () => {

  // create beforeEach to navigate to https://practice.cydeo.com/
  test.beforeEach(async ({ page }) => {
    await page.goto("https://practice.cydeo.com/");
  });


  test("Check(): checks the radio button and check boxes if they haven't been checked yet", async ({ page }) => {

    // let checkboxesLink = page.locator("text='Checkboxes'");
    let checkboxesLink = page.getByText("Checkboxes");
    await checkboxesLink.click();

    // pause for 3 seconds.

    let checkbox1 = page.locator("//input[@id='box1']");

    await checkbox1.check();
   
  });

  test("Uncheck: unchecks the radio button and check boxes if they haven't been unchecked yet", async ({ page }) => {
    let checkboxesLink = page.getByText("Checkboxes");
    await checkboxesLink.click();

    let checkbox2 = page.locator("#box2");

    await checkbox2.uncheck();


  });

  test("SelectOption(): used for dropdown boxes with select tagname", async ({ page }) => {
    
    let dropdownLink = page.getByText("Dropdown");
    await dropdownLink.click();

    let simpleDropdown = page.locator("//select[@id='dropdown']");

    // await simpleDropdown.selectOption("1"); // selecting by the value.
    // await simpleDropdown.selectOption({label: "Option 1"}); // selecting by text
    await simpleDropdown.selectOption({index: 1}); // selecting by index


  });
  test("Hovers ", async ({ page }) => {
    let hoverLink = page.getByText("Hovers");
    await hoverLink.click();

    let hoverElement = page.locator("//h3[text()='Hovers']");
    await page.waitForTimeout(3000); // replace with your element id']


    await hoverElement.hover();
    await page.waitForTimeout(3000); // wait for 2 seconds.
    await hoverElement.screenshot({ path: "hovered.png" });
  
  });

  test("JavaScript Alerts", async ({ page }) => {
    let alertsLink = page.getByText("JavaScript Alerts");
    await alertsLink.click();
  
    page.on('dialog', async dialog => {
      console.log(`Dialog message: ${dialog.message()}`);
      await dialog.accept();
    });
  

    let alertButton = page.locator("button[onclick='jsAlert()']");
    await alertButton.click();
  
    await page.waitForTimeout(3000); // wait for 3 seconds.
  });

  


  
  
    

});