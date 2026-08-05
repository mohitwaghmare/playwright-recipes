import {test, expect, Locator} from '@playwright/test';

declare const __dirname: string;

const demoPage = `file:///${__dirname.replace(/\\/g, '/').replace(/^\/+/, '')}/../../demo-site/testing-practice.html`;

//test single drop down

test ('Single Select Dropdown', async ({page}) =>{

    await page.goto(demoPage);

    //await page.locator('#country').selectOption("India"); //visibletext
    //await page.locator('#country').selectOption({value: 'India'}); //by using value attributes
    //await page.locator('#country').selectOption({label: 'India'}); //by using label
    await page.locator('#country').selectOption({index:1});

})

test ('Check Dropdown Options', async ({page}) =>{

    await page.goto(demoPage);

    const dropdownOptions: Locator = page.locator('#country>option');

    await expect(dropdownOptions).toHaveCount(5);

    const count = await dropdownOptions.count();
    console.log("Total Options: ", count);

    const options = await dropdownOptions.allTextContents();
    console.log("Listed Countried: ", options);

    expect(options).toContain('India');

    for(const option of options){

        console.log(option)
    }

})