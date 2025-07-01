import { test } from "@playwright/test";

test.describe("Test Group", () => {
  
  test.beforeEach(async ({ page }) => {
    await page.goto("https://practice.cydeo.com/");
  });

  test("innerText(): retrives the visible text", async ({ page }) => {
    let headerElement = page.locator("//h1/span[@class='h1y']");

    let actualText = await headerElement.innerText();

    console.log(actualText);

  });

  test("inputValue(): only works with <input>, <textarea>, <select>, retrives the input value", async ({ page }) => {
   
    let inputsLink = page.getByText("Inputs");
    await inputsLink.click();

    let inputBox = page.locator("//input[@type='number']");

    await page.waitForTimeout(3000);

    await inputBox.fill("12345");

    await page.waitForTimeout(3000);

    let actualInput = await inputBox.inputValue();

    console.log(actualInput);


  });

  test("getAttribute(): retrieves the attribute value", async ({ page }) => {
    
    let abTestingLink = page.locator("text='A/B Testing'"); 

     let hrefLink = await abTestingLink.getAttribute("href");

     console.log(hrefLink);

  });
  test("screenshot(): takes a screenshot of the page", async ({ page }) => {
    let screenshotPath = "screenshot.png";

    await page.screenshot({ path: screenshotPath });

  });
  test("waitForSelector(): waits for a selector to appear on the page", async ({ page }) => {
    await page.waitForSelector("text='A/B Testing'");
    console.log("A/B Testing link found");

  });
  test("waitForTimeout(): waits for a specified amount of time", async ({ page }) => {
    await page.waitForTimeout(3000);
    console.log("Waited for 3 seconds");

  });
  test("hover(): hovers over an element", async ({ page }) => {
    let hoverLink = page.getByText("Hovers");
    await hoverLink.click();

    let hoverElement = page.locator("//h3[text()='Hovers']");
    await page.waitForTimeout(3000);

    await hoverElement.hover();
    await page.waitForTimeout(3000);

    await hoverElement.screenshot({ path: "hovered.png" });
    console.log("Hovered on Hovers element and screenshot taken");

  });
  test("Frames", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/iframe");

    const frameLocator = page.frameLocator('iframe'); // Use CSS selector
    const text = await frameLocator.locator('body').innerText();
    console.log(text);
});
  

 

});