import { test, expect, Locator } from '@playwright/test';

declare const __dirname: string;

const demoPage = `file:///${__dirname.replace(/\\/g, '/').replace(/^\/+/, '')}/../../demo-site/dynamic-locators.html`;

test('Handle Dynamic Elements using XPath', async ({ page }) => {

    await page.goto(demoPage);

    //Loop to click button 5 times
    for (let i = 1; i <= 5; i++) {

        let button: Locator = page.locator("//button[text()='STOP' or text()='START']");

        //locate the button with either "Start" or "Stop" text and click it
        //let button = await page.locator('button[@name= "start"]')
        //let button = await page.locator('//button[@name= "start" or @name= "stop"]')
        //let button = await page.locator('//button[contains(@name, "st")]')
        //let button = await page.locator('//button[starts-with(@name, "st")]')

        await button.click();
    }

})

//Using CSS Selectors to locate dynamic elements
test('Handle Dynamic Elements using CSS Selectors', async ({ page }) => {

    await page.goto(demoPage);

    //Loop to click button 5 times
    for (let i = 1; i <= 5; i++) {

        let button: Locator = page.locator("button:has-text('STOP'), button:has-text('START')");

        //locate the button with either "Start" or "Stop" text and click it
        //let button = await page.locator('button[@name= "start"]')
        //let button = await page.locator('//button[@name= "start" or @name= "stop"]')
        //let button = await page.locator('//button[contains(@name, "st")]')
        //let button = await page.locator('//button[starts-with(@name, "st")]')

        await button.click();
    }

})

//Using playwright specific locators to locate dynamic elements

test('Handle Dynamic Elements using Playwright Specific Locators', async ({ page }) => {

    await page.goto(demoPage);

    for (let i = 1; i <= 5; i++) {

        const button: Locator = page.getByRole('button', { name: /STOP|START/ });

        await button.click();
    }
});