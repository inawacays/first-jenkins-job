
import { test } from '@playwright/test';

test('', async ({ page }) => {

    //console.log(process.env.PRACTICE_USERNAME);
   // console.log(process.env.PRACTICE_PASSWORD);

    console.log(`username is ${process.env.PRACTICE_USERNAME}`);
    console.log(`password is ${process.env.PRACTICE_PASSWORD}`);
  
});

test('Bypass authentication by encoding the credentials base64 format', async ({ page }) => {

    // username:password -> Encoding the credentials in base64 format
    let encodedCredentials = Buffer.from(`${process.env.PRACTICE_USERNAME}:${process.env.PRACTICE_PASSWORD}`).toString("base64");

    await page.setExtraHTTPHeaders({'Authorization': `Basic ${encodedCredentials}`});
    await page.goto("https://practice.cydeo.com/basic_auth");
    await page.waitForTimeout(3000);
  
});