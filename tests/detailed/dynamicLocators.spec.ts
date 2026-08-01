import { test, expect, Locator } from '@playwright/test';

test('Handle Dynamic Elements using XPath', async ({ page, browserName }) => {

    test.skip(browserName === 'firefox', 'Skipping on Firefox due to demo website issue');

    await page.goto("https://testautomationpractice.blogspot.com/");

    //Loop to click button 5 times
    for (let i = 1; i <= 5; i++) {

        let button: Locator = page.locator("//button[text()='STOP' or text()='START']");

        //locate the button with either "Start" or "Stop" text and click it
        //let button = await page.locator('button[@name= "start"]')
        //let button = await page.locator('//button[@name= "start" or @name= "stop"]')
        //let button = await page.locator('//button[contains(@name, "st")]')
        //let button = await page.locator('//button[starts-with(@name, "st")]')

        await button.click();
        await page.waitForTimeout(1000);
    }

})

//Using CSS Selectors to locate dynamic elements
test('Handle Dynamic Elements using CSS Selectors', async ({ page, browserName }) => {

    test.skip(browserName === 'firefox', 'Skipping on Firefox due to demo website issue');

    await page.goto("https://testautomationpractice.blogspot.com/");

    //Loop to click button 5 times
    for (let i = 1; i <= 5; i++) {

        let button: Locator = page.locator("button:has-text('STOP'), button:has-text('START')");

        //locate the button with either "Start" or "Stop" text and click it
        //let button = await page.locator('button[@name= "start"]')
        //let button = await page.locator('//button[@name= "start" or @name= "stop"]')
        //let button = await page.locator('//button[contains(@name, "st")]')
        //let button = await page.locator('//button[starts-with(@name, "st")]')

        await button.click();
        await page.waitForTimeout(1000);
    }

})

//Using playwright specific locators to locate dynamic elements

test('Handle Dynamic Elements using Playwright Specific Locators', async ({ page, browserName }) => {

    test.skip(browserName === 'firefox', 'Skipping on Firefox due to demo website issue');

    await page.goto("https://testautomationpractice.blogspot.com/");

    for (let i = 1; i <= 5; i++) {

        const button: Locator = page.getByRole('button', { name: /STOP|START/ });

        await button.click();
        await page.waitForTimeout(1000);
    }
})