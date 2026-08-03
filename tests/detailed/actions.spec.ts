import {test, expect, Locator} from '@playwright/test';

//text input

test ('Text Input Actions', async ({page}) => {

    await page.goto('https://demowebshop.tricentis.com/');

    const searchBox: Locator = page.locator('#small-searchterms');

    await expect(searchBox).toBeVisible();

    await expect(searchBox).toBeEnabled();

    const maxLength: string | null = await searchBox.getAttribute('maxlength'); //returns value of the maxlength attribute of the search box

    console.log(`Max length of the search box is: ${maxLength}`);

    await expect(maxLength).toBe(null);

    await searchBox.fill('laptop');

    console.log("Text Content: " + await searchBox.inputValue());

})

//Radio button

test ('Radio Button Actions', async ({page}) => {

    await page.goto('https://demowebshop.tricentis.com/');

    const radioButton: Locator = page.locator('#pollanswers-2');

    await expect(radioButton).toBeVisible();
    await expect(radioButton).toBeEnabled();

    await radioButton.check();

    await expect(radioButton).toBeChecked();

})

//Checkbox

test ('Checkbox Actions', async ({page}) => {

    await page.goto('https://demowebshop.tricentis.com/');

    /*
    const checkbox: Locator = page.locator('#pollanswers-1');
    await expect(checkbox).toBeVisible();
    await expect(checkbox).toBeEnabled();
    await checkbox.check();
    await expect(await checkbox.isChecked()).toBe(true);
    */

    const checkbox: Locator = page.getByRole('checkbox', {name: 'Excellent'});

    await expect(checkbox).toBeVisible();
    await expect(checkbox).toBeEnabled();

})
