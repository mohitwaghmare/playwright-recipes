/*import { test, expect, Locator} from '@playwright/test'

test ("Multi Select Drop Down", async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    //1. Select option from dropdown (4 ways)

    await page.locator('#colors').selectOption(['Red', 'Blue', 'Green']); //using visible text
    //await page.locator('#colors').selectOption(['red', 'blue', 'green']); //using value attribute
    //await page.locator('#colors').selectOption([{label: 'Red'}, {label: 'Blue'}, {label: 'Green'}]); //using labels
    //await page.locator('#colors').selectOption([{index: 0}, {index: 2}, {index: 4}]); //using index

    //2. Check number of options in the dropdown (count)

    const dropdownOptions: Locator = page.locator('#colors>option');
    await expect(dropdownOptions).toHaveCount(7);

    //3. Check an option present in the dropdown

    const optionText: string[] = (await (dropdownOptions.allTextContents())).map(text=>text.trim());
    console.log(optionText)
    expect(optionText).toContain('Green');

    //4. Printing options from the Dropdown

    for(const option of optionText){
        console.log(option);
    }
})

*/