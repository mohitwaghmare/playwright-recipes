import {test, expect, Locator} from '@playwright/test';

declare const __dirname: string;

const demoPage = `file:///${__dirname.replace(/\\/g, '/').replace(/^\/+/, '')}/../../demo-site/testing-practice.html`;

//text input

test ('Text Input Actions', async ({page}) => {

    await page.goto(demoPage);

    const searchBox: Locator = page.locator('#full-name');

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

    await page.goto(demoPage);

    const radioButton: Locator = page.locator("input[name='gender'][value='female']");

    await expect(radioButton).toBeVisible();
    await expect(radioButton).toBeEnabled();

    await radioButton.check();

    await expect(radioButton).toBeChecked();

})

//Checkbox

test ('Checkbox Actions', async ({page}) => {

    await page.goto(demoPage);

    //1. Select specific checkbox (Option2) using getByLabel and assert

    const sundayCheckbox: Locator = page.getByLabel('Sun');
    await sundayCheckbox.check();
    await expect(sundayCheckbox).toBeChecked();

    //2. Select all checkboxes and assert is checked

    const days: string[] = ['Mon', 'Fri', 'Sun'];
    const checkboxes: Locator[] = days.map(index => page.getByLabel(index));
    expect(checkboxes.length).toBe(days.length);

    // 3. Select all checkboxes and assert each is checked

    for (const checkbox of checkboxes) {
        await checkbox.check();
        await expect(checkbox).toBeChecked();
    }

    // 4. Uncheck last 3 checkboxes and assert

    for (const checkbox of checkboxes.slice(-3)) {
        await checkbox.uncheck();
        await expect(checkbox).not.toBeChecked();
    }

    /* 5. Toggle Checkboxes: If checked, uncheck; if unnchecked, check. Assert state flipped

    for (const checkbox of checkboxes) {

        if (await checkbox.isChecked()) {

        //onlyne if checked

        await checkbox.uncheck();
        await expect(checkbox).not.toBeChecked();
        
        

        } else {

        //onlyne if not checked

        await checkbox.check
        await expect(checkbox).toBeChecked();

        }
    }
        */

    /* 6. Randomly select check boxes - select checkboxes by index (1, 3, 6) and assert

    const indexes: number[] = [1, 3, 6];

    for(const i of indexes) {

        await checkboxes[i].check();
        await expect(checkboxes[i]).toBeChecked();
    }
   
    await page.waitForTimeout(3000);

    */

    // 7. Select the checkbox based on the label

    const weekname='Fri';

    //const checkbox: Locator = page.getByLabel(weekname);

    for(const label of days) {

        if(label.toLowerCase()===weekname.toLowerCase())
        {
            const checkbox=page.getByLabel(label);
            checkbox.check();
            await expect(checkbox).toBeChecked();
        }
    }

})
